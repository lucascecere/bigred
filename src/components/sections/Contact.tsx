'use client'

import { useState } from 'react'
import { siteContent } from '@content/site-content'
import { LeadFormSchema } from '@/types/lead'
import { PhoneCTA } from '@/components/ui/PhoneCTA'

type FieldErrors = Record<string, string>

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const { contact, phone } = siteContent

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setFieldErrors({})

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      movingFrom: formData.get('movingFrom') as string,
      movingTo: formData.get('movingTo') as string,
      moveDate: formData.get('moveDate') as string || undefined,
      notes: formData.get('notes') as string || undefined,
    }

    const validation = LeadFormSchema.safeParse(data)
    if (!validation.success) {
      const errors: FieldErrors = {}
      for (const issue of validation.error.issues) {
        const field = issue.path[0] as string
        if (field) errors[field] = issue.message
      }
      setFieldErrors(errors)
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data),
      })
      const json = await res.json()
      if (json.success) {
        setSuccess(true)
      } else {
        setError(json.error ?? 'Something went wrong. Please call us directly.')
      }
    } catch {
      setError('Network error. Please call us directly.')
    }

    setLoading(false)
  }

  const inputClass =
    'w-full text-base p-3 border-2 border-[var(--brand-black)] rounded-[4px] shadow-[3px_3px_0_var(--brand-black)] bg-white text-[var(--brand-black)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-red)] focus-visible:ring-offset-1 focus:border-[var(--brand-red)]'

  const labelClass = 'block text-[var(--brand-cream)] text-sm font-bold uppercase tracking-wide mb-1.5'

  return (
    <section
      id="contact"
      className="bg-[var(--brand-charcoal)] py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="text-[var(--brand-gold)] text-sm font-bold uppercase tracking-[0.2em] mb-2">
            Free Estimate
          </p>
          <h2
            id="contact-heading"
            className="font-display text-4xl md:text-5xl uppercase text-white leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {contact.heading}
          </h2>
          <p className="mt-3 text-[var(--brand-cream)] opacity-80">
            {contact.subhead}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: form */}
          <div>
            {success ? (
              <div role="status" aria-live="polite" className="text-center py-12 px-6 bg-[var(--brand-black)] border-2 border-[var(--brand-red)] rounded-[4px]">
                <h3
                  className="font-display text-3xl text-white uppercase mb-4"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  WE&apos;LL BE IN TOUCH.
                </h3>
                <p className="text-[var(--brand-cream)] leading-relaxed">
                  Thanks for reaching out. We&apos;ll get back to you within a few hours. In the meantime, feel free to call.
                </p>
                <div className="mt-6">
                  <PhoneCTA variant="contact" href={phone.href}>
                    Call {phone.display}
                  </PhoneCTA>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    {contact.formLabels.name} <span className="text-[var(--brand-red-bright)]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    aria-required="true"
                    className={inputClass}
                    placeholder="Your full name"
                  />
                  {fieldErrors.name && (
                    <span role="alert" className="text-[var(--brand-red-bright)] text-sm mt-1 block">
                      {fieldErrors.name}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="contact-phone" className={labelClass}>
                    {contact.formLabels.phone} <span className="text-[var(--brand-red-bright)]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    aria-required="true"
                    className={inputClass}
                    placeholder="(781) 555-0000"
                  />
                  {fieldErrors.phone && (
                    <span role="alert" className="text-[var(--brand-red-bright)] text-sm mt-1 block">
                      {fieldErrors.phone}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    {contact.formLabels.email} <span className="text-[var(--brand-red-bright)]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    aria-required="true"
                    className={inputClass}
                    placeholder="you@email.com"
                  />
                  {fieldErrors.email && (
                    <span role="alert" className="text-[var(--brand-red-bright)] text-sm mt-1 block">
                      {fieldErrors.email}
                    </span>
                  )}
                </div>

                {/* Moving From / To */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-movingFrom" className={labelClass}>
                      {contact.formLabels.movingFrom} <span className="text-[var(--brand-red-bright)]">*</span>
                    </label>
                    <input
                      id="contact-movingFrom"
                      name="movingFrom"
                      type="text"
                      aria-required="true"
                      className={inputClass}
                      placeholder="Hingham, 02043"
                    />
                    {fieldErrors.movingFrom && (
                      <span role="alert" className="text-[var(--brand-red-bright)] text-sm mt-1 block">
                        {fieldErrors.movingFrom}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-movingTo" className={labelClass}>
                      {contact.formLabels.movingTo} <span className="text-[var(--brand-red-bright)]">*</span>
                    </label>
                    <input
                      id="contact-movingTo"
                      name="movingTo"
                      type="text"
                      aria-required="true"
                      className={inputClass}
                      placeholder="Scituate, 02066"
                    />
                    {fieldErrors.movingTo && (
                      <span role="alert" className="text-[var(--brand-red-bright)] text-sm mt-1 block">
                        {fieldErrors.movingTo}
                      </span>
                    )}
                  </div>
                </div>

                {/* Move Date */}
                <div>
                  <label htmlFor="contact-moveDate" className={labelClass}>
                    {contact.formLabels.moveDate}
                  </label>
                  <input
                    id="contact-moveDate"
                    name="moveDate"
                    type="date"
                    className={inputClass}
                  />
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="contact-notes" className={labelClass}>
                    {contact.formLabels.notes}
                  </label>
                  <textarea
                    id="contact-notes"
                    name="notes"
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Apartment on 3rd floor, lots of furniture, etc."
                  />
                </div>

                {/* Global error */}
                {error && (
                  <div role="alert" className="p-3 bg-[var(--brand-red)]/20 border border-[var(--brand-red-bright)] rounded-[4px] text-[var(--brand-red-bright)] text-sm">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[var(--brand-red)] text-white font-bold text-lg uppercase tracking-wider border-2 border-[var(--brand-black)] shadow-[4px_4px_0_var(--brand-black)] hover:bg-[var(--brand-red-deep)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-[4px]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {loading ? 'Sending...' : contact.formLabels.submit}
                </button>
              </form>
            )}
          </div>

          {/* Right: contact card */}
          <div className="bg-white border border-[var(--brand-black)] shadow-[6px_6px_0_var(--brand-black)] rounded-[4px] p-6 md:p-8" style={{ borderLeft: '4px solid var(--brand-red)' }}>
            <h3
              className="font-display text-2xl uppercase text-[var(--brand-black)] mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {contact.rightCard.heading}
            </h3>
            <p className="text-[var(--brand-steel)] mb-6">
              {contact.rightCard.subhead}
            </p>

            <a
              href={phone.href}
              className="block text-3xl md:text-4xl font-bold text-[var(--brand-red)] hover:text-[var(--brand-red-deep)] transition-colors mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {phone.display}
            </a>

            <div className="space-y-2 text-[var(--brand-steel)] text-sm">
              <p className="font-semibold uppercase tracking-wide text-[var(--brand-black)]">Hours</p>
              <p>{contact.rightCard.hours}</p>
            </div>

            <p className="mt-6 text-[var(--brand-red)] font-bold uppercase tracking-wide text-sm">
              {contact.rightCard.promise}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
