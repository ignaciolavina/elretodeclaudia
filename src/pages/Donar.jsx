import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const NEEDS = [
  {
    icon: '🪑',
    label: 'Silla ortopédica',
    price: '3.600 €',
    desc: 'Adaptada a sus necesidades posturales específicas. Parcialmente subvencionada.',
    done: true,
  },
  {
    icon: '🦽',
    label: 'Bipedestador',
    price: '3.200 €',
    desc: 'Permite a Claudia mantenerse erguida y trabajar la postura.',
    done: true,
  },
  {
    icon: '👂',
    label: 'Audífonos',
    price: '6.000 €',
    desc: 'Esenciales para su desarrollo del lenguaje y comunicación.',
    done: true,
  },
  {
    icon: '🦶',
    label: 'DAFOs',
    price: '900 €',
    desc: 'Ortesis que le ayudan a caminar y mantener la posición correcta del pie.',
    done: true,
  },
]

const THERAPIES = [
  { label: 'Fisioterapia', sessions: '4 sesiones/semana' },
  { label: 'Logopedia', sessions: 'Semanal' },
  { label: 'Estimulación', sessions: 'Semanal' },
]


const IBAN = 'ES0301826077230201623835'

export default function Donar() {
  const [copied, setCopied] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  function copyIban() {
    navigator.clipboard.writeText(IBAN)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar donatePage />
      <main className="flex-1 pt-24 pb-16 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Encabezado */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
              Ayuda a Claudia
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
              Cada donación importa
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── Columna izquierda ── */}
            <div className="space-y-8">

              {/* 1. Investigación */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                  En busca de un tratamiento
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Estamos en contacto con expertos de todo el mundo, explorando cada vía posible
                  hacia una terapia génica o tratamiento para Claudia. Estas son algunas de las líneas que estamos evaluando tras hablar con algunos expertos y laboratorios:
                </p>
                <div className="space-y-4">
                  <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      Terapia génica con ARN mensajero
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Estamos tratando de apoyar un proyecto (actualmente en fase de aprobación) de
                      investigación con ARN mensajero para estudiar la enfermedad de Claudia. En caso
                      de aprobación, requerirá financiación para su desarrollo.
                    </p>
                  </div>
                  <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      Drug repurposing
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Estamos en conversaciones con un laboratorio especializado para analizar cómo
                      responden las células (fibroblastos) de Claudia a distintos fármacos ya existentes.
                      El objetivo es identificar compuestos que puedan ayudar a ralentizar la enfermedad.
                      Uno de los candidatos de interés es la <span className="italic">leriglitazona</span>,
                      actualmente en estudio.
                    </p>
                  </div>
                  <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      Estudios en fase preclínica
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Un laboratorio ha mostrado interés en avanzar hacia estudios en fase preclínica
                      (modelos en ratón) para investigar la enfermedad de Claudia. Este tipo de estudios
                      son un paso clave antes de cualquier posible tratamiento en humanos. El coste
                      estimado se sitúa entre <span className="font-semibold text-gray-700">50.000 € y 160.000 €</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Terapias */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
                  Terapias semanales
                </h2>
                <p className="text-gray-500 text-sm mb-5">
                  Ayuda a Claudia en sus terapias y tratamientos semanales.
                </p>
                <div className="flex flex-wrap gap-3">
                  {THERAPIES.map((t) => (
                    <div key={t.label} className="bg-brand-50 rounded-xl px-4 py-3 border border-brand-100">
                      <p className="font-semibold text-gray-800 text-sm">{t.label}</p>
                      <p className="text-brand-500 text-xs mt-0.5">{t.sessions}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Material */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-1">
                  Material que Claudia necesita
                </h2>
                <p className="text-gray-400 text-xs mb-5">
                  Los artículos marcados ya han sido comprados, parte de ellos subvencionados por ayudas de la Comunidad de Madrid.
                </p>
                <div className="space-y-4">
                  {NEEDS.map((n) => (
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
                                ✓ Conseguido
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
                  <span className="text-xs text-gray-400">Total</span>
                  <span className="text-xs font-semibold text-gray-400">
                    {NEEDS.filter(n => n.done).reduce((sum, n) => sum + parseFloat(n.price.replace('.', '').replace(' €', '')), 0).toLocaleString('es-ES')} €
                  </span>
                </div>
              </div>
            </div>

            {/* ── Columna derecha: Pago ── */}
            <div className="space-y-6 sticky top-28">

              {/* Transferencia bancaria */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-5">
                  Transferencia bancaria
                </h2>

                <div className="bg-brand-50 rounded-2xl p-5 border border-brand-100 mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Número de cuenta (IBAN)</p>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-bold text-brand-700 tracking-widest font-mono">
                      ES03 0182 6077 2302 0162 3835
                    </p>
                    <button
                      onClick={copyIban}
                      title={copied ? 'Copiado' : 'Copiar IBAN'}
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
                  <p>
                    <span className="font-semibold text-gray-900">El reto de Claudia</span> es un proyecto de la
                    {' '}<span className="font-semibold">Asociación para la Investigación y Tratamiento de Enfermedades Peroxisomales</span>.
                  </p>
                  <p className="text-gray-500">
                    🕐 Muy pronto podrás apoyar a través de la asociación, desgravando hasta un <span className="font-semibold text-gray-700">80%</span> de tu donación en la declaración de la renta.
                  </p>
                </div>
              </div>

              {/* Bizum — próximamente */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100 opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-serif text-2xl font-semibold text-gray-900">
                    Donar por Bizum
                  </h2>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-widest">
                    Próximamente
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Pronto podrás donar fácilmente a través de Bizum.
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
