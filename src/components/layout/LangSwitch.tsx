import { useLanguage } from '../../i18n/LanguageContext'
import type { Lang } from '../../i18n/types'

const options: Lang[] = ['ru', 'en']

export const LangSwitch = () => {
  const { lang, setLang, t } = useLanguage()

  return (
    <div role="group" aria-label={t.nav.language} className="flex items-center gap-2 text-sm">
      {options.map((option, index) => (
        <span key={option} className="flex items-center gap-2">
          {index > 0 && (
            <span aria-hidden className="text-mute/50">
              /
            </span>
          )}
          <button
            type="button"
            lang={option}
            aria-pressed={lang === option}
            onClick={() => setLang(option)}
            className={`py-1 uppercase transition-colors duration-300 ${
              lang === option ? 'font-semibold text-bone' : 'text-mute hover:text-bone'
            }`}>
            {option}
          </button>
        </span>
      ))}
    </div>
  )
}
