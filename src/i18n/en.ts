import type { Dictionary } from './types'

export const en: Dictionary = {
  meta: {
    title: 'Dias Madyshev — Fullstack Developer',
    description:
      'Dias Madyshev, fullstack developer: React, TypeScript, Node.js, NestJS, PostgreSQL.',
  },
  nav: {
    home: 'Home',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    resume: 'Resume',
    skip: 'Skip to content',
    language: 'Interface language',
  },
  hero: {
    name: 'Dias Madyshev',
    role: 'Fullstack Developer',
    roles: ['Fullstack Developer'],
    about:
      `I build web applications from scratch: I design the architecture, implement interfaces and business logic, and integrate frontend with backend. I work with React, TypeScript, Next.js, Node.js, NestJS, Java and Spring Boot. I use PostgreSQL and MongoDB, and write and optimize SQL queries. I'm interested in application architecture, microfrontends, design systems, performance and integrating AI into applications. I use AI tools to speed up development.`,
    ctaContact: 'Contact me',
    ctaResume: 'Download resume',
    photoAlt: 'Dias Madyshev',
  },
  experience: {
    label: 'Experience',
    jobs: {
      nfactorial: {
        bullets: [
          'Increased development speed by 30% by introducing a standardized UI architecture.',
          'Implemented JWT authentication, bcrypt password hashing and server-side validation.',
          'Cut server response time by 40% by optimizing SQL queries and adding indexes to PostgreSQL.',
          'Fixed critical frontend–backend integration bugs: set up the REST API and state management with Zustand.',
        ],
      },
      saunet: {
        bullets: [
          'Built responsive interfaces with dynamic components, raising user engagement by 20%.',
          'Automated parsing of JSON files from the server and the data processing.',
          'Found and fixed a bug that crashed the application when uploading large files.',
          'Set up React Query for caching, cutting server requests by 40%.',
        ],
      },
      aae: {
        bullets: [
          'Designed and built a corporate web portal from scratch, including the choice of technologies and frontend architecture.',
          'Implemented a microfrontend architecture with React and Module Federation: independent modules and a host application.',
          'Built a shared UI module and a design system on MUI with Light/Dark theme support.',
          'Wrote a NestJS backend to test the frontend before the main backend was ready.',
        ],
      },
    },
  },
  skills: {
    label: 'Technologies',
    categories: {
      languages: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      tools: 'Tools',
    },
  },
  contact: {
    label: 'Contact',
    title: "Get in touch — let's discuss your project.",
    fields: {
      username: 'Name',
      phoneNumber: 'Phone',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
    },
    send: 'Send',
    sending: 'Sending…',
    errors: {
      required: 'Please fill in all fields.',
      email: 'Enter a valid email.',
      server: 'Could not send the message.',
      network: 'Connection error.',
    },
    success: 'Message sent. Thank you!',
  },
  footer: { top: 'Back to top' },
}
