import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const PAIS_BANDERA = { ES: '🇪🇸', US: '🇺🇸', EU: '🇪🇺', CN: '🇨🇳', FR: '🇫🇷' }

// Cada fila del timeline se solapa con la siguiente; z-index descendente
// para que una fase nunca tape los badges/popover de la fase anterior.
const FILA_Z = ['z-40', 'z-30', 'z-20', 'z-10']

// Config estructural (no traducible): país de cada entidad y quién participa en qué fase.
// El texto (nombre, descripción, etc.) vive en i18n/translations.js bajo projectTimeline.entidades.
const ENTIDADES_CONFIG = {
  ceu: { pais: 'ES' },
  aitep: { pais: 'ES' },
  aemps: { pais: 'ES' },
  ema: { pais: 'EU' },
  danielGao: { pais: 'US' },
  charlesRiver: { pais: 'FR' },
  hospitalSantJoanDeDeu: { pais: 'ES' },
  empresaEEUU1: { pais: 'CN', pendiente: true },
  empresaEEUU2: { pais: 'US', pendiente: true },
  empresaEEUU3: { pais: 'US', pendiente: true },
  empresaFabricacion: { pais: 'US', pendiente: true },
}

const FASES_CONFIG = [
  { numero: 1, destacado: true, participantes: ['ceu', 'aitep', 'aemps', 'ema'] },
  { numero: 2, costeOculto: true, participantes: ['danielGao', 'ceu', 'aitep'] },
  {
    numero: 3,
    costeOculto: true,
    participantes: ['charlesRiver', 'ceu', 'aitep', 'danielGao', 'empresaEEUU1', 'empresaEEUU2', 'empresaEEUU3'],
  },
  {
    numero: 4,
    costeOculto: true,
    participantes: ['hospitalSantJoanDeDeu', 'aemps', 'ema', 'ceu', 'aitep', 'empresaFabricacion'],
  },
]

// En qué fases participa cada entidad, derivado de FASES_CONFIG (para el popover).
const FASES_POR_ENTIDAD = {}
FASES_CONFIG.forEach((f) => {
  f.participantes.forEach((id) => {
    if (!FASES_POR_ENTIDAD[id]) FASES_POR_ENTIDAD[id] = []
    FASES_POR_ENTIDAD[id].push(f.numero)
  })
})

