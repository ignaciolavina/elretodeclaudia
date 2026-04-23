import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const NEEDS = [
  {
    icon: '🪑',
    label: 'Silla ortopédica',
    price: '3.600 €',
    desc: 'Adaptada a sus necesidades posturales específicas. Parcialmente subvencionada.',
    done: false,
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

const AMOUNTS = [
  { value: 2,  label: 'Dona un café',       emoji: '☕', message: 'Gracias por donar un café. Es un pequeño sacrificio, pero para Claudia supone un mundo.' },
  { value: 5,  label: 'Dona un menú',       emoji: '🥗', message: '¡Gracias! Con 5€ ayudas a costear parte de una sesión de fisioterapia. Cada céntimo cuenta.' },
  { value: 10, label: 'Dona una pizza',     emoji: '🍕', message: '10€ pueden parecer poco, pero para nosotros es un paso más hacia una vida mejor para Claudia. ¡Gracias de corazón!' },
  { value: 50, label: 'Dona una experiencia', emoji: '✨', message: '¡Eres increíble! 50€ suponen una sesión de terapia completa para Claudia. Tu generosidad cambia su día a día.' },
]

const FREQUENCIES = [
  { value: 'once',  label: 'Puntual' },
  { value: 'month', label: 'Mensual' },
  { value: 'year',  label: 'Anual' },
]

const BIZUM_STEPS = [
  'Abre tu app de Bizum',
  'Selecciona «Donar a ONG» o similar',
  'Introduce el código 13666 y DONA',
]

export default function Donar() {
  const [frequency, setFrequency] = useState('once')
  const [selected, setSelected] = useState(null)
  const [custom, setCustom] = useState('')

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const activeAmount = selected !== null
    ? AMOUNTS.find((a) => a.value === selected)
    : null

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
            <p className="text-gray-600 text-lg leading-relaxed">
              Tu apoyo se destina directamente a las necesidades de Claudia, sus terapias
              y a financiar la investigación de la DBP.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── Columna izquierda ── */}
            <div className="space-y-8">

              {/* 1. Investigación */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-3">
                  Investigación y terapia génica
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  Parte de las donaciones se destina a financiar investigación sobre la
                  deficiencia de la proteína D-bifuncional y a una posible terapia génica
                  para Claudia, en cuanto sea aceptada como candidata.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  El dinero que no pueda usarse directamente para Claudia se empleará en
                  financiar terapia génica para otros pacientes con condiciones similares,
                  porque ninguna familia debería enfrentarse a esto sola.
                </p>
              </div>

              {/* 2. Terapias */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
                  Terapias semanales
                </h2>
                <p className="text-gray-500 text-sm mb-5">
                  Claudia recibe atención continuada de un equipo multidisciplinar.
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
                  Los artículos marcados con ✓ ya han sido conseguidos gracias a vuestro apoyo.
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
              </div>
            </div>

            {/* ── Columna derecha: Pago ── */}
            <div className="space-y-6 sticky top-28">

              {/* Bizum */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-5">
                  Donar por Bizum
                </h2>

                {/* Código destacado */}
                <div className="flex items-center gap-4 bg-brand-50 rounded-2xl p-5 border border-brand-100 mb-5">
                  <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-0.5">Código Bizum</p>
                    <p className="text-4xl font-bold text-brand-700 tracking-wider">13666</p>
                  </div>
                </div>

                {/* Instrucciones */}
                <ol className="space-y-3">
                  {BIZUM_STEPS.map((step, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tarjeta */}
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-brand-100">
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-5">
                  Donar con tarjeta
                </h2>

                {/* Frecuencia */}
                <div className="flex gap-2 mb-5 bg-brand-50 rounded-xl p-1">
                  {FREQUENCIES.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFrequency(f.value)}
                      className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                        frequency === f.value
                          ? 'bg-white shadow text-brand-700'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* Importes — más compactos */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {AMOUNTS.map((a) => (
                    <button
                      key={a.value}
                      onClick={() => { setSelected(a.value); setCustom('') }}
                      className={`rounded-xl p-3 text-center border-2 transition-all ${
                        selected === a.value
                          ? 'border-brand-500 bg-brand-50'
                          : 'border-gray-100 hover:border-brand-200'
                      }`}
                    >
                      <span className="text-xl block mb-1">{a.emoji}</span>
                      <span className="font-bold text-gray-900 text-sm block">{a.value} €</span>
                      <span className="text-gray-400 text-xs leading-tight block mt-0.5">{a.label.replace('Dona ', '')}</span>
                    </button>
                  ))}
                </div>

                {/* Otro importe */}
                <div className="mb-4">
                  <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Otro importe
                  </label>
                  <div className="relative">
                    <input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="0"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setSelected(null) }}
                      className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 pr-10 text-gray-900 font-semibold focus:outline-none focus:border-brand-400 transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">€</span>
                  </div>
                </div>

                {/* Mensaje de agradecimiento */}
                {activeAmount && (
                  <div className="bg-warm-50 border border-warm-200 rounded-2xl p-4 mb-4 text-sm text-warm-800 leading-relaxed">
                    <span className="text-lg mr-2">{activeAmount.emoji}</span>
                    {activeAmount.message}
                  </div>
                )}

                {/* Botón donar */}
                <button
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-2xl transition-colors text-lg shadow-md disabled:opacity-50"
                  disabled={!selected && !custom}
                >
                  Donar {selected ? `${selected} €` : custom ? `${custom} €` : ''}{frequency === 'month' ? '/mes' : frequency === 'year' ? '/año' : ''}
                </button>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Pago seguro · Recibirás un justificante por email
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
