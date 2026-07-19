import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import prensaData from '../data/prensa.json'

const INSTAGRAM_URL = 'https://www.instagram.com/elretodeclaudia'
const MEDIA_LOGOS = prensaData.media.filter((m) => m.logoImage).slice(0, 6)

const BIZUM_CODE = '14489'

function BizumModal({ onClose }) {
  const [copied, setCopied] = useState(false)
  const [showSecurity, setShowSecurity] = useState(false)

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
          className="block w-full text-center text-sm font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-xl px-4 py-3 mt-4 hover:bg-brand-100 transition-colors"
        >
          ¿Prefieres tarjeta o transferencia? Ver todas las formas de donar
        </Link>

        <button
          onClick={() => setShowSecurity(v => !v)}
          className="w-full flex items-center justify-between gap-2 text-sm font-semibold text-gray-700 mt-5 pt-4 border-t border-gray-100"
        >
          ¿Es seguro?
          <svg
            className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${showSecurity ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showSecurity && (
          <div className="mt-3 space-y-3 text-xs text-gray-600 leading-relaxed">
            <p>
              Las donaciones son gestionadas por <strong className="text-gray-900">AITEP</strong>, Asociación para la Investigación y Tratamiento de Enfermedades Peroxisomales, una entidad sin ánimo de lucro creada para impulsar la investigación y buscar oportunidades para Claudia y otros niños con enfermedades peroxisomales. Iremos informando de los avances del proyecto.
            </p>
            <p>CIF: G88669163</p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:677804196" className="font-semibold text-brand-600 hover:underline">677 804 196</a>
              <a href="mailto:info@elretodeclaudia.org" className="font-semibold text-brand-600 hover:underline">info@elretodeclaudia.org</a>
            </div>
            <Link to="/" className="inline-block font-semibold text-brand-600 hover:underline">
              Conoce más sobre Claudia aquí
            </Link>
          </div>
        )}
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

const URGENCY_CARDS = [
  {
    icon: '🧬',
    title: 'Sin tratamiento curativo',
    text: 'Actualmente no existe ninguna terapia capaz de detener o curar la enfermedad de Claudia. Solo existen cuidados y tratamientos de soporte.',
  },
  {
    icon: '⏳',
    title: 'Enfermedad neurodegenerativa',
    text: 'La enfermedad es progresiva. Por eso es importante impulsar la investigación y avanzar en el proyecto cuanto antes.',
  },
  {
    icon: '🔬',
    title: 'Una enfermedad ultrarrara',
    text: 'Al afectar a muy pocos niños, existen muy pocos recursos y líneas de investigación dedicados específicamente a buscar un tratamiento.',
  },
]

const PROJECT_DESCRIPTION = 'Se trata de un proyecto innovador de terapia génica que involucra a empresas y expertos de varios países, y a investigadores reconocidos como el Dr. Guangping Gao, Coral Barbas, M. Carmen Conde y Carmen Fernández Martos.'

const FUND_USES = [
  'Estudios en líneas celulares.',
  'Estudios en modelos animales.',
  'Evaluación de eficacia y seguridad.',
  'Desarrollo de la estrategia terapéutica.',
  'Trabajo de empresas y expertos especializados.',
  'Coordinación científica y desarrollo preclínico.',
]

function SectionLabel({ children }) {
  return (
    <span className="block text-center text-brand-600 text-sm font-semibold uppercase tracking-widest mb-3">
      {children}
    </span>
  )
}

export default function Landing() {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Claudia te necesita — El Reto de Claudia</title>
        <meta name="description" content="Claudia tiene 3 años y padece una enfermedad neurodegenerativa que no tiene cura. Necesitamos 3 millones de euros para su proyecto de terapia génica. Ayuda a Claudia, salva una vida." />
        <meta name="robots" content="noindex" />
        <meta property="og:url" content="https://elretodeclaudia.org/landing" />
        <meta property="og:title" content="Claudia te necesita — El Reto de Claudia" />
        <meta property="og:description" content="Claudia tiene 3 años y padece una enfermedad neurodegenerativa que no tiene cura. Necesitamos 3 millones de euros para su proyecto de terapia génica." />
        <meta property="og:image" content="https://elretodeclaudia.org/og-default.png" />
        <meta name="twitter:title" content="Claudia te necesita — El Reto de Claudia" />
        <meta name="twitter:description" content="Claudia tiene 3 años y padece una enfermedad neurodegenerativa que no tiene cura. Necesitamos 3 millones de euros para su proyecto de terapia génica." />
        <meta name="twitter:image" content="https://elretodeclaudia.org/og-default.png" />
      </Helmet>

      {/* Marca mínima, sin menú */}
      <header className="pt-3 pb-0.5 px-6 flex items-center justify-center">
        <img src="/images/logo_elretodeclaudia.png" alt="El Reto de Claudia" className="h-11 w-auto" />
      </header>

      <main className="flex-1">
        {/* ── 1. Hero ── */}
        <section className="px-5 pt-4 pb-9 max-w-lg mx-auto text-center">
          <img
            src="/images/claudia.jpeg"
            alt="Claudia"
            className="w-full h-56 sm:h-64 object-cover object-top rounded-3xl shadow-xl mb-6"
          />

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-950 leading-tight mb-4">
            Claudia te necesita.
          </h1>

          <p className="text-brand-950/80 text-base leading-relaxed mb-3">
            Claudia tiene 3 años. Padece una enfermedad neurodegenerativa que no tiene cura. Tiene muchas ganas de vivir, pero el tiempo juega en su contra.
          </p>
          <p className="text-brand-950/80 text-base leading-relaxed mb-3">
            Su familia ha impulsado un proyecto de investigación en terapia génica, un tratamiento innovador que podría curarla a ella y a otros niños con enfermedades similares, pero para pagar el tratamiento su familia necesita <strong className="text-brand-950">3 millones de euros</strong>.
          </p>
          <p className="text-brand-700 font-semibold text-base leading-relaxed mb-7">
            Tú puedes ayudar desde tan solo 3€.
          </p>

          <div className="hidden sm:inline-block">
            <DonaButton onClick={openModal} />
          </div>

          <p className="text-sm text-brand-950/60 font-medium mt-4">
            Donación segura · AITEP, asociación sin ánimo de lucro
          </p>
        </section>

        {/* ── 2. Urgencia ── */}
        <section className="bg-brand-50 py-14 px-5">
          <div className="max-w-lg mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 leading-snug">
              ¿Por qué el tiempo es tan importante?
            </h2>
            <div className="space-y-4">
              {URGENCY_CARDS.map((card, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-brand-100 flex gap-4 items-start">
                  <span className="text-2xl flex-shrink-0 leading-none">{card.icon}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong className="text-gray-900">{card.title}.</strong> {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Conoce la historia de Claudia ── */}
        <section className="py-14 px-5">
          <div className="max-w-lg mx-auto">
            <SectionLabel>En los medios</SectionLabel>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-5 leading-snug">
              Conoce la historia de Claudia
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
              La historia de Claudia ha salido en medios como prensa, radio y televisión.
            </p>

            <div className="relative bg-gray-200 border border-gray-200 rounded-3xl aspect-video overflow-hidden mb-6 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <span className="w-14 h-14 rounded-full bg-white/90 shadow-md flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </span>
                <span className="text-xs text-gray-500 font-medium">Vídeo próximamente · Nuestra visita a la televisión</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 opacity-80">
              {MEDIA_LOGOS.map((m) => (
                <img key={m.outlet} src={m.logoImage} alt={m.outlet} className="h-6 sm:h-7 object-contain" loading="lazy" />
              ))}
            </div>

            <div className="bg-white border border-brand-100 rounded-3xl p-7 text-center shadow-sm">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Enamórate de Claudia</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Si quieres enamorarte de Claudia, puedes seguirla en redes sociales.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6 6 0 100 12 6 6 0 000-12zm0 9.837a3.837 3.837 0 110-7.674 3.837 3.837 0 010 7.674zm6.406-10.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                Seguir en Instagram
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. Conoce el proyecto ── */}
        <section className="bg-brand-50 py-14 px-5">
          <div className="max-w-lg mx-auto">
            <SectionLabel>El proyecto</SectionLabel>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-5 leading-snug">
              Conoce el proyecto
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
              El proyecto de terapia génica para Claudia se encuentra actualmente en fase preclínica. Antes de poder avanzar hacia una posible aplicación en pacientes, es necesario estudiar y validar la estrategia terapéutica en diferentes modelos.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 mb-6">
              <p className="text-gray-700 text-sm leading-relaxed">{PROJECT_DESCRIPTION}</p>
            </div>

            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
              <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <p className="text-xs text-amber-800 leading-relaxed">
                La investigación se encuentra en una fase inicial y no puede garantizarse que dé lugar a un tratamiento. Cada avance, sin embargo, permite acercarnos a una oportunidad que hoy no existe.
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. El objetivo económico ── */}
        <section className="py-14 px-5">
          <div className="max-w-lg mx-auto text-center">
            <SectionLabel>El objetivo</SectionLabel>
            <div className="bg-brand-950 text-white rounded-3xl px-8 py-8 mb-6">
              <p className="font-serif text-4xl sm:text-5xl font-bold text-warm-300 mb-2">3 millones de euros</p>
              <p className="text-brand-200 text-sm sm:text-base leading-relaxed">
                Es la cantidad estimada necesaria para desarrollar las distintas fases del proyecto preclínico de terapia génica y reunir los recursos científicos, técnicos y regulatorios necesarios para avanzar.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-100 shadow-sm p-6 text-left">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4 text-center">¿En qué se invierte?</p>
              <ul className="space-y-3">
                {FUND_USES.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 6. Confianza y transparencia ── */}
        <section className="bg-brand-50 py-14 px-5">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl shadow-sm border border-brand-100 p-7 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-2xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Las donaciones son gestionadas por <strong className="text-gray-900">AITEP</strong>, Asociación para la Investigación y Tratamiento de Enfermedades Peroxisomales, una entidad sin ánimo de lucro creada para impulsar la investigación y buscar oportunidades para Claudia y otros niños con enfermedades peroxisomales. Iremos informando de los avances del proyecto.
              </p>
            </div>
          </div>
        </section>

        {/* ── 7. CTA final ── */}
        <section className="py-16 px-5 text-center">
          <div className="max-w-lg mx-auto">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-warm-700 leading-snug mb-3">
              Ayuda a Claudia, salva una vida.
            </p>
            <p className="text-brand-950/70 text-sm leading-relaxed mb-7">
              Desde 3 € puedes formar parte de la investigación que Claudia necesita.
            </p>
            <DonaButton onClick={openModal} className="w-full sm:w-auto" />
          </div>
        </section>
      </main>

      {/* Footer mínimo, sin menú de navegación */}
      <footer className="border-t border-gray-100 py-8 px-6 text-center">
        <p className="text-xs text-gray-400 mb-2">
          © {new Date().getFullYear()} El Reto de Claudia · AITEP, asociación sin ánimo de lucro
        </p>
        <div className="flex items-center justify-center gap-4 text-xs">
          <Link to="/" className="text-brand-600 hover:underline">Conoce toda la historia de Claudia</Link>
          <span className="text-gray-300">·</span>
          <Link to="/privacidad" className="text-gray-400 hover:underline">Privacidad</Link>
        </div>
      </footer>

      {/* CTA fijo en móvil — se mantiene igual */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-2 bg-gradient-to-t from-white/95 to-transparent backdrop-blur-sm">
        <button
          onClick={openModal}
          className="block w-full text-center bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-base px-4 py-3.5 rounded-2xl shadow-lg transition-colors"
        >
          Dona ❤️
        </button>
      </div>

      {showModal && <BizumModal onClose={() => setShowModal(false)} />}
    </div>
  )
}
