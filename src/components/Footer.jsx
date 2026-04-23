import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const NAV_KEYS = [
  { key: 'inicio',   href: '#inicio'   },
  { key: 'dbp',      href: '#dbp'      },
  { key: 'historia', href: '#historia' },
  { key: 'ayudar',   href: '#ayudar'   },
  { key: 'contacto', href: '#contacto' },
]

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useLanguage()
  const d = t.footer

  const handleLink = (e, href) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/' + href)
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-brand-950 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Columna 1 */}
          <div className="md:col-span-1">
            <p className="font-serif font-bold text-2xl text-white mb-3">El Reto de Claudia</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{d.description}</p>
            <span className="inline-flex items-center gap-1.5 bg-brand-800 text-gray-200 text-xs font-medium px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-gray-400 rounded-full" aria-hidden="true" />
              {d.chip}
            </span>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              {d.navTitle}
            </h3>
            <ul className="space-y-2.5 list-none m-0 p-0">
              {NAV_KEYS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLink(e, link.href)}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              {d.contactTitle}
            </h3>
            <div className="space-y-3 mb-6">
              <a href="mailto:info@elretodeclaudia.org"
                className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@elretodeclaudia.org
              </a>
              <a href="tel:+34677804196"
                className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                677 804 196
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">
                {d.socialTitle}
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/elretodeclaudia" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-brand-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-700 transition-colors"
                  aria-label="Instagram @elretodeclaudia">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} El Reto de Claudia · {d.copyright}
          </p>
          <p className="text-gray-500 text-xs text-center sm:text-right">
            {d.domain}{' '}
            <span className="text-gray-400">elretodeclaudia.org</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
