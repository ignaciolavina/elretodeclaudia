import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

const EMPTY = { nombre: '', email: '', motivo: '', mensaje: '' }

export default function Contacto() {
  const [form,       setForm]       = useState(EMPTY)
  const [errors,     setErrors]     = useState({})
  const [submitted,  setSubmitted]  = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [sendError,  setSendError]  = useState(false)

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: formRef,  isVisible: formVisible  } = useScrollAnimation()
  const { t } = useLanguage()
  const d = t.contacto
  const f = d.form

  const validate = () => {
    const e = {}
    if (!form.nombre.trim())  e.nombre  = f.errors.nombre
    if (!form.email.trim())   e.email   = f.errors.email
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = f.errors.emailInvalid
    if (!form.motivo)         e.motivo  = f.errors.motivo
    if (!form.mensaje.trim()) e.mensaje = f.errors.mensaje
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }))
    if (sendError) setSendError(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fieldErrors = validate()
    if (Object.keys(fieldErrors).length > 0) { setErrors(fieldErrors); return }

    setSubmitting(true)
    setSendError(false)

    const motivoLabel = f.motivos.find((m) => m.value === form.motivo)?.label ?? form.motivo

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.notificationTemplateId,
        { to_email: 'claudialavinabermejo@gmail.com', nombre: form.nombre, email: form.email, motivo_label: motivoLabel, mensaje: form.mensaje },
        EMAILJS_CONFIG.publicKey
      )
      emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.confirmationTemplateId,
        { to_email: form.email, nombre: form.nombre },
        EMAILJS_CONFIG.publicKey
      ).catch(() => {})
      setForm(EMPTY)
      setSubmitted(true)
    } catch (err) {
      console.error('Error al enviar el formulario:', err)
      setSendError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-400 transition-colors ${
      errors[field] ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 hover:border-brand-300'
    }`

  return (
    <section id="contacto" className="py-24 bg-brand-50" aria-labelledby="contacto-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Título solo visible en mobile, encima del form */}
          <div className="order-first lg:hidden mb-2">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
              {d.sectionLabel}
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-2">
              {d.title}
            </h2>
          </div>

          {/* Columna izquierda: info (en mobile va debajo del form) */}
          <div
            ref={titleRef}
            className={`order-last lg:order-first transition-all duration-700 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="hidden lg:inline text-brand-600 text-sm font-semibold uppercase tracking-widest">
              {d.sectionLabel}
            </span>
            <h2 id="contacto-title" className="hidden lg:block font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              {d.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{d.subtitle}</p>

            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-brand-100 mb-4">
              <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">{d.emailLabel}</p>
                <a href="mailto:info@elretodeclaudia.org" className="text-brand-700 font-semibold hover:text-brand-900 transition-colors">
                  info@elretodeclaudia.org
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-brand-100 mb-8">
              <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">{d.phoneLabel}</p>
                <a href="tel:+34677804196" className="text-brand-700 font-semibold hover:text-brand-900 transition-colors">
                  677 804 196
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-100 shadow-sm">
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong className="text-gray-800">{d.researcherNote.split(',')[0]},</strong>{' '}
                {d.researcherNote.split(',').slice(1).join(',')}
              </p>
            </div>
          </div>

          {/* Columna derecha: formulario (en mobile va primero) */}
          <div
            ref={formRef}
            className={`order-first lg:order-last transition-all duration-700 delay-200 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {submitted ? (
              <div className="bg-white rounded-3xl p-10 shadow-sm border border-brand-100 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">{f.successTitle}</h3>
                <p className="text-gray-600 mb-6">{f.successText}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-600 font-semibold hover:text-brand-800 underline underline-offset-4 transition-colors"
                >
                  {f.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl p-8 shadow-sm border border-brand-100" aria-label="Formulario de contacto">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {f.nombre} <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange}
                      placeholder={f.nombrePlaceholder} autoComplete="name" aria-required="true"
                      className={inputClass('nombre')} />
                    {errors.nombre && <p className="mt-1 text-sm text-red-500" role="alert">{errors.nombre}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {f.email} <span className="text-red-500">*</span>
                    </label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
                      placeholder={f.emailPlaceholder} autoComplete="email" aria-required="true"
                      className={inputClass('email')} />
                    {errors.email && <p className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {f.motivo} <span className="text-red-500">*</span>
                    </label>
                    <select id="motivo" name="motivo" value={form.motivo} onChange={handleChange}
                      aria-required="true"
                      className={`${inputClass('motivo')} ${!form.motivo ? 'text-gray-400' : 'text-gray-800'}`}>
                      {f.motivos.map((m) => (
                        <option key={m.value} value={m.value} disabled={m.value === ''}>{m.label}</option>
                      ))}
                    </select>
                    {errors.motivo && <p className="mt-1 text-sm text-red-500" role="alert">{errors.motivo}</p>}
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1.5">
                      {f.mensaje} <span className="text-red-500">*</span>
                    </label>
                    <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange}
                      rows={5} placeholder={f.mensajePlaceholder} aria-required="true"
                      className={`${inputClass('mensaje')} resize-none`} />
                    {errors.mensaje && <p className="mt-1 text-sm text-red-500" role="alert">{errors.mensaje}</p>}
                  </div>

                  {sendError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3" role="alert">
                      <p className="text-red-700 text-sm">
                        {f.errorText}{' '}
                        <a href="mailto:info@elretodeclaudia.org" className="font-semibold underline">
                          info@elretodeclaudia.org
                        </a>.
                      </p>
                    </div>
                  )}

                  <button type="submit" disabled={submitting}
                    className="w-full bg-brand-700 hover:bg-brand-800 disabled:bg-brand-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 disabled:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {f.sending}
                      </>
                    ) : (
                      <>
                        {f.submit}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
