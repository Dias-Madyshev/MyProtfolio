import { useEffect, useRef } from 'react'
import { Contact } from './components/contact/Contact'
import { Experience } from './components/experience/Experience'
import { Hero } from './components/hero/Hero'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Skills } from './components/skills/Skills'
import { useLanguage } from './i18n/LanguageContext'

export default function App() {
  const { t, lang } = useLanguage()
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)

  // Короткая анимация при смене языка. Компоненты не перемонтируются,
  // поэтому введённое в форме и положение прокрутки сохраняются.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const node = mainRef.current
    if (!node) return
    node.classList.remove('lang-swap')
    void node.offsetWidth // перезапуск CSS-анимации
    node.classList.add('lang-swap')
  }, [lang])

  return (
    <>
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-ink">
        {t.nav.skip}
      </a>
      <ScrollProgress />
      <Header />
      <main ref={mainRef}>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
