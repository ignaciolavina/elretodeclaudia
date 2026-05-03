import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(timer)
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
                {t.hero.badge}
              </span>
            </div>

            {/* Titular */}
            <h1
              className={`font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-950 leading-[1.05] mb-5 lg:mb-7 ${fade('delay-150')}`}
            >
              {t.hero.title1}{' '}
              <em className="not-italic italic text-brand-500">{t.hero.titleEmphasis}</em>{' '}
              {t.hero.title2}
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
              {t.hero.p1}
            </p>

            {/* Párrafo secundario */}
            <p className={`text-brand-950/45 text-sm leading-relaxed mb-12 ${fade('delay-[400ms]')}`}>
              {t.hero.p2}
            </p>

            {/* Botones */}
            <div className={`flex flex-col sm:flex-row items-start gap-4 ${fade('delay-500')}`}>
              {/* CTA Donar — solo mobile */}
              <Link
                to="/donar"
                className="sm:hidden w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-bold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-sm"
              >
                {t.nav.donar} ❤️
              </Link>
              <a
                href="#ayudar"
                onClick={(e) => { e.preventDefault(); scrollTo('#ayudar') }}
                className="w-full sm:flex-1 text-center inline-flex items-center justify-center gap-2 bg-brand-950 hover:bg-brand-900 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-950 focus:ring-offset-2"
              >
                {t.hero.cta1}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              {/* CTA Donar — solo desktop */}
              <Link
                to="/donar"
                className="hidden sm:flex sm:flex-1 items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
              >
                {t.nav.donar} ❤️
              </Link>
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
