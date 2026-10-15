import { LangSwitch } from './LangSwitch'

export const Footer = () => (
  <footer className="container-x pb-10 pt-24">
    <div className="hairline flex flex-col gap-5 border-t pt-6 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 Dias Madyshev</p>
      <LangSwitch />
    </div>
  </footer>
)
