import { useEffect, useState } from 'react'

const DONATION_LINK = 'https://www.migranodearena.org/reto/el-reto-de-claudia'
const MEMBER_AMOUNTS = [
  { amount: '10 €', emoji: '🍽️', href: 'https://buy.stripe.com/7sY14haRwds4cWQeA54F200' },
  { amount: '20 €', emoji: '📺', href: 'https://buy.stripe.com/28EeV7gbQ9bO8GA4Zv4F202' },
  { amount: '50 €', emoji: '💆', href: 'https://buy.stripe.com/eVqfZb5xcfAccWQdw14F204' },
]
const STRIPE_CUSTOM = 'https://buy.stripe.com/5kQ9ANbVAds47Cw2Rn4F206'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useLanguage } from '../context/LanguageContext'


const IBAN = 'ES0600495186912316155681'

const ONCE_AMOUNTS = [
  { amount: '10 €', href: 'https://buy.stripe.com/9B600d3p4fAc2ic3Vr4F207' },
  { amount: '20 €', href: 'https://buy.stripe.com/aFa8wJ3p4ew87Cw2Rn4F208' },
  { amount: '50 €', href: 'https://buy.stripe.com/bJe14hf7M87Kg92dw14F209' },
]
const ONCE_CUSTOM = 'https://buy.stripe.com/8x2fZb8Jo73GcWQ63z4F201'


const CANCEL_HREF = 'https://billing.stripe.com/p/login/7sY14haRwds4cWQeA54F200'
const CONTACT_PHONE = '677 804 196'
const CONTACT_EMAIL = 'info@elretodeclaudia.org'
// order: best-for-claudia, certificate, doubts-donation, safe, cancel, other-ways, association, error
const FAQ_CONTACT = [true, false, true, false, true, true, false, true]

