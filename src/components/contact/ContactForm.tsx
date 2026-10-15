import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { profile } from '../../data/links'
import { useLanguage } from '../../i18n/LanguageContext'

type FormState = {
  username: string
  phoneNumber: string
  email: string
  subject: string
  message: string
}

type Status = { type: 'idle' } | { type: 'sending' } | { type: 'error' | 'success'; text: string }

const EMPTY: FormState = { username: '', phoneNumber: '', email: '', subject: '', message: '' }
const EMAIL_RE = /^\w+([-.]?\w+)*@\w+([-]?\w+)*(\.\w{2,})+$/

export const ContactForm = () => {
  const { t } = useLanguage()
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<Status>({ type: 'idle' })

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (Object.values(form).some(value => !value.trim())) {
      setStatus({ type: 'error', text: t.contact.errors.required })
      return
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setStatus({ type: 'error', text: t.contact.errors.email })
      return
    }

    setStatus({ type: 'sending' })
    try {
      // Тот же backend и тот же формат запроса, что были в прежней версии сайта.
      const response = await fetch(profile.backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        setForm(EMPTY)
        setStatus({ type: 'success', text: t.contact.success })
      } else {
        setStatus({ type: 'error', text: t.contact.errors.server })
      }
    } catch {
      setStatus({ type: 'error', text: t.contact.errors.network })
    }
  }

  const fields = t.contact.fields
  const sending = status.type === 'sending'

  const renderInput = (name: Exclude<keyof FormState, 'message'>, type: string, autoComplete: string) => (
    <label className="block">
      <span className="text-sm text-mute">{fields[name]}</span>
      <input
        name={name}
        type={type}
        value={form[name]}
        onChange={onChange}
        autoComplete={autoComplete}
        className="field"
        required
      />
    </label>
  )

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
      {renderInput('username', 'text', 'name')}
      {renderInput('phoneNumber', 'tel', 'tel')}
      <div className="sm:col-span-2">{renderInput('email', 'email', 'email')}</div>
      <div className="sm:col-span-2">{renderInput('subject', 'text', 'off')}</div>
      <label className="block sm:col-span-2">
        <span className="text-sm text-mute">{fields.message}</span>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={3}
          className="field resize-none"
          required
        />
      </label>

      <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="rounded-sm bg-bone px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-accent disabled:opacity-50">
          {sending ? t.contact.sending : t.contact.send}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status.type === 'error' ? 'text-accent' : 'text-bone'}`}>
          {status.type === 'error' || status.type === 'success' ? status.text : ''}
        </p>
      </div>
    </form>
  )
}
