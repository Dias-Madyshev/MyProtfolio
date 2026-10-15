import { useEffect, useRef } from 'react'

/**
 * Плавное появление элемента при попадании в экран.
 * Стили `.reveal` / `.is-in` лежат в index.css.
 */
export const useReveal = <T extends HTMLElement>(threshold = 0.15) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-in')
      return
    }
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
