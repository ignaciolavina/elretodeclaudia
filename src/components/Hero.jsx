import { useState, useEffect } from 'react'

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay) =>
    `transition-all duration-700 ${delay} ${
      loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
    }`

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Sección principal"
    >
      {/* Manchas decorativas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-[750px] h-[750px] bg-brand-200/70 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-brand-100/80 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 right-1/4 translate-x-1/4 w-[750px] h-[750px] bg-brand-200/60 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 md:py-44">
        <div className="max-w-3xl">
          {/* Etiqueta */}
          <div className={fade('delay-100')}>
            <span className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" aria-hidden="true" />
              Enfermedad ultrarrara · DBP · España
            </span>
          </div>

          {/* Titular principal */}
          <h1 className={`font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-950 leading-[1.1] mb-6 ${fade('delay-150')}`}>
            Buscamos investigadores para empezar la{' '}
            <span className="text-brand-700">terapia génica</span>{' '}
            de Claudia.
          </h1>

          {/* Subtítulo */}
          <p className={`text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mb-4 ${fade('delay-300')}`}>
            Claudia tiene 2 años y medio. Padece la deficiencia de la proteína
            D-bifuncional (DBP), una enfermedad neurodegenerativa ultrarrara sin
            tratamiento curativo. La terapia génica es hoy la vía con más
            potencial — y necesitamos conectar con quienes puedan explorarla.
          </p>

          <p className={`text-gray-400 text-base leading-relaxed max-w-xl mb-12 ${fade('delay-[400ms]')}`}>
            Si trabajas en terapia génica, enfermedades metabólicas o
            peroxisomales, o conoces a alguien que lo haga, hay un lugar en
            este reto para ti.
          </p>

          {/* CTA único */}
          <div className={`flex flex-col sm:flex-row items-start gap-4 ${fade('delay-500')}`}>
            <a
              href="#ayudar"
              onClick={(e) => { e.preventDefault(); scrollTo('#ayudar') }}
              className="inline-flex items-center gap-2 bg-warm-400 hover:bg-warm-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-warm-400 focus:ring-offset-2"
            >
              Cómo puedes ayudar
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#dbp"
              onClick={(e) => { e.preventDefault(); scrollTo('#dbp') }}
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-900 font-semibold px-4 py-4 transition-colors group"
            >
              Conoce la enfermedad
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <button
        onClick={() => scrollTo('#dbp')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 hover:text-brand-400 transition-colors animate-bounce focus:outline-none"
        aria-label="Desplazarse hacia abajo"
        tabIndex="-1"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}