function FaqItem({ item, hasContact, isOpen, onToggle, cancelLinkText }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-gray-900 text-sm">{item.q}</span>
        <svg
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5 space-y-3 text-sm text-gray-600 leading-relaxed">
          <p>{item.a}</p>
          {item.cancelLink && (
            <a
              href={CANCEL_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold text-brand-600 hover:underline"
            >
              {cancelLinkText}
            </a>
          )}
          {item.a2 && <p>{item.a2}</p>}
          {hasContact && (
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="font-semibold text-brand-600 hover:underline">
                {CONTACT_PHONE}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-brand-600 hover:underline">
                {CONTACT_EMAIL}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function TaxCard({ d, donationAmount, setDonationAmount }) {
  const deduction = Math.round(donationAmount * 0.8)
  const netCost = donationAmount - deduction
  const [showModal, setShowModal] = useState(false)
  const m = d.tax.infoModal

  return (
    <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
      <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-1">
        {d.tax.title}
        <span className="text-gray-600 font-light text-lg"> — {d.tax.subtitle}</span>
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{d.tax.desc}</p>

      <div className="mb-6">
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{d.tax.sliderLabel}</span>
          <span className="text-2xl font-bold text-brand-700">{donationAmount} €</span>
        </div>
        <input
          type="range"
          min="0"
          max="200"
          step="5"
          value={donationAmount}
          onChange={e => setDonationAmount(Number(e.target.value))}
          className="w-full accent-brand-600 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>0 €</span>
          <span>200 €</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-brand-50 border border-brand-100 rounded-2xl p-4 text-center flex flex-col items-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold flex-1 flex items-center justify-center">{d.tax.labelDeduction}</p>
          <p className="text-3xl font-bold text-brand-600">{deduction} €</p>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center flex flex-col items-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold flex-1 flex items-center justify-center">{d.tax.labelNet}</p>
          <p className="text-3xl font-bold text-green-600">{netCost} €</p>
        </div>
      </div>

      <a
        href={DONATION_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-2xl py-4 text-sm transition-colors"
      >
        {d.tax.cta} ❤️
      </a>

      <button
        onClick={() => setShowModal(true)}
        className="w-full text-center text-sm text-brand-600 hover:underline mt-3"
      >
        {d.tax.moreInfo}
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-xl max-w-md w-full p-7 relative max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-5">{m.title}</h3>

            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <p className="font-semibold text-gray-900 mb-2">{m.personasFisicas}</p>
                <p className="mb-2">{m.pf1}</p>
                <p>{m.pf2}</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">{m.personasJuridicas}</p>
                <p>{m.pj1}</p>
              </div>

              <p className="text-gray-600">{m.forales}</p>

              <p className="text-xs text-gray-500 border-t border-gray-100 pt-4">{m.footnote}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Donar() {
  const [copied, setCopied] = useState(false)
  const [copiedBeneficiary, setCopiedBeneficiary] = useState(false)
  const [showDirectModal, setShowDirectModal] = useState(false)
  const [directTab, setDirectTab] = useState('once')
  const [openFaq, setOpenFaq] = useState(null)
  const [donationAmount, setDonationAmount] = useState(50)
  const { t } = useLanguage()
  const d = t.donar

  useEffect(() => { window.scrollTo(0, 0) }, [])

  function copyIban() {
    navigator.clipboard.writeText(IBAN)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function copyBeneficiary() {
    navigator.clipboard.writeText(d.transfer.beneficiaryValue)
    setCopiedBeneficiary(true)
    setTimeout(() => setCopiedBeneficiary(false), 2000)
  }

  const DirectDonationCard = () => (
    <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
      <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
        {d.directDonation.title}
      </h2>
      <p className="text-gray-500 text-sm mb-5">{d.directDonation.tagline}</p>
      {!showDirectModal && (
        <button
          onClick={() => setShowDirectModal(true)}
          className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-2xl py-4 text-sm transition-colors"
        >
          {d.directDonation.cta}
        </button>
      )}

      {showDirectModal && (
        <div className="space-y-5">
          {/* IBAN + Beneficiario */}
          <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100 space-y-4">
            <div>
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
            <div className="border-t border-brand-100 pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">{d.transfer.beneficiaryLabel}</p>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-brand-700">{d.transfer.beneficiaryValue}</p>
                <button
                  onClick={copyBeneficiary}
                  title={copiedBeneficiary ? d.transfer.copiedTitle : d.transfer.copyBeneficiaryTitle}
                  className={`flex-shrink-0 p-2 rounded-lg border transition-all ${copiedBeneficiary ? 'border-green-300 bg-green-50 text-green-600' : 'border-brand-200 bg-white text-brand-600 hover:bg-brand-100'}`}
                >
                  {copiedBeneficiary
                    ? <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  }
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider whitespace-nowrap">
              {d.directDonation.cardDivider}
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Tab switcher */}
          <div className="flex bg-gray-100 rounded-2xl p-1 gap-1">
            <button
              onClick={() => setDirectTab('once')}
              className={`flex-1 text-xs font-semibold py-2.5 px-2 rounded-xl transition-all ${directTab === 'once' ? 'bg-white shadow text-brand-700' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {d.directDonation.tabOnce}
            </button>
            <button
              onClick={() => setDirectTab('monthly')}
              className={`flex-1 text-xs font-semibold py-2.5 px-2 rounded-xl transition-all leading-tight ${directTab === 'monthly' ? 'bg-white shadow text-brand-700' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {d.directDonation.tabMonthly}
            </button>
          </div>

          {/* Tab description */}
          <p className="text-xs text-gray-500 leading-relaxed">
            {directTab === 'monthly' ? d.directDonation.tabMonthlyDesc : d.directDonation.tabOnceDesc}
          </p>

          {/* Amount buttons */}
          <div className="grid grid-cols-4 gap-2">
            {directTab === 'monthly' ? (
              <>
                {MEMBER_AMOUNTS.map(({ amount, href }) => (
                  <a key={amount} href={href} target="_blank" rel="noopener noreferrer"
                    className="rounded-xl py-3 px-1 bg-brand-600 hover:bg-brand-700 transition-colors text-center flex items-center justify-center"
                  >
                    <span className="text-sm font-bold text-white">{amount}</span>
                  </a>
                ))}
                <a href={STRIPE_CUSTOM} target="_blank" rel="noopener noreferrer"
                  className="rounded-xl py-3 px-1 bg-brand-600 hover:bg-brand-700 transition-colors text-center flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-white leading-tight">{d.members.custom}</span>
                </a>
              </>
            ) : (
              <>
                {ONCE_AMOUNTS.map(({ amount, href }) => (
                  <a key={amount} href={href} target="_blank" rel="noopener noreferrer"
                    className="rounded-xl py-3 px-1 bg-brand-600 hover:bg-brand-700 transition-colors text-center flex items-center justify-center"
                  >
                    <span className="text-sm font-bold text-white">{amount}</span>
                  </a>
                ))}
                <a href={ONCE_CUSTOM} target="_blank" rel="noopener noreferrer"
                  className="rounded-xl py-3 px-1 bg-brand-600 hover:bg-brand-700 transition-colors text-center flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-white leading-tight">{d.members.custom}</span>
                </a>
              </>
            )}
          </div>

          {directTab === 'monthly' && (
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
          )}
        </div>
      )}
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

          {/* Desgravación + Donación directa — solo mobile */}
          <div className="lg:hidden space-y-6 mb-8">
            <TaxCard d={d} donationAmount={donationAmount} setDonationAmount={setDonationAmount} />
            <DirectDonationCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── Columna izquierda ── */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {d.research.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {d.research.introPre}<strong className="text-gray-800">{d.research.introBold}</strong>{d.research.introPost}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {d.research.intro2}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {d.research.intro3Pre}<strong className="text-gray-800">{d.research.intro3Bold}</strong>{d.research.intro3Post}
                </p>
                <div className="bg-brand-50 border border-brand-100 rounded-2xl px-5 py-4 mb-6">
                  <p className="text-brand-800 text-sm leading-relaxed">
                    {d.research.goalPre}<strong>{d.research.goalBold1}</strong>{d.research.goalMid}<strong>{d.research.goalBold2}</strong>
                  </p>
                </div>

              </div>
            </div>

            {/* ── Columna derecha: Pago ── */}
            <div className="space-y-6 sticky top-28">

              {/* Desgravación fiscal — solo desktop */}
              <div className="hidden lg:block">
                <TaxCard d={d} donationAmount={donationAmount} setDonationAmount={setDonationAmount} />
              </div>

              {/* Donación directa — solo desktop */}
              <div className="hidden lg:block">
                <DirectDonationCard />
              </div>


            </div>
          </div>

          {/* Preguntas frecuentes */}
          <div className="max-w-2xl mx-auto mt-20">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
              {d.faq.title}
            </h2>
            <div className="bg-white rounded-3xl shadow-sm border border-brand-100 px-8">
              {d.faq.items.map((item, i) => (
                <FaqItem
                  key={i}
                  item={item}
                  hasContact={FAQ_CONTACT[i]}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  cancelLinkText={d.faq.cancelLinkText}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
