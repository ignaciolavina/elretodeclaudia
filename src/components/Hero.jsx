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

  const fadeClass = (delay) =>
    `transition-all duration-700 ${delay} ${
      loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sección principal"
      style={{
        background:
          'linear-gradient(135deg, #3b0764 0%, #581c87 30%, #6b21a8 60%, #7e22ce 85%, #9333ea 100%)',
      }}
    >
      {/* Esferas decorativas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-warm-400/10 rounded-full blur-2xl" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-32 md:py-40">
        {/* Etiqueta superior */}
        <div className={fadeClass('delay-100')}>
          <span className="inline-flex items-center gap-2 bg-warm-400/15 border border-warm-400/30 text-warm-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-warm-400 rounded-full animate-pulse" aria-hidden="true" />
            Enfermedad ultrarrara · DBP · España
          </span>
        </div>

        {/* Título principal */}
        <h1 className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-white leading-tight mb-6 ${fadeClass('delay-200')}`}>
          Luchando por Claudia.
          <br />
          <span className="text-warm-300">
            Luchando por todas
            <br className="hidden sm:block" /> las familias como la nuestra.
          </span>
        </h1>

        {/* Subtítulo */}
        <p className={`text-purple-100/85 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed ${fadeClass('delay-300')}`}>
          Somos una asociación sin ánimo de lucro dedicada a dar visibilidad a la
          deficiencia de la proteína D-bifuncional (DBP), conectar con la comunidad
          científica y apoyar a las familias afectadas por esta enfermedad
          neurodegenerativa ultrarrara.
        </p>

        {/* Botones CTA */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${fadeClass('delay-500')}`}>
          <a
            href="#dbp"
            onClick={(e) => { e.preventDefault(); scrollTo('#dbp') }}
            className="bg-white text-brand-800 font-semibold px-8 py-4 rounded-2xl hover:bg-brand-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-800"
          >
            Conoce la enfermedad
          </a>
          <a
            href="#ayudar"
            onClick={(e) => { e.preventDefault(); scrollTo('#ayudar') }}
            className="bg-warm-400 hover:bg-warm-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto text-center focus:outline-none focus:ring-2 focus:ring-warm-400 focus:ring-offset-2 focus:ring-offset-brand-800"
          >
            Cómo puedes ayudar
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className={`mt-16 flex justify-center ${fadeClass('delay-700')}`} aria-hidden="true">
          <button
            onClick={() => scrollTo('#dbp')}
            className="text-white/40 hover:text-white/70 transition-colors animate-bounce"
            tabIndex="-1"
            aria-label="Desplazarse hacia abajo"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
