import { useReveal } from '../../hooks/useReveal'
import { useLanguage } from '../../i18n/LanguageContext'
import { SectionLabel } from '../layout/SectionLabel'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDivElement>(0.15)

  return (
    <section id="contact" className="container-x py-20 md:py-28">
      <SectionLabel index="03">{t.contact.label}</SectionLabel>

      <div ref={ref} className="reveal mt-10">
        <p className="max-w-2xl text-[clamp(1.9rem,4.4vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.03em]">
          {t.contact.title}
        </p>

        <div className="mt-12 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
