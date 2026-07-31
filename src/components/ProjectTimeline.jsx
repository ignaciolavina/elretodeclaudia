import { useState } from 'react'

// Datos de ejemplo — iterar rápido, traducir/pulir al final.

const PAIS_BANDERA = { ES: '🇪🇸', US: '🇺🇸', EU: '🇪🇺', CN: '🇨🇳' }

// Cada fila del timeline se solapa con la siguiente; z-index descendente
// para que una fase nunca tape los badges/popover de la fase anterior.
const FILA_Z = ['z-40', 'z-30', 'z-20', 'z-10']

const ENTIDADES = {
  ceu: {
    nombre: 'CEU San Pablo - METBrain',
    pais: 'ES',
    categoria: 'Centro académico e investigador',
    nombreCompleto: 'Universidad CEU San Pablo - METBrain',
    descripcion:
      'Dirección científica del proyecto y coordinación de investigadores, empresas y colaboradores.',
    fases: '1 · 2 · 3 · 4',
    ambito: 'Madrid, España',
  },
  aitep: {
    nombre: 'AITEP',
    pais: 'ES',
    categoria: 'Entidad promotora',
    nombreCompleto: 'AITEP – El Reto de Claudia',
    descripcion:
      'Entidad promotora y principal financiadora del proyecto. Impulsora del proyecto "El Reto de Claudia".',
    fases: '1 · 2 · 3 · 4',
    ambito: 'España',
  },
  aemps: {
    nombre: 'AEMPS',
    pais: 'ES',
    categoria: 'Autoridad regulatoria',
    nombreCompleto: 'Agencia Española de Medicamentos y Productos Sanitarios (AEMPS)',
    descripcion: 'Asesoramiento y orientación regulatoria de cara a la futura autorización clínica.',
    fases: '1 · 4',
    ambito: 'España',
  },
  ema: {
    nombre: 'EMA',
    pais: 'EU',
    categoria: 'Autoridad regulatoria',
    nombreCompleto: 'Agencia Europea de Medicamentos (EMA)',
    descripcion: 'Asesoramiento y orientación regulatoria de cara a la futura autorización clínica.',
    fases: '1 · 4',
    ambito: 'Unión Europea',
  },
  danielGao: {
    nombre: 'Dr. Daniel Gao, E&E Foundation',
    pais: 'US',
    categoria: 'Investigador principal',
    nombreCompleto: 'Dr. Daniel Gao',
    descripcion:
      'Perteneciente a la Eye & Ear Foundation, de la Universidad de Pittsburgh. Investigador principal encargado del diseño de la terapia.',
    fases: '2 · 3',
    ambito: 'Pittsburgh, Estados Unidos',
  },
  charlesRiver: {
    nombre: 'Charles River',
    pais: 'US',
    categoria: 'Empresa de investigación preclínica (CRO)',
    nombreCompleto: 'Charles River Laboratories',
    descripcion:
      'Organización de investigación por contrato (CRO) especializada en modelos animales y estudios preclínicos.',
    fases: '3',
    ambito: 'Estados Unidos',
  },
  hospitalSantJoanDeDeu: {
    nombre: 'Hospital Sant Joan de Déu Barcelona',
    pais: 'ES',
    categoria: 'Hospital — administración del tratamiento',
    nombreCompleto: 'Hospital Sant Joan de Déu Barcelona',
    descripcion:
      'Centro clínico donde se administrará el tratamiento y se realizará el seguimiento de Claudia.',
    fases: '4',
    ambito: 'Barcelona, España',
  },
  empresaEEUU1: { nombre: 'Empresa en negociación', pais: 'CN', pendiente: true },
  empresaEEUU2: { nombre: 'Empresa en negociación', pais: 'US', pendiente: true },
  empresaEEUU3: { nombre: 'Empresa en negociación', pais: 'US', pendiente: true },
  empresaFabricacion: { nombre: 'Empresa de fabricación clínica · en negociación', pais: 'US', pendiente: true },
}

const TRANSVERSALES = [
  {
    titulo: 'Universidad CEU San Pablo - METBrain',
    descripcion: 'Dirección científica del proyecto y coordinación de investigadores, empresas y colaboradores.',
  },
  {
    titulo: 'AITEP – El Reto de Claudia',
    descripcion: 'Entidad promotora y principal financiadora del proyecto.',
  },
  {
    titulo: 'AEMPS y EMA',
    descripcion: 'Asesoramiento y orientación regulatoria de cara a la futura autorización clínica.',
  },
]

