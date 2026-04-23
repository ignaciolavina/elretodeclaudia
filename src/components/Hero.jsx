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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:items-stretch">

          {/* Columna izquierda */}
          <div>
            {/* Badge */}
            <div className={fade('delay-100')}>
              <span className="inline-flex items-center gap-2 border border-brand-950/30 text-brand-950 text-[10px] lg:text-xs font-semibold tracking-widest uppercase px-3 py-1.5 lg:px-4 lg:py-2 rounded-full mb-5 lg:mb-10">
                <span className="w-1.5 h-1.5 bg-brand-950 rounded-full" aria-hidden="true" />
                Caso clínico · Convocatoria abierta
              </span>
            </div>

            {/* Titular */}
            <h1
              className={`font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-950 leading-[1.05] mb-5 lg:mb-7 ${fade('delay-150')}`}
            >
              Buscamos investigadores para empezar la{' '}
              <em className="not-italic italic text-brand-500">terapia génica</em>{' '}
              de Claudia.
            </h1>

            {/* Foto circular — solo mobile */}
            <div className={`flex justify-center mb-8 lg:hidden ${fade('delay-200')}`}>
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
                <img
                  src="/images/claudia.jpeg"
                  alt="Claudia"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

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

          {/* Columna derecha — foto de Claudia (solo desktop) */}
          <div className={`hidden lg:block relative lg:h-auto lg:min-h-[560px] rounded-xl overflow-hidden ${fade('delay-200')}`}>
            <img
              src="/images/claudia.jpeg"
              alt="Claudia en la playa, sonriendo"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
