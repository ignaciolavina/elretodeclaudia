import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useLanguage } from '../context/LanguageContext'

const NEEDS_DATA = [
  { icon: '🪑', price: '3.600 €', done: true },
  { icon: '🦽', price: '3.200 €', done: true },
  { icon: '👂', price: '6.000 €', done: true },
  { icon: '🦶', price: '900 €',   done: true },
]

const IBAN = 'ES0301826077230201623835'

export default function Donar() {
  const [copied, setCopied] = useState(false)
  const { t } = useLanguage()
  const d = t.donar

  useEffect(() => { window.scrollTo(0, 0) }, [])

  function copyIban() {
    navigator.clipboard.writeText(IBAN)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const TransferCard = () => (
    <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
      <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-5">
        {d.transfer.title}
      </h2>
      <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100 mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">{d.transfer.ibanLabel}</p>
        <div className="flex items-center justify-between gap-3">
          <p className="text-base font-bold text-brand-700 tracking-widest font-mono">
            ES03 0182 6077 2302 0162 3835
          </p>
          <button
            onClick={copyIban}
            title={copied ? d.transfer.copiedTitle : d.transfer.copyTitle}
            className={`flex-shrink-0 p-2 rounded-lg border transition-all ${copied ? 'border-green-300 bg-green-50 text-green-600' : 'border-brand-200 bg-white text-brand-600 hover:bg-brand-100'}`}
          >
            {copied
              ? <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            }
          </button>
        </div>
      </div>
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-gray-700 leading-relaxed space-y-3">
        <p>{d.transfer.assocText}</p>
        <p>{d.transfer.soonText}</p>
      </div>
    </div>
  )

  const needs = NEEDS_DATA.map((n, i) => ({ ...n, ...d.material.items[i] }))

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar donatePage />
      <main className="flex-1 pt-24 pb-16 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Encabezado */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
              {d.badge}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
              {d.title}
            </h1>
          </div>

          {/* Transferencia bancaria — solo mobile, aparece primero */}
          <div className="lg:hidden mb-8">
            <TransferCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── Columna izquierda ── */}
            <div className="space-y-8">

              {/* 1. Investigación */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                  {d.research.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {d.research.intro}
                </p>
                <div className="space-y-4">
                  {d.research.lines.map((line, i) => (
                    <div key={i} className="bg-brand-50 rounded-2xl p-5 border border-brand-100">
                      <p className="font-semibold text-gray-900 text-sm mb-1">{line.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {line.highlightCost
                          ? line.desc.split(line.highlightCost).map((part, j, arr) => (
                              <span key={j}>
                                {part}
                                {j < arr.length - 1 && (
                                  <span className="font-semibold text-gray-700">{line.highlightCost}</span>
                                )}
                              </span>
                            ))
                          : line.desc
                        }
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Terapias */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
                  {d.therapies.title}
                </h2>
                <p className="text-gray-500 text-sm mb-5">
                  {d.therapies.subtitle}
                </p>
                <div className="flex flex-wrap gap-3">
                  {d.therapies.items.map((item) => (
                    <div key={item.label} className="bg-brand-50 rounded-xl px-4 py-3 border border-brand-100">
                      <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                      <p className="text-brand-500 text-xs mt-0.5">{item.sessions}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Material */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-1">
                  {d.material.title}
                </h2>
                <p className="text-gray-400 text-xs mb-5">
                  {d.material.subtitle}
                </p>
                <div className="space-y-4">
                  {needs.map((n) => (
                    <div
                      key={n.label}
                      className={`flex gap-4 items-start rounded-2xl px-4 py-3 ${
                        n.done ? 'bg-green-50 border border-green-100' : 'bg-brand-50 border border-brand-100'
                      }`}
                    >
                      <span className={`text-2xl mt-0.5 ${n.done ? 'grayscale opacity-60' : ''}`}>{n.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className={`font-semibold text-sm ${n.done ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                              {n.label}
                            </span>
                            {n.done && (
                              <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded-full">
                                {d.material.achieved}
                              </span>
                            )}
                          </div>
                          <span className={`font-bold text-sm ${n.done ? 'text-gray-300' : 'text-brand-600'}`}>
                            {n.price}
                          </span>
                        </div>
                        <p className={`text-xs leading-relaxed ${n.done ? 'text-gray-400' : 'text-gray-500'}`}>
                          {n.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{d.material.total}</span>
                  <span className="text-xs font-semibold text-gray-400">
                    {NEEDS_DATA.filter(n => n.done).reduce((sum, n) => sum + parseFloat(n.price.replace('.', '').replace(' €', '')), 0).toLocaleString('es-ES')} €
                  </span>
                </div>
              </div>
            </div>

            {/* ── Columna derecha: Pago ── */}
            <div className="space-y-6 sticky top-28">

              {/* Transferencia bancaria — solo desktop */}
              <div className="hidden lg:block bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-5">
                  {d.transfer.title}
                </h2>

                <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100 mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">{d.transfer.ibanLabel}</p>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-bold text-brand-700 tracking-widest font-mono">
                      ES03 0182 6077 2302 0162 3835
                    </p>
                    <button
                      onClick={copyIban}
                      title={copied ? d.transfer.copiedTitle : d.transfer.copyTitle}
                      className={`flex-shrink-0 p-2 rounded-lg border transition-all ${copied ? 'border-green-300 bg-green-50 text-green-600' : 'border-brand-200 bg-white text-brand-600 hover:bg-brand-100'}`}
                    >
                      {copied
                        ? <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                      }
                    </button>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>{d.transfer.assocText}</p>
                  <p>{d.transfer.soonText}</p>
                </div>
              </div>

              {/* Bizum — próximamente */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100 opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-serif text-2xl font-semibold text-gray-900">
                    {d.bizum.title}
                  </h2>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-widest">
                    {d.bizum.soon}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  {d.bizum.desc}
                </p>
              </div>

              {/* Tarjeta — próximamente */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100 opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-serif text-2xl font-semibold text-gray-900">
                    {d.card.title}
                  </h2>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-widest">
                    {d.card.soon}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  {d.card.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
