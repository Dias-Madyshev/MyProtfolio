import { useEffect, useState } from 'react'
import { profile } from '../../data/links'
import { useLanguage } from '../../i18n/LanguageContext'
import { cssVars } from '../../utils/style'
import { Avatar } from './Avatar'
import { SocialLinks } from './SocialLinks'
import { TypedRole } from './TypedRole'

export const Hero = () => {
  const { t } = useLanguage()
  const [ready, setReady] = useState(false)

  // Плавное появление при загрузке страницы.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section
      id="home"
      className={`container-x flex min-h-[100svh] items-center py-28 ${ready ? 'is-in' : ''}`}>
      <div className="grid w-full items-center gap-14 md:grid-cols-2 md:gap-12 lg:gap-20">
        {/* Слева: фото сверху, под ним имя и должность */}
        <div className="flex flex-col items-start gap-10">
          <div className="reveal reveal-scale self-center md:self-start" style={cssVars({ '--delay': '150ms' })}>
            <Avatar alt={t.hero.photoAlt} />
          </div>

          <div>
            <h1
              className="reveal text-[clamp(2.2rem,4.6vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]"
              style={cssVars({ '--delay': '300ms' })}>
              {t.hero.name}
            </h1>
            <p
              className="reveal mt-3 text-xl font-medium text-bone/90 md:text-2xl"
              style={cssVars({ '--delay': '450ms' })}>
              <TypedRole phrases={t.hero.roles} />
            </p>
          </div>
        </div>

        {/* Справа: «Обо мне» одним абзацем и кнопки */}
        <div className="reveal" style={cssVars({ '--delay': '550ms' })}>
          <p className="max-w-xl text-base leading-relaxed text-bone/80 md:text-lg">
            {t.hero.about}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contact"
              className="rounded-sm bg-bone px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-accent">
              {t.hero.ctaContact}
            </a>
            <a href={profile.resume} download className="link pb-0.5 text-sm font-medium">
              {t.hero.ctaResume} ↓
            </a>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
