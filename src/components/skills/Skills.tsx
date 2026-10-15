import { skillCategories, skills } from '../../data/skills'
import { useReveal } from '../../hooks/useReveal'
import { useLanguage } from '../../i18n/LanguageContext'
import { cssVars } from '../../utils/style'
import { SectionLabel } from '../layout/SectionLabel'
import { SkillItem } from './SkillItem'

export const Skills = () => {
  const { t } = useLanguage()
  const ref = useReveal<HTMLDListElement>(0.1)

  return (
    <section id="skills" className="container-x py-20 md:py-28">
      <SectionLabel index="02">{t.skills.label}</SectionLabel>

      <dl ref={ref} className="mt-12 space-y-8">
        {skillCategories.map((category, i) => (
          <div
            key={category}
            className="reveal grid gap-3 lg:grid-cols-12 lg:gap-6"
            style={cssVars({ '--delay': `${i * 120}ms` })}>
            <dt className="text-sm text-mute lg:col-span-3 lg:pt-2.5">
              {t.skills.categories[category]}
            </dt>
            <dd className="lg:col-span-9">
              <ul className="flex flex-wrap gap-2.5">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
