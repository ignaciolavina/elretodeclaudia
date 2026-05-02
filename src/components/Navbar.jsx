import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const NAV_KEYS = [
  { key: 'inicio', href: '#inicio' },
  { key: 'dbp',    href: '#dbp'    },
  { key: 'historia', href: '#historia' },
  { key: 'ayudar',  href: '#ayudar'  },
  { key: 'contacto', href: '#contacto' },
]

export default function Navbar({ donatePage = false }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { t, lang, toggleLang } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + href)
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logotipo */}
          <Link
            to="/"
            className="font-serif font-bold text-xl tracking-tight text-brand-800 hover:text-brand-600 transition-colors duration-300"
          >
            El Reto de Claudia
          </Link>

          {/* Navegación desktop */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_KEYS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  className={
                    link.key === 'contacto'
                      ? 'text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors duration-200'
                      : 'text-sm font-medium text-gray-600 hover:text-warm-500 transition-colors duration-200'
                  }
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
            {/* Toggle idioma */}
            <li>
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="Cambiar idioma"
              >
                {lang === 'es' ? 'ES' : 'EN'}
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </li>
            <li>
              <Link
                to="/donar"
                className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                Donar
              </Link>
            </li>
          </ul>

          {/* Botón hamburguesa */}
          <button
            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú móvil */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!menuOpen}
        >
          <ul className="bg-white rounded-2xl shadow-xl py-3 px-2 list-none m-0">
            {NAV_KEYS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  className="block px-4 py-3 text-gray-700 hover:text-brand-700 hover:bg-brand-50 rounded-xl font-medium transition-colors"
                >
                  {t.nav[link.key]}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2 px-2 pt-2">
              <button
                onClick={toggleLang}
                className="flex-1 text-center text-xs font-bold tracking-widest text-gray-500 border border-gray-200 rounded-xl py-3 hover:text-brand-600 transition-colors"
              >
                {lang === 'es' ? '🇬🇧 English' : '🇪🇸 Español'}
              </button>
            </li>
            <li className="px-2 pt-2">
              <Link
                to="/donar"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold px-4 py-3 rounded-xl transition-colors"
              >
                Donar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
