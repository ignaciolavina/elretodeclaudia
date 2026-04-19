import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const MOTIVOS = [
  { value: '',              label: 'Selecciona el motivo de contacto' },
  { value: 'investigador',  label: 'Soy investigador o científico' },
  { value: 'familia',       label: 'Soy familia o cuidador afectado' },
  { value: 'medico',        label: 'Soy profesional médico o sanitario' },
  { value: 'prensa',        label: 'Prensa o medios de comunicación' },
  { value: 'otro',          label: 'Otro motivo' },
]

const EMPTY = { nombre: '', email: '', motivo: '', mensaje: '' }

export default function Contacto() {
  const [form,       setForm]       = useState(EMPTY)
  const [errors,     setErrors]     = useState({})
  const [submitted,  setSubmitted]  = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [sendError,  setSendError]  = useState(false)

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: formRef,  isVisible: formVisible  } = useScrollAnimation()

  const validate = () => {
    const e = {}
    if (!form.nombre.trim())  e.nombre  = 'Por favor, escribe tu nombre.'
    if (!form.email.trim())   e.email   = 'Por favor, escribe tu email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'El formato del email no es válido.'
    if (!form.motivo)         e.motivo  = 'Por favor, selecciona un motivo.'
    if (!form.mensaje.trim()) e.mensaje = 'Por favor, escribe tu mensaje.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }))
    if (sendError) setSendError(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const fieldErrors = validate()
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setSubmitting(true)
    setSendError(false)

    const motivoLabel = MOTIVOS.find((m) => m.value === form.motivo)?.label ?? form.motivo

    try {
      // Email de notificación → llega a claudialavinabermejo@gmail.com
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.notificationTemplateId,
        {
          nombre:       form.nombre,
          email:        form.email,
          motivo_label: motivoLabel,
          mensaje:      form.mensaje,
        },
        EMAILJS_CONFIG.publicKey
      )

      // Email de confirmación → llega al remitente
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.confirmationTemplateId,
        {
          nombre: form.nombre,
          email:  form.email,
        },
        EMAILJS_CONFIG.publicKey
      )

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
    <section
      id="contacto"
      className="py-24 bg-brand-50"
      aria-labelledby="contacto-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Columna izquierda: info */}
          <div
            ref={titleRef}
            className={`transition-all duration-700 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
              Hablemos
            </span>
            <h2 id="contacto-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              Escríbenos
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              ¿Tienes alguna pregunta, quieres colaborar o simplemente quieres
              hacernos saber que estás ahí? Escríbenos. Cada mensaje que recibimos
              nos recuerda que no estamos solos en este camino.
            </p>

            {/* Email directo */}
            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-brand-100 mb-8">
              <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Email de contacto</p>
                <a
                  href="mailto:info@elretodeclaudia.org"
                  className="text-brand-700 font-semibold hover:text-brand-900 transition-colors"
                >
                  info@elretodeclaudia.org
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-brand-100 shadow-sm">
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong className="text-gray-800">Si eres investigador o médico,</strong>{' '}
                cuéntanos en qué área trabajas y cómo crees que podrías colaborar.
                Respondemos a todos los mensajes con la mayor brevedad posible.
              </p>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div
            ref={formRef}
            className={`transition-all duration-700 delay-200 ${
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
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-600 mb-6">
                  Gracias por escribirnos. En breve recibirás un email de
                  confirmación. Intentaremos responderte lo antes posible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-600 font-semibold hover:text-brand-800 underline underline-offset-4 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-3xl p-8 shadow-sm border border-brand-100"
                aria-label="Formulario de contacto"
              >
                <div className="space-y-5">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nombre <span className="text-red-500" aria-label="campo obligatorio">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                      className={inputClass('nombre')}
                    />
                    {errors.nombre && (
                      <p id="nombre-error" className="mt-1 text-sm text-red-500" role="alert">{errors.nombre}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email <span className="text-red-500" aria-label="campo obligatorio">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>
                    )}
                  </div>

                  {/* Motivo */}
                  <div>
                    <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Motivo del contacto <span className="text-red-500" aria-label="campo obligatorio">*</span>
                    </label>
                    <select
                      id="motivo"
                      name="motivo"
                      value={form.motivo}
                      onChange={handleChange}
                      aria-required="true"
                      aria-describedby={errors.motivo ? 'motivo-error' : undefined}
                      className={`${inputClass('motivo')} ${!form.motivo ? 'text-gray-400' : 'text-gray-800'}`}
                    >
                      {MOTIVOS.map((m) => (
                        <option key={m.value} value={m.value} disabled={m.value === ''}>
                          {m.label}
                        </option>
                      ))}
                    </select>
                    {errors.motivo && (
                      <p id="motivo-error" className="mt-1 text-sm text-red-500" role="alert">{errors.motivo}</p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Mensaje <span className="text-red-500" aria-label="campo obligatorio">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Cuéntanos cómo quieres colaborar o qué necesitas..."
                      aria-required="true"
                      aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
                      className={`${inputClass('mensaje')} resize-none`}
                    />
                    {errors.mensaje && (
                      <p id="mensaje-error" className="mt-1 text-sm text-red-500" role="alert">{errors.mensaje}</p>
                    )}
                  </div>

                  {/* Error de envío */}
                  {sendError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3" role="alert">
                      <p className="text-red-700 text-sm">
                        Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo
                        o escríbenos directamente a{' '}
                        <a href="mailto:info@elretodeclaudia.org" className="font-semibold underline">
                          info@elretodeclaudia.org
                        </a>.
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-brand-700 hover:bg-brand-800 disabled:bg-brand-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 disabled:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
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
