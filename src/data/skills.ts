import type { IconType } from 'react-icons'
import { FaJava } from 'react-icons/fa'
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSass,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbSparkles, TbSql } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import type { SkillCategory } from '../i18n/types'

export interface Skill {
  name: string
  category: SkillCategory
  /** Фирменный цвет: проявляется только при наведении. */
  color?: string
  /** Без иконки показываем просто название. */
  icon?: IconType
}

// Строго по резюме + технологии, которые назвал владелец (Spring Boot, Bootstrap, Git).
export const skills: Skill[] = [
  { name: 'TypeScript', category: 'languages', color: '#3178c6', icon: SiTypescript },
  { name: 'JavaScript', category: 'languages', color: '#f7df1e', icon: SiJavascript },
  { name: 'Java', category: 'languages', color: '#ea2d2e', icon: FaJava },
  { name: 'Python', category: 'languages', color: '#4b8bbe', icon: SiPython },
  { name: 'SQL', category: 'languages', color: '#e48e00', icon: TbSql },

  { name: 'React', category: 'frontend', color: '#61dafb', icon: SiReact },
  { name: 'Next.js', category: 'frontend', color: '#ffffff', icon: SiNextdotjs },
  { name: 'React Query', category: 'frontend', color: '#ff4154', icon: SiReactquery },
  { name: 'Zustand', category: 'frontend' },
  { name: 'Redux Toolkit', category: 'frontend', color: '#764abc', icon: SiRedux },
  { name: 'MUI', category: 'frontend', color: '#007fff', icon: SiMui },
  { name: 'SCSS', category: 'frontend', color: '#cc6699', icon: SiSass },
  { name: 'Tailwind CSS', category: 'frontend', color: '#38bdf8', icon: SiTailwindcss },
  { name: 'Bootstrap', category: 'frontend', color: '#7952b3', icon: SiBootstrap },

  { name: 'Node.js', category: 'backend', color: '#5fa04e', icon: SiNodedotjs },
  { name: 'NestJS', category: 'backend', color: '#e0234e', icon: SiNestjs },
  { name: 'Express', category: 'backend', color: '#ffffff', icon: SiExpress },
  { name: 'Spring Boot', category: 'backend', color: '#6db33f', icon: SiSpringboot },
  { name: 'REST API', category: 'backend' },

  { name: 'PostgreSQL', category: 'databases', color: '#4f8fc7', icon: SiPostgresql },
  { name: 'MongoDB', category: 'databases', color: '#47a248', icon: SiMongodb },

  { name: 'Git', category: 'tools', color: '#f05032', icon: SiGit },
  { name: 'Docker', category: 'tools', color: '#2496ed', icon: SiDocker },
  { name: 'Postman', category: 'tools', color: '#ff6c37', icon: SiPostman },
  { name: 'Swagger', category: 'tools', color: '#85ea2d', icon: SiSwagger },
  { name: 'Figma', category: 'tools', color: '#f24e1e', icon: SiFigma },
  { name: 'VS Code', category: 'tools', color: '#007acc', icon: VscVscode },
  { name: 'AI tools', category: 'tools', color: '#2bff88', icon: TbSparkles },
]

export const skillCategories: SkillCategory[] = [
  'languages',
  'frontend',
  'backend',
  'databases',
  'tools',
]
