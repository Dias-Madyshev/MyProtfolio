interface SectionLabelProps {
  index: string
  children: string
}

/** Небольшой заголовок секции: «01 — Обо мне». */
export const SectionLabel = ({ index, children }: SectionLabelProps) => (
  <h2 className="section-label">
    <span className="text-accent">{index}</span>
    <span aria-hidden className="mx-2">
      —
    </span>
    {children}
  </h2>
)
