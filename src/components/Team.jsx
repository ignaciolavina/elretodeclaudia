// Datos de ejemplo — iterar rápido, traducir/pulir al final.

const EQUIPO = [
  {
    nombre: 'Dra. Carmen Fernández Martos',
    iniciales: 'CF',
    badge: { bandera: '🇪🇸', texto: 'CEU San Pablo' },
    bio: 'Doctora en Bioquímica y Biología Molecular y líder del laboratorio MetBrain. Más de 16 años de experiencia en neurodegeneración y enfermedades metabólicas.',
    cvUrl: 'https://orcid.org/0000-0002-6387-4456',
  },
  {
    nombre: 'Dra. María del Carmen Conde Rubio',
    iniciales: 'MC',
    badge: { bandera: '🇪🇸', texto: 'CEU San Pablo' },
    bio: 'Doctora por la Universidad de Lausana, especializada en señalización celular, apoptosis y edición genética CRISPR-Cas9. Investigadora del grupo MetBrain.',
    cvUrl: 'https://orcid.org/0000-0002-0469-0227',
  },
  {
    nombre: 'Dr. Daniel Gao',
    iniciales: 'DG',
    badge: { bandera: '🇺🇸', texto: 'University of Pittsburgh' },
    bio: 'Profesor adjunto especializado en edición genética de precisión. Formado en el laboratorio de David Liu (Broad Institute/Harvard), trabaja en terapias para trastornos peroxisomales como el síndrome de Zellweger.',
    cvUrl: 'https://orcid.org/0000-0003-2917-2060',
  },
]

const ASESORES = [
  {
    nombre: 'Coral Barbas',
    iniciales: 'CB',
    afiliacion: 'Fundación CEU',
    bio: 'Catedrática de Química Analítica y directora del centro de metabolómica CEMBIO, en la Universidad CEU San Pablo.',
  },
  { pendiente: true },
  { pendiente: true },
]

const PROMOTOR = [
  {
    nombre: 'Elena Bermejo Rubio',
    iniciales: 'EB',
    afiliacion: 'Directora de AITEP',
    bio: 'Madre de Claudia y cofundadora de AITEP. Impulsa la difusión del proyecto y la coordinación de los equipos de investigación implicados.',
  },
  {
    nombre: 'Ignacio Laviña',
    iniciales: 'IL',
    afiliacion: 'Secretario de AITEP',
  },
  {
    nombre: 'Fernando Laviña',
    iniciales: 'FL',
    afiliacion: 'Advisor AITEP',
  },
]

function TeamCard({ persona }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
      <div className="flex flex-col items-center text-center mb-5">
        <div className="w-24 h-24 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-serif text-2xl font-bold mb-4 flex-shrink-0">
          {persona.iniciales}
        </div>
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{persona.nombre}</h3>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700">
          <span>{persona.badge.bandera}</span>
          {persona.badge.texto}
        </span>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed text-center">{persona.bio}</p>

      {persona.cvUrl && (
        <div className="text-center">
          <a
            href={persona.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 text-brand-600 text-sm font-semibold hover:text-brand-700"
          >
            Ver CV extendido
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </div>
  )
}

function AdvisorCard({ persona }) {
  if (persona.pendiente) {
    return (
      <div className="bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm p-5 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-lg font-bold flex-shrink-0">
          ?
        </div>
        <p className="font-serif text-base font-bold text-gray-400">Pendiente de aprobación</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4">
      <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-serif text-lg font-bold flex-shrink-0">
        {persona.iniciales}
      </div>
      <div>
        <p className="font-serif text-base font-bold text-gray-900">{persona.nombre}</p>
        <p className="text-gray-500 text-sm mb-1">{persona.afiliacion}</p>
        {persona.bio && <p className="text-gray-500 text-xs leading-relaxed">{persona.bio}</p>}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">Equipo</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
            Liderazgo científico
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            El proyecto está liderado por un equipo altamente capacitado, que coordinará un grupo de
            organismos a nivel internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EQUIPO.map((persona, i) => (
            <TeamCard key={i} persona={persona} />
          ))}
        </div>

        {/* Equipo asesor científico */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
              Comité asesor
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-tight">
              Equipo asesor científico
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {ASESORES.map((persona, i) => (
              <AdvisorCard key={i} persona={persona} />
            ))}
          </div>
        </div>

        {/* Equipo promotor */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
              AITEP
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-tight">
              Equipo promotor
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {PROMOTOR.map((persona, i) => (
              <AdvisorCard key={i} persona={persona} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
