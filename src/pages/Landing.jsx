import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const BIZUM_CODE = '14489'

function BizumModal({ onClose }) {
  const [copied, setCopied] = useState(false)

  function copyCode() {
    navigator.clipboard.writeText(BIZUM_CODE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const steps = [
    { title: 'Abre la app de tu banco y ve a Bizum', desc: 'Entra en la sección Bizum desde la app de tu banco.' },
    { title: 'Busca "Donar a ONG" o "Hacer donación"', desc: 'Si no lo encuentras, pulsa primero en "Más opciones".' },
    { title: `Introduce el código ${BIZUM_CODE}`, desc: 'Escribe el código y continúa el proceso normalmente.' },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-3xl sm:rounded-3xl shadow-xl w-full sm:max-w-md p-7 relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-1">Dona por Bizum</h2>
        <p className="text-gray-500 text-sm mb-6">Solo disponible en España</p>

        <div className="bg-brand-50 border border-brand-100 rounded-2xl p-4 mb-2">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">Código Bizum ONG</p>
              <p className="font-mono text-3xl font-bold text-brand-700 tracking-widest">{BIZUM_CODE}</p>
            </div>
            <button
              onClick={copyCode}
              className={`flex-shrink-0 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl border text-xs sm:text-sm font-semibold text-center leading-tight transition-all ${copied ? 'border-green-300 bg-green-50 text-green-600' : 'border-brand-200 bg-white text-brand-600 hover:bg-brand-100'}`}
            >
              {copied
                ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
              }
              <span className="max-w-[3.5rem] sm:max-w-none">{copied ? '¡Copiado!' : 'Copiar código'}</span>
            </button>
          </div>
          <ol className="space-y-2 mb-3">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-200 text-brand-700 text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-snug">{step.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-gray-400 italic">El nombre del botón puede variar según tu banco.</p>
        </div>

        <Link
          to="/donar"
          className="block w-full text-center text-sm text-brand-600 hover:underline mt-4"
        >
          ¿Prefieres tarjeta o transferencia? Ver todas las formas de donar
        </Link>
      </div>
    </div>
  )
}

function DonaButton({ onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-200 text-lg ${className}`}
    >
      Dona ❤️
    </button>
  )
}

export default function Landing() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Claudia te necesita — El Reto de Claudia</title>
        <meta name="description" content="Claudia tiene 2 años y medio y padece una enfermedad neurodegenerativa. Necesitamos entre 2,5 y 3 millones de euros para financiar la terapia génica que puede salvarle la vida. Tu donación puede cambiarlo todo." />
        <meta name="robots" content="noindex" />
        <meta property="og:url" content="https://elretodeclaudia.org/landing" />
        <meta property="og:title" content="Claudia te necesita — El Reto de Claudia" />
        <meta property="og:description" content="Claudia tiene 2 años y medio y padece una enfermedad neurodegenerativa. Necesitamos entre 2,5 y 3 millones de euros para financiar la terapia génica que puede salvarle la vida." />
        <meta property="og:image" content="https://elretodeclaudia.org/og-default.png" />
        <meta name="twitter:title" content="Claudia te necesita — El Reto de Claudia" />
        <meta name="twitter:description" content="Claudia tiene 2 años y medio y padece una enfermedad neurodegenerativa. Necesitamos entre 2,5 y 3 millones de euros para financiar la terapia génica que puede salvarle la vida." />
        <meta name="twitter:image" content="https://elretodeclaudia.org/og-default.png" />
      </Helmet>

      {/* Marca mínima, sin menú */}
      <header className="pt-6 pb-2 px-6 flex items-center justify-center">
        <img src="/images/logo_elretodeclaudia.png" alt="El Reto de Claudia" className="h-9 w-auto" />
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pt-8 pb-10 max-w-lg mx-auto text-center">
          <div className="flex justify-center mb-7">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
              <img
                src="/images/claudia.jpeg"
                alt="Claudia"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-950 leading-tight mb-5">
            Claudia te necesita.
          </h1>

          <p className="text-brand-950/80 text-lg leading-relaxed mb-4">
            Claudia tiene 2 años y medio. Padece una enfermedad neurodegenerativa. Tiene muchas ganas de vivir, pero el tiempo juega en su contra.
          </p>
          <p className="text-brand-950/70 text-base leading-relaxed mb-6">
            Hemos iniciado un proyecto pionero de investigación de terapia génica que puede ayudar a Claudia y a otros niños con su enfermedad, pero necesitamos <strong className="text-brand-950">2,5 a 3 millones de euros</strong>.
          </p>

          <div className="bg-warm-50 border border-warm-200 rounded-2xl px-5 py-4 mb-8">
            <p className="text-warm-900 font-semibold leading-relaxed">
              Claudia necesita tu ayuda, salva una vida. 3€ para ti no es nada, pero para Claudia significa la oportunidad de vivir.
            </p>
          </div>

          <DonaButton onClick={() => setShowModal(true)} className="w-full sm:w-auto" />

          <p className="text-brand-950/60 text-sm leading-relaxed mt-6">
            Hoy estás ayudando a Claudia, pero en el futuro estarás ayudando a muchos otros niños con su enfermedad. Porque es una lotería que Claudia no ha elegido.
          </p>
          <p className="text-sm text-brand-950/70 font-medium mt-3">
            100% de tu donación va a la investigación · Asociación sin ánimo de lucro
          </p>
        </section>

        {/* Qué es la DBP */}
        <section className="bg-brand-50 py-14 px-6">
          <div className="max-w-lg mx-auto">
            <h2 className="font-serif text-2xl font-bold text-gray-900 text-center mb-8">
              ¿Por qué es tan urgente?
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-100 flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🧬</span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-gray-900">Sin tratamiento curativo.</strong> Ninguna terapia disponible hoy detiene o cura la enfermedad. Solo existen cuidados de soporte.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-100 flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">⏳</span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-gray-900">Neurodegeneración progresiva.</strong> Cada mes sin investigación es un mes de daño acumulado que ya no se puede revertir.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-brand-100 flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">🔬</span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-gray-900">Casi nadie investiga esta enfermedad.</strong> Afecta a tan pocos niños en el mundo que apenas existe financiación dedicada a buscar una cura.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* El objetivo */}
        <section className="py-14 px-6">
          <div className="max-w-lg mx-auto text-center">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
              El objetivo
            </span>
            <div className="inline-block bg-brand-950 text-white rounded-3xl px-8 py-8 mt-4 mb-6 w-full">
              <p className="font-serif text-4xl sm:text-5xl font-bold text-warm-300 mb-2">2,5–3 millones €</p>
              <p className="text-brand-200 text-base leading-relaxed">
                Es lo que necesitamos reunir para financiar el desarrollo de una terapia génica específica para la DBP.
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Con esos fondos podemos conectar con los laboratorios e investigadores que pueden desarrollarla, y dar a Claudia —y a otros niños como ella— una oportunidad real de tratamiento.
            </p>
            <DonaButton onClick={() => setShowModal(true)} />
          </div>
        </section>
      </main>

      {/* Footer mínimo, sin menú de navegación */}
      <footer className="border-t border-gray-100 py-8 px-6 text-center">
        <p className="text-xs text-gray-400 mb-2">
          © {new Date().getFullYear()} El Reto de Claudia · Asociación sin ánimo de lucro
        </p>
        <div className="flex items-center justify-center gap-4 text-xs">
          <Link to="/" className="text-brand-600 hover:underline">Conoce toda la historia de Claudia</Link>
          <span className="text-gray-300">·</span>
          <Link to="/privacidad" className="text-gray-400 hover:underline">Privacidad</Link>
        </div>
      </footer>

      {/* CTA fijo en móvil */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-2 bg-gradient-to-t from-white/95 to-transparent backdrop-blur-sm">
        <button
          onClick={() => setShowModal(true)}
          className="block w-full text-center bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-base px-4 py-3.5 rounded-2xl shadow-lg transition-colors"
        >
          Dona ❤️
        </button>
      </div>

      {showModal && <BizumModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
