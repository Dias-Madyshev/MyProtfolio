export type Lang = 'ru' | 'en'

export type SectionId = 'home' | 'experience' | 'skills' | 'contact'

export type SkillCategory =
  | 'languages'
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'tools'

export type JobId = 'nfactorial' | 'saunet' | 'aae'

export interface Fact {
  value: string
  label: string
}

export interface Dictionary {
  meta: { title: string; description: string }
  nav: Record<SectionId, string> & {
    menu: string
    close: string
    resume: string
    skip: string
    language: string
  }
  hero: {
    name: string
    role: string
    roles: string[]
    about: string
    ctaContact: string
    ctaResume: string
    photoAlt: string
  }
  experience: {
    label: string
    jobs: Record<JobId, { bullets: string[] }>
  }
  skills: {
    label: string
    categories: Record<SkillCategory, string>
  }
  contact: {
    label: string
    title: string
    fields: {
      username: string
      phoneNumber: string
      email: string
      subject: string
      message: string
    }
    send: string
    sending: string
    errors: {
      required: string
      email: string
      server: string
      network: string
    }
    success: string
  }
  footer: { top: string }
}