function ParticipantBadge({ id, entidad, pendienteTitle }) {
  const [open, setOpen] = useState(false)
  const config = ENTIDADES_CONFIG[id]
  if (!config || !entidad) return null

  const bandera = PAIS_BANDERA[config.pais]
  const fasesTexto = (FASES_POR_ENTIDAD[id] || []).join(' · ')

  if (config.pendiente) {
    return (
      <span
        title={pendienteTitle}
        className="inline-flex items-center gap-2 rounded-full border border-dashed border-gray-300 px-4 py-2 text-sm font-medium text-gray-400"
      >
        {bandera && <span>{bandera}</span>}
        {entidad.nombre}
      </span>
    )
  }

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors bg-white border-gray-200 text-gray-700 hover:border-brand-300"
      >
        {bandera && <span>{bandera}</span>}
        {entidad.nombre}
      </button>

      <div
        className={`absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 sm:w-80 max-w-[85vw] transition-all duration-200 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-1 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 text-left">
          <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest">
            {entidad.categoria}
          </span>
          <h4 className="font-serif text-xl font-bold text-gray-900 mt-2 mb-3 leading-snug">
            {entidad.nombreCompleto}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">{entidad.descripcion}</p>

          <div className="border-t border-gray-100 mt-4 pt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Fases</p>
              <p className="text-gray-900 text-sm font-medium">{fasesTexto}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Ámbito</p>
              <p className="text-gray-900 text-sm font-medium">{entidad.ambito}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhaseCard({ config, texto, d }) {
  const mostrarCoste = texto.coste && !config.costeOculto

  return (
    <div
      className={`rounded-3xl shadow-sm p-8 sm:p-10 bg-white text-left ${
        config.destacado ? 'border border-gray-100 border-l-4 border-l-brand-500' : 'border border-gray-100'
      }`}
    >
      <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-gray-900">
        {texto.titulo}
      </h3>

      <p className="text-xs uppercase tracking-widest font-semibold mt-6 mb-2 text-gray-400">
        {d.objetivoLabel}
      </p>
      <p className="text-base leading-relaxed text-gray-600">{texto.objetivo}</p>

      <p className="text-xs uppercase tracking-widest font-semibold mt-6 mb-4 text-gray-400">
        {d.actividadesLabel}
      </p>
      <div className="space-y-1.5">
        {texto.actividades.map((a, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-gray-400 flex-shrink-0">-</span>
            <p className="text-base leading-relaxed text-gray-600">{a}</p>
          </div>
        ))}
      </div>

      <div className="border-t my-6 border-gray-100" />

      <p className="text-xs uppercase tracking-widest font-semibold mb-4 text-gray-400">
        {d.participanLabel}
      </p>
      <div className="flex flex-wrap gap-3 justify-start">
        {config.participantes.map((id) => (
          <ParticipantBadge key={id} id={id} entidad={d.entidades[id]} pendienteTitle={d.pendienteTitle} />
        ))}
      </div>

      {mostrarCoste && (
        <>
          <div className="border-t my-6 border-gray-100" />

          {texto.coste.referencia ? (
            <p className="text-sm text-gray-600">
              <span className="text-xs uppercase tracking-widest font-semibold mr-2 text-gray-400">
                {d.costeLabel}
              </span>
              {texto.coste.referencia}
            </p>
          ) : (
            <div>
              <div className="flex items-baseline gap-3 justify-start">
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-400">
                  {texto.coste.etiqueta || d.costeLabel}
                </span>
                <span className="font-serif text-3xl font-bold text-gray-900">{texto.coste.monto}</span>
              </div>
              {texto.coste.nota && (
                <p className="text-xs leading-relaxed mt-2 text-gray-400">{texto.coste.nota}</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default function ProjectTimeline() {
  const { t } = useLanguage()
  const d = t.projectTimeline

  return (
    <section id="project-timeline" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-brand-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
            {d.badge}
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            {d.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{d.subtitle}</p>
        </div>

        {/* Participación transversal */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            {d.transversalLabel}
          </span>
          <span className="text-xs text-gray-400">{d.transversalHint}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {d.transversales.map((tv, i) => (
            <div key={i} className="bg-white rounded-2xl border-l-4 border-brand-500 shadow-sm p-5">
              <p className="font-serif text-base font-bold text-gray-900 mb-1.5 leading-snug">{tv.titulo}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{tv.descripcion}</p>
            </div>
          ))}

          <div className="bg-brand-800 rounded-2xl p-5 text-white">
            <p className="text-brand-200 text-xs font-semibold uppercase tracking-widest mb-2">
              {d.totalCosteLabel}
            </p>
            <p className="font-serif text-2xl font-bold mb-1">{d.totalCosteMonto}</p>
            <p className="text-brand-200/80 text-xs leading-relaxed">{d.totalCosteNota}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 mb-16" />

        {/* Timeline */}
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-brand-200" />

          <div>
            {FASES_CONFIG.map((config, i) => {
              const texto = d.fases[i]
              return (
                <div
                  key={config.numero}
                  className={`relative ${FILA_Z[i] || 'z-0'} ${i === 0 ? '' : 'mt-12 md:-mt-32'}`}
                >
                  <div className="relative z-10 flex justify-center mb-4 md:mb-0 md:absolute md:left-1/2 md:top-8 md:-translate-x-1/2">
                    <div className="w-9 h-9 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center ring-4 ring-gray-50">
                      {config.numero}
                    </div>
                  </div>

                  <div className={`md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <PhaseCard config={config} texto={texto} d={d} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed mt-10">{d.footnote}</p>
      </div>
    </section>
  )
}
