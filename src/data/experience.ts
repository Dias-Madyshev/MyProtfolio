import type { JobId } from '../i18n/types'

export interface JobMeta {
  id: JobId
  company: string
  role: string
  tags: string[]
  /** Период работы. В резюме дат нет, поэтому поле пока пустое. */
  period?: string
}

// Порядок как в резюме. Названия компаний и должностей не переводятся.
export const jobs: JobMeta[] = [
  {
    id: 'nfactorial',
    company: 'nFactorial Incubator',
    role: 'Fullstack Developer',
    tags: ['PostgreSQL', 'REST API', 'JWT', 'bcrypt', 'Zustand'],
  },
  {
    id: 'saunet',
    company: 'Saunet medical startup',
    role: 'Frontend Developer',
    tags: ['React', 'React Query'],
  },
  {
    id: 'aae',
    company: 'AAEngineering Group',
    role: 'Frontend Developer',
    tags: ['React', 'Module Federation', 'MUI', 'NestJS'],
  },
]
