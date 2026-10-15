import { jobs } from '../../data/experience'
import { useReveal } from '../../hooks/useReveal'
import { useLanguage } from '../../i18n/LanguageContext'
import { SectionLabel } from '../layout/SectionLabel'

interface JobProps {
  company: string
  role: string
  tags: string[]
  bullets: string[]
}

const Job = ({ company, role, tags, bullets }: JobProps) => {
  const ref = useReveal<HTMLLIElement>(0.15)

  return (
    <li
      ref={ref}
      className="reveal hairline grid gap-6 border-t py-12 first:border-t-0 first:pt-0 md:py-16 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-4">
        <h3 className="text-xl font-semibold tracking-tight">{company}</h3>
        <p className="mt-1 text-sm text-mute">{role}</p>
      </div>

      <div className="lg:col-span-7 lg:col-start-6">
        <ul className="space-y-3 leading-relaxed text-bone/85">
          {bullets.map(bullet => (
            <li key={bullet} className="flex gap-4">
              <span aria-hidden className="text-mute">
                –
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-mute">{tags.join(' · ')}</p>
      </div>
    </li>
  )
}

export const Experience = () => {
  const { t } = useLanguage()

  return (
    <section id="experience" className="container-x py-20 md:py-28">
      <SectionLabel index="01">{t.experience.label}</SectionLabel>

      <ol className="mt-12">
        {jobs.map(job => (
          <Job
            key={job.id}
            company={job.company}
            role={job.role}
            tags={job.tags}
            bullets={t.experience.jobs[job.id].bullets}
          />
        ))}
      </ol>
    </section>
  )
}
