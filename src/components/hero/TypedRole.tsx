import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../../utils/env'

interface TypedRoleProps {
  phrases: string[]
}

const START_DELAY = 700
const TYPE_SPEED = 80
const ERASE_SPEED = 40
const HOLD = 2200

/** Печатает фразы по кругу: набор, пауза, стирание, следующая фраза. */
export const TypedRole = ({ phrases }: TypedRoleProps) => {
  const reduced = prefersReducedMotion()
  const [typed, setTyped] = useState(reduced ? phrases[0] : '')

  useEffect(() => {
    if (reduced) {
      setTyped(phrases[0])
      return
    }
    let index = 0
    let pos = 0
    let erasing = false
    let timer = 0

    const tick = () => {
      const phrase = phrases[index]
      if (!erasing) {
        pos += 1
        setTyped(phrase.slice(0, pos))
        if (pos >= phrase.length) {
          erasing = true
          timer = window.setTimeout(tick, HOLD)
          return
        }
        timer = window.setTimeout(tick, TYPE_SPEED)
      } else {
        pos -= 1
        setTyped(phrase.slice(0, pos))
        if (pos <= 0) {
          erasing = false
          index = (index + 1) % phrases.length
          timer = window.setTimeout(tick, 350)
          return
        }
        timer = window.setTimeout(tick, ERASE_SPEED)
      }
    }

    setTyped('')
    timer = window.setTimeout(tick, START_DELAY)
    return () => window.clearTimeout(timer)
  }, [phrases, reduced])

  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), '')

  return (
    <span className="inline-flex items-baseline gap-3">
      <span aria-hidden className="text-accent">
        &gt;
      </span>
      <span className="sr-only">{phrases.join(', ')}</span>
      {/* Невидимая копия самой длинной фразы резервирует ширину */}
      <span aria-hidden className="relative inline-block">
        <span className="invisible whitespace-pre">{longest}</span>
        <span className="absolute left-0 top-0 whitespace-pre">
          {typed}
          <span className="caret" />
        </span>
      </span>
    </span>
  )
}
