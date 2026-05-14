import { useEffect, useState } from 'react'

const DONATION_LINK = 'https://www.migranodearena.org/reto/el-reto-de-claudia'
const MEMBER_AMOUNTS = [
  { amount: '10 €', emoji: '🍽️', href: 'https://buy.stripe.com/7sY14haRwds4cWQeA54F200' },
  { amount: '20 €', emoji: '📺', href: 'https://buy.stripe.com/28EeV7gbQ9bO8GA4Zv4F202' },
  { amount: '50 €', emoji: '💆', href: 'https://buy.stripe.com/9B63cpe3I1Jm8GA8bH4F203' },
]
const STRIPE_CUSTOM = 'https://buy.stripe.com/8x2fZb8Jo73GcWQ63z4F201'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useLanguage } from '../context/LanguageContext'


const IBAN = 'ES0600495186912316155681'

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

  const MembersCard = () => (
    <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
      <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-1">
        {d.members.title}
        <span className="text-gray-700 font-light text-lg"> — {d.members.subtitle}</span>
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-5">
        {d.members.desc}
      </p>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {MEMBER_AMOUNTS.map(({ amount, href }) => (
          <a
            key={amount}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl py-3 px-1 bg-brand-600 hover:bg-brand-700 transition-colors text-center flex items-center justify-center"
          >
            <span className="text-base font-bold text-white">{amount}</span>
          </a>
        ))}
        <a
          href={STRIPE_CUSTOM}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl py-3 px-1 bg-brand-600 hover:bg-brand-700 transition-colors text-center flex items-center justify-center"
        >
          <span className="text-xs sm:text-base font-bold text-white leading-tight">{d.members.custom}</span>
        </a>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 mb-4">
        <p className="text-xs text-amber-800 leading-relaxed">
          {d.members.fiscalWarningPre}
          <a href={DONATION_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-amber-900">
            {d.members.fiscalWarningLink}
          </a>
          {d.members.fiscalWarningPost}
        </p>
      </div>

      <div className="text-center">
        <a
          href="https://billing.stripe.com/p/login/7sY14haRwds4cWQeA54F200"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 hover:text-gray-700 underline underline-offset-2 transition-colors"
        >
          {d.members.cancel}
        </a>
      </div>
    </div>
  )

  const DonationCard = () => (
    <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
      <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-1">
        {d.donation.title}
        <span className="text-gray-600 font-light text-lg"> — {d.donation.subtitle}</span>
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {d.donation.desc}
      </p>
      <a
        href={DONATION_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-2xl py-4 text-sm transition-colors"
      >
        {d.donation.cta}
      </a>
    </div>
  )

  const TransferCard = () => (
    <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
      <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-5">
        {d.transfer.title}
      </h2>
      <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100 mb-6">
        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">{d.transfer.ibanLabel}</p>
        <div className="flex items-center justify-between gap-3">
          <p className="text-base font-bold text-brand-700 tracking-widest font-mono">
            ES06 0049 5186 9123 1615 5681
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
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800 leading-relaxed">
        <p>{d.transfer.note}</p>
      </div>
    </div>
  )

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

          {/* Socios + Donación + Transferencia — solo mobile */}
          <div className="lg:hidden space-y-6 mb-8">
            <MembersCard />
            <DonationCard />
            <TransferCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── Columna izquierda ── */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {d.research.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {d.research.intro}
                </p>
                <div className="bg-brand-50 border border-brand-100 rounded-2xl px-5 py-4 mb-6">
                  <p className="text-brand-800 text-sm font-medium leading-relaxed">
                    {d.research.goal}
                  </p>
                </div>

              </div>
            </div>

            {/* ── Columna derecha: Pago ── */}
            <div className="space-y-6 sticky top-28">

              {/* Socios — solo desktop */}
              <div className="hidden lg:block">
                <MembersCard />
              </div>

              {/* Donación — solo desktop */}
              <div className="hidden lg:block">
                <DonationCard />
              </div>

              {/* Transferencia bancaria — solo desktop */}
              <div className="hidden lg:block bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-5">
                  {d.transfer.title}
                </h2>

                <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100 mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">{d.transfer.ibanLabel}</p>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-bold text-brand-700 tracking-widest font-mono">
                      ES06 0049 5186 9123 1615 5681
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

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800 leading-relaxed">
                  <p>{d.transfer.note}</p>
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

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
