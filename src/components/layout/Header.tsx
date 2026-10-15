import { useEffect, useState } from 'react'
import { profile, sections } from '../../data/links'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useLanguage } from '../../i18n/LanguageContext'
import { LangSwitch } from './LangSwitch'

export const Header = () => {
  const { t } = useLanguage()
  const active = useActiveSection(sections)
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Открытое мобильное меню: блокируем прокрутку страницы, Esc закрывает.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`load-down fixed inset-x-0 top-0 z-50 border-b bg-ink transition-[height,border-color] duration-300 ${
          compact || open ? 'hairline h-14' : 'h-[4.5rem] border-transparent'
        }`}>
        <div className="container-x flex h-full items-center justify-between">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="text-sm font-bold uppercase tracking-[0.08em]">
            D. Madyshev
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-7 text-sm">
                {sections.map(id => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      aria-current={active === id ? 'true' : undefined}
                      className={`transition-colors duration-300 ${
                        active === id ? 'text-accent' : 'text-mute hover:text-bone'
                      }`}>
                      {t.nav[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <LangSwitch />
            <a href={profile.resume} download className="link pb-0.5 text-sm">
              {t.nav.resume} ↓
            </a>
          </div>

          <div className="flex items-center gap-5 lg:hidden">
            <LangSwitch />
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(value => !value)}
              className="py-1 text-sm">
              {open ? t.nav.close : t.nav.menu}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-ink pt-24 lg:hidden">
        <div className="container-x flex h-full flex-col justify-between pb-10">
          <ul className="flex flex-col">
            {sections.map(id => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-3xl font-semibold tracking-tight ${
                    active === id ? 'text-accent' : ''
                  }`}>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.resume} download className="link self-start pb-0.5 text-sm">
            {t.nav.resume} ↓
          </a>
        </div>
      </div>
    </>
  )
}
