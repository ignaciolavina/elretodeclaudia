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
      className="min-h-screen flex items-center bg-[#f3f4f6]"
      aria-label="Sección principal"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Columna izquierda */}
          <div>
            {/* Badge */}
            <div className={fade('delay-100')}>
              <span className="inline-flex items-center gap-2 border border-brand-950/30 text-brand-950 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-10">
                <span className="w-1.5 h-1.5 bg-brand-950 rounded-full" aria-hidden="true" />
                Caso clínico · Convocatoria abierta
              </span>
            </div>

            {/* Titular */}
            <h1
              className={`font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-brand-950 leading-[1.05] mb-7 ${fade('delay-150')}`}
            >
              Buscamos investigadores para empezar la{' '}
              <em className="not-italic italic text-brand-500">terapia génica</em>{' '}
              de Claudia.
            </h1>

            {/* Párrafo principal */}
            <p className={`text-brand-950/70 text-lg leading-relaxed mb-4 ${fade('delay-300')}`}>
              Claudia tiene 2 años y medio. Padece la deficiencia de la proteína D-bifuncional (DBP),
              una enfermedad neurodegenerativa ultrarrara sin tratamiento curativo. La terapia génica
              es hoy la vía con más potencial — y necesitamos conectar con quienes puedan explorarla.
            </p>

            {/* Párrafo secundario */}
            <p className={`text-brand-950/45 text-sm leading-relaxed mb-12 ${fade('delay-[400ms]')}`}>
              Si trabajas en terapia génica, enfermedades metabólicas o peroxisomales, o conoces a
              alguien que lo haga, hay un lugar en este reto para ti.
            </p>

            {/* Botones */}
            <div className={`flex flex-col sm:flex-row items-start gap-4 ${fade('delay-500')}`}>
              <a
                href="#ayudar"
                onClick={(e) => { e.preventDefault(); scrollTo('#ayudar') }}
                className="inline-flex items-center gap-2 bg-brand-950 hover:bg-brand-900 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-950 focus:ring-offset-2"
              >
                Cómo puedes ayudar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="#dbp"
                onClick={(e) => { e.preventDefault(); scrollTo('#dbp') }}
                className="inline-flex items-center gap-2 bg-white border border-brand-950/20 hover:border-brand-950/50 text-brand-950 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-950 focus:ring-offset-2"
              >
                Conoce la enfermedad
              </a>
            </div>
          </div>

          {/* Columna derecha — placeholder imagen */}
          <div className={`relative h-[480px] lg:h-[560px] rounded-xl overflow-hidden ${fade('delay-200')}`}>
            <div
              className="absolute inset-0"
              style={{
                background: 'repeating-linear-gradient(-45deg, #d9dde6 0px, #d9dde6 1px, #e8ebf0 1px, #e8ebf0 16px)',
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-5 right-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-white/60 text-brand-950/60 text-xs font-semibold tracking-widest uppercase px-3 py-2 rounded">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
                <path strokeLinecap="round" strokeWidth={1.5} d="M3 16l5-5 4 4 3-3 6 6" />
              </svg>
              Retrato de Claudia
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
