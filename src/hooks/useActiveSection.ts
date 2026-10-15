import { useEffect, useState } from 'react'
import type { SectionId } from '../i18n/types'

/** Возвращает id секции, которая сейчас находится в центре экрана. */
export const useActiveSection = (ids: SectionId[]): SectionId => {
  const [active, setActive] = useState<SectionId>(ids[0])

  useEffect(() => {
    const nodes = ids
      .map(id => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        })
      },
      // «Линия» в центре экрана: секция активна, когда пересекает её.
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [ids])

  return active
}