const FASES = [
  {
    numero: 1,
    titulo: 'Fase 1 · Definición del proyecto',
    objetivo:
      'Establecer la estrategia científica, terapéutica, experimental y regulatoria que guiará todo el desarrollo.',
    actividades: [
      'Negociación y activación de las entidades y empresas del proyecto.',
      'Definición de la estrategia terapéutica y experimental.',
      'Coordinación científica, regulatoria y de partners.',
    ],
    participantes: [{ id: 'ceu' }, { id: 'aitep' }, { id: 'aemps' }, { id: 'ema' }],
    coste: { monto: '220.000 €' },
    destacado: true,
  },
  {
    numero: 2,
    titulo: 'Fase 2 · Preclínica in vitro',
    objetivo:
      'Diseñar y seleccionar la estrategia de edición más eficaz y segura, validándola primero en modelos celulares y posteriormente en células de Claudia.',
    actividades: [
      'Diseño de la estrategia de edición génica personalizada.',
      'Síntesis de los compuestos editores.',
      'Cribado y optimización in vitro en modelo celular HEK293C.',
      'Validación ex vivo en fibroblastos primarios de la paciente.',
      'Evaluación de especificidad y seguridad genómica (análisis off-target).',
      'Desarrollo y optimización del sistema de administración mediante nanopartículas lipídicas (LNP).',
    ],
    participantes: [{ id: 'danielGao' }, { id: 'ceu' }, { id: 'aitep' }],
    coste: {
      etiqueta: 'Coste fases 2 y 3',
      monto: '780.000 €',
      nota: 'Cifra conjunta del desarrollo preclínico (fases 2 y 3).',
    },
    ocultarCoste: true,
  },
  {
    numero: 3,
    titulo: 'Fase 3 · Preclínica in vivo',
    objetivo:
      'Comprobar la eficacia, distribución y seguridad del tratamiento en un modelo animal que reproduzca la alteración genética de Claudia.',
    actividades: [
      'Generación y caracterización del modelo murino knock-in humanizado.',
      'Evaluación preclínica in vivo: eficacia, biodistribución y seguridad/toxicidad.',
    ],
    participantes: [
      { id: 'charlesRiver' },
      { id: 'ceu' },
      { id: 'aitep' },
      { id: 'danielGao' },
      { id: 'empresaEEUU1' },
      { id: 'empresaEEUU2' },
      { id: 'empresaEEUU3' },
    ],
    coste: { referencia: 'Incluido en los 780.000 € de la fase 2' },
    ocultarCoste: true,
  },
  {
    numero: 4,
    titulo: 'Fase 4 · Desarrollo clínico',
    objetivo:
      'Transformar el candidato terapéutico en un medicamento que pueda ser autorizado, administrado a Claudia y sometido a seguimiento clínico.',
    actividades: [
      'Desarrollo y fabricación del medicamento de terapia génica para uso clínico.',
      'Autorización regulatoria para administración.',
      'Administración del tratamiento a la paciente.',
      'Seguimiento clínico de seguridad y eficacia.',
    ],
    participantes: [
      { id: 'hospitalSantJoanDeDeu' },
      { id: 'aemps' },
      { id: 'ema' },
      { id: 'ceu' },
      { id: 'aitep' },
      { id: 'empresaFabricacion' },
    ],
    coste: {
      monto: '1,5 – 2,7 M €',
      nota:
        'Fabricación bajo estándares clínicos, estudios regulatorios y de seguridad, documentación, administración hospitalaria y seguimiento de la paciente.',
    },
    ocultarCoste: true,
  },
]

