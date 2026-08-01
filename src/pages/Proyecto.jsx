import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectTimeline from '../components/ProjectTimeline'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

function SectionHeader({ label, title, subtitle }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">{label}</span>
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  )
}

function AccentCard({ header, children, index = 0, className = '' }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl overflow-hidden border-l-4 border-brand-500 shadow-sm hover:shadow-md transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
    >
      <div className="bg-brand-100 px-6 py-4">{header}</div>
      <div className="p-6">{children}</div>
    </div>
  )
}

function StatCard({ number, label, index }) {
  return (
    <AccentCard
      index={index}
      className="text-center"
      header={<p className="font-serif text-4xl font-bold text-brand-800">{number}</p>}
    >
      <p className="text-gray-600 text-sm leading-relaxed">{label}</p>
    </AccentCard>
  )
}

function MissionCard({ point, index }) {
  return (
    <AccentCard
      index={index}
      header={<p className="font-serif text-3xl font-bold text-brand-800">{point.number}</p>}
    >
      <p className="text-gray-600 text-sm leading-relaxed">{point.text}</p>
    </AccentCard>
  )
}

export default function Proyecto() {
  const { t } = useLanguage()
  const d = t.proyecto

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Proyecto de investigación — El Reto de Claudia</title>
        <meta name="description" content="Terapia génica con CRISPR para la deficiencia de la proteína D-bifuncional (DBP): el enfoque científico, las fases del proyecto y la financiación necesaria." />
        <meta property="og:url" content="https://elretodeclaudia.org/proyecto" />
        <meta property="og:title" content="Proyecto de investigación — El Reto de Claudia" />
        <meta property="og:description" content="Terapia génica con CRISPR para la deficiencia de la proteína D-bifuncional (DBP): el enfoque científico, las fases del proyecto y la financiación necesaria." />
        <meta property="og:image" content="https://elretodeclaudia.org/og-default.png" />
        <meta name="twitter:title" content="Proyecto de investigación — El Reto de Claudia" />
        <meta name="twitter:description" content="Terapia génica con CRISPR para la deficiencia de la proteína D-bifuncional (DBP): el enfoque científico, las fases del proyecto y la financiación necesaria." />
        <meta name="twitter:image" content="https://elretodeclaudia.org/og-default.png" />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-brand-50 pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">{d.badge}</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
              {d.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">{d.subtitle}</p>
          </div>
        </section>

        {/* Enfoque científico */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label={d.approach.sectionLabel} title={d.approach.title} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AccentCard header={<h3 className="font-serif text-xl font-bold text-brand-900">{d.approach.techTitle}</h3>}>
                <div className="space-y-4">
                  {d.approach.techParagraphs.map((p, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
              </AccentCard>

              <AccentCard index={1} header={<h3 className="font-serif text-xl font-bold text-brand-900">{d.approach.whyTitle}</h3>}>
                <ul className="space-y-4">
                  {d.approach.whyItems.map((item, i) => (
                    <li key={i}>
                      <p className="text-gray-900 font-semibold text-sm mb-0.5">{item.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </AccentCard>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed mt-8 max-w-4xl">{d.approach.references}</p>
          </div>
        </section>

        {/* Fases del proyecto */}
        <ProjectTimeline />

        {/* Colaboradores */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label={d.collab.sectionLabel} title={d.collab.title} subtitle={d.collab.text} />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {d.collab.stats.map((stat, i) => (
                <StatCard key={i} number={stat.number} label={stat.label} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Financiación */}
        <section className="py-20 bg-brand-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">{d.funding.sectionLabel}</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                  {d.funding.title}
                </h2>
                <div className="space-y-4 mb-8">
                  {d.funding.paragraphs.map((p, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed">{p}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/donar"
                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    {d.funding.ctaDonate}
                  </Link>
                  <Link
                    to="/#contacto"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-700 text-sm font-semibold px-6 py-3 rounded-xl border border-brand-200 transition-colors"
                  >
                    {d.funding.ctaContact}
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl overflow-hidden border-l-4 border-brand-500 shadow-sm">
                  <div className="bg-brand-100 px-8 py-10 text-center">
                    <p className="font-serif text-5xl font-bold text-brand-800">{d.funding.amount}</p>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">{d.funding.amountLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre AITEP */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader label={d.aitep.sectionLabel} title={d.aitep.title} subtitle={d.aitep.intro} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {d.aitep.points.map((point, i) => (
                <MissionCard key={i} point={point} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
