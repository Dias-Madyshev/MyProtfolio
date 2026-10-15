import type { ComponentType } from 'react'
import type { Skill } from '../../data/skills'
import { cssVars } from '../../utils/style'

export const SkillItem = ({ skill }: { skill: Skill }) => {
  // react-icons возвращает ReactNode, а TS 4.9 ждёт JSX.Element: сужаем тип в одном месте.
  const Icon = skill.icon as ComponentType | undefined

  return (
    <li
      className="skill flex items-center gap-2.5 rounded-md border px-3.5 py-2.5 text-[0.9375rem] md:text-base"
      style={skill.color ? cssVars({ '--brand': skill.color }) : undefined}>
      {Icon && (
        <span aria-hidden className="text-xl md:text-2xl">
          <Icon />
        </span>
      )}
      {skill.name}
    </li>
  )
}