function ParticipantBadge({ id, destacado = false }) {
  const [open, setOpen] = useState(false)
  const p = ENTIDADES[id]
  if (!p) return null

  const bandera = PAIS_BANDERA[p.pais]

  if (p.pendiente) {
    return (
      <span
        title="En fase de negociación — nombre pendiente de publicación."
        className="inline-flex items-center gap-2 rounded-full border border-dashed border-gray-300 px-4 py-2 text-sm font-medium text-gray-400"
      >
        {bandera && <span>{bandera}</span>}
        {p.nombre}
      </span>
    )
  }

  const badgeClasses = destacado
    ? 'bg-brand-600 border-brand-600 text-white'
    : 'bg-white border-gray-200 text-gray-700 hover:border-brand-300'

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${badgeClasses}`}
      >
        {bandera && <span>{bandera}</span>}
        {p.nombre}
      </button>

      <div
        className={`absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 sm:w-80 max-w-[85vw] transition-all duration-200 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-1 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 text-left">
          <span className="text-brand-600 text-xs font-semibold uppercase tracking-widest">
            {p.categoria}
          </span>
          <h4 className="font-serif text-xl font-bold text-gray-900 mt-2 mb-3 leading-snug">
            {p.nombreCompleto}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">{p.descripcion}</p>

          <div className="border-t border-gray-100 mt-4 pt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Fases</p>
              <p className="text-gray-900 text-sm font-medium">{p.fases}</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">Ámbito</p>
              <p className="text-gray-900 text-sm font-medium">{p.ambito}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhaseCard({ fase }) {
  const mostrarCoste = fase.coste && !fase.ocultarCoste

  return (
    <div
      className={`rounded-3xl shadow-sm p-8 sm:p-10 bg-white text-left ${
        fase.destacado ? 'border border-gray-100 border-l-4 border-l-brand-500' : 'border border-gray-100'
      }`}
    >
      <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-gray-900">
        {fase.titulo}
      </h3>

      <p className="text-xs uppercase tracking-widest font-semibold mt-6 mb-2 text-gray-400">
        Objetivo
      </p>
      <p className="text-base leading-relaxed text-gray-600">{fase.objetivo}</p>

      <p className="text-xs uppercase tracking-widest font-semibold mt-6 mb-4 text-gray-400">
        Actividades
      </p>
      <div className="space-y-1.5">
        {fase.actividades.map((d, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-gray-400 flex-shrink-0">-</span>
            <p className="text-base leading-relaxed text-gray-600">{d}</p>
          </div>
        ))}
      </div>

      <div className="border-t my-6 border-gray-100" />

      <p className="text-xs uppercase tracking-widest font-semibold mb-4 text-gray-400">
        Participan en esta fase
      </p>
      <div className="flex flex-wrap gap-3 justify-start">
        {fase.participantes.map(({ id, destacado }) => (
          <ParticipantBadge key={id} id={id} destacado={destacado} />
        ))}
      </div>

      {mostrarCoste && (
        <>
          <div className="border-t my-6 border-gray-100" />

          {fase.coste.referencia ? (
            <p className="text-sm text-gray-600">
              <span className="text-xs uppercase tracking-widest font-semibold mr-2 text-gray-400">Coste</span>
              {fase.coste.referencia}
            </p>
          ) : (
            <div>
              <div className="flex items-baseline gap-3 justify-start">
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-400">
                  {fase.coste.etiqueta || 'Coste'}
                </span>
                <span className="font-serif text-3xl font-bold text-gray-900">{fase.coste.monto}</span>
              </div>
              {fase.coste.nota && (
                <p className="text-xs leading-relaxed mt-2 text-gray-400">{fase.coste.nota}</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default function ProjectTimeline() {
  return (
    <section id="project-timeline" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-brand-600 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
            Fases del proyecto
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            El camino hasta el tratamiento de Claudia
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Terapia génica personalizada basada en edición genética. Cuatro fases encadenadas, con
            investigadores, hospitales, organismos reguladores y empresas especializadas de España y
            Estados Unidos.
          </p>
        </div>

        {/* Participación transversal */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Participación transversal · presentes en todas las fases
          </span>
          <span className="text-xs text-gray-400">Pasa el ratón por cualquier entidad para ver su ficha</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {TRANSVERSALES.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl border-l-4 border-brand-500 shadow-sm p-5">
              <p className="font-serif text-base font-bold text-gray-900 mb-1.5 leading-snug">{t.titulo}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{t.descripcion}</p>
            </div>
          ))}

          <div className="bg-brand-800 rounded-2xl p-5 text-white">
            <p className="text-brand-200 text-xs font-semibold uppercase tracking-widest mb-2">
              Coste total estimado
            </p>
            <p className="font-serif text-2xl font-bold mb-1">3 M €</p>
            <p className="text-brand-200/80 text-xs leading-relaxed">Coste estimado del proyecto.</p>
          </div>
        </div>

        <div className="border-t border-gray-200 mb-16" />

        {/* Timeline */}
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-px bg-brand-200 md:-translate-x-1/2" />

          <div>
            {FASES.map((fase, i) => (
              <div
                key={fase.numero}
                className={`relative ${FILA_Z[i] || 'z-0'} ${i === 0 ? '' : 'mt-10 md:-mt-32'}`}
              >
                <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center ring-4 ring-gray-50">
                  {fase.numero}
                </div>

                <div className={`pl-16 md:pl-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <PhaseCard fase={fase} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed mt-10">
          Las entidades con borde discontinuo se encuentran en fase de negociación; sus nombres no se publican
          todavía.
        </p>
      </div>
    </section>
  )
}
