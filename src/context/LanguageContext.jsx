import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import translations from '../i18n/translations'

const LanguageContext = createContext(null)

function isEnglishPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/')
}

export function LanguageProvider({ children }) {
  const location = useLocation()
  const [lang, setLang] = useState(() => (isEnglishPath(location.pathname) ? 'en' : 'es'))
  const t = translations[lang]
  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  useEffect(() => {
    if (isEnglishPath(location.pathname)) setLang('en')
  }, [location.pathname])

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
