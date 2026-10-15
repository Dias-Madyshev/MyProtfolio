import type { ComponentType } from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { profile } from '../../data/links'

type IconType = ComponentType

const items: { name: string; href: string; icon: IconType; external: boolean }[] = [
  { name: 'GitHub', href: profile.github, icon: FaGithub as IconType, external: true },
  { name: 'LinkedIn', href: profile.linkedin, icon: FaLinkedinIn as IconType, external: true },
  { name: 'Telegram', href: profile.telegram, icon: FaTelegramPlane as IconType, external: true },
  { name: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope as IconType, external: false },
]

/** Круглые иконки-ссылки на соцсети и почту. */
export const SocialLinks = () => (
  <ul className="flex items-center gap-3">
    {items.map(({ name, href, icon: Icon, external }) => (
      <li key={name}>
        <a
          href={href}
          aria-label={name}
          title={name}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          className="hairline flex h-11 w-11 items-center justify-center rounded-full border text-lg text-mute transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent">
          <Icon />
        </a>
      </li>
    ))}
  </ul>
)
