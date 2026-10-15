import type { CSSProperties } from 'react'

/** Типобезопасная передача CSS-переменных в style: style={cssVars({ '--delay': '200ms' })} */
export const cssVars = (vars: Record<`--${string}`, string | number>): CSSProperties =>
  vars as CSSProperties
