// Datos de ejemplo — iterar rápido, traducir/pulir al final.

const EQUIPO = [
  {
    nombre: 'Dra. Carmen Fernández Martos',
    iniciales: 'CF',
    badge: { bandera: '🇪🇸', texto: 'CEU San Pablo' },
    bio: 'Doctora en Bioquímica y Biología Molecular y líder del laboratorio MetBrain. Más de 16 años de experiencia en neurodegeneración y enfermedades metabólicas.',
    links: [{ label: 'Ver CV extendido', url: 'https://orcid.org/0000-0002-6387-4456' }],
  },
  {
    nombre: 'Dra. María del Carmen Conde Rubio',
    iniciales: 'MC',
    badge: { bandera: '🇪🇸', texto: 'CEU San Pablo' },
    bio: 'Doctora por la Universidad de Lausana, especializada en señalización celular, apoptosis y edición genética CRISPR-Cas9. Investigadora del grupo MetBrain.',
    links: [{ label: 'Ver CV extendido', url: 'https://orcid.org/0000-0002-0469-0227' }],
  },
  {
    nombre: 'Dr. Daniel Gao',
    iniciales: 'DG',
    badge: { bandera: '🇺🇸', texto: 'University of Pittsburgh' },
    bio: 'Profesor adjunto especializado en edición genética de precisión. Formado en el laboratorio de David Liu (Broad Institute/Harvard), trabaja en terapias para trastornos peroxisomales como el síndrome de Zellweger.',
    links: [{ label: 'Ver CV extendido', url: 'https://orcid.org/0000-0003-2917-2060' }],
  },
]

const ASESORES = [
  {
    nombre: 'Coral Barbas Arribas',
    iniciales: 'CB',
    badge: { bandera: '🇪🇸', texto: 'Fundación CEU' },
    bio: 'Catedrática de Química Analítica y directora del centro de metabolómica CEMBIO, en la Universidad CEU San Pablo.',
    links: [
      { label: 'Perfil de investigación', url: 'https://investigacionusp.ceu.es/es/ipublic/researcher/271901' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/coral-barbas/' },
    ],
  },
  {
    nombre: 'Carmen González Martín',
    iniciales: 'CG',
    badge: { bandera: '🇪🇸', texto: 'CEU San Pablo' },
    bio: 'Catedrática de Toxicología y presidenta del Comité Ético de la Universidad CEU San Pablo.',
    links: [
      { label: 'Perfil de investigación', url: 'https://investigacionusp.ceu.es/es/ipublic/researcher/272125' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/carmen-gonzalez-martin-273ba232' },
    ],
  },
  {
    nombre: 'Luis Fernando Alguacil',
    iniciales: 'LA',
    badge: { bandera: '🇪🇸', texto: 'CEU San Pablo' },
    bio: 'Catedrático de Farmacología y director del Instituto de Investigación de las Adicciones, en la Universidad CEU San Pablo.',
    links: [
      { label: 'Perfil de investigación', url: 'https://investigacionusp.ceu.es/es/ipublic/researcher/271861' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/luis-fernando-alguacil-1b505a1a' },
    ],
  },
]

const PROMOTOR = [
  {
    nombre: 'Elena Bermejo Rubio',
    iniciales: 'EB',
    badge: { bandera: '🇪🇸', texto: 'Directora de AITEP' },
    bio: 'Madre de Claudia y cofundadora de AITEP junto a Ignacio. Redujo su actividad profesional para dedicarse a su cuidado y lidera la difusión del proyecto y la búsqueda de financiación.',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/elena-bermejo-rubio-212a45a0/' }],
  },
  {
    nombre: 'Ignacio Laviña Faustmann',
    iniciales: 'IL',
    badge: { bandera: '🇪🇸', texto: 'Secretario de AITEP' },
    bio: 'Padre de Claudia y cofundador de AITEP junto a Elena. Impulsa la coordinación del proyecto y la búsqueda de apoyos para financiar la investigación.',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/ignacio-lavina/' }],
  },
  {
    nombre: 'Fernando Laviña Richi',
    iniciales: 'FL',
    badge: { bandera: '🇪🇸', texto: 'Director financiero de AITEP' },
    bio: 'Director financiero de AITEP, encargado de la gestión económica y la búsqueda de financiación para el proyecto. Es Digital Trade Manager en IMEX-Impulso Exterior, especializado en comercio internacional y digitalización empresarial.',
    links: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/fernandolrichi/' }],
  },
]

function PersonCard({ persona }) {
  if (persona.pendiente) {
    return (
      <div className="bg-white rounded-3xl border border-dashed border-gray-300 shadow-sm p-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-2xl font-bold mb-4 flex-shrink-0">
            ?
          </div>
          <h3 className="font-serif text-xl font-bold text-gray-400">Pendiente de aprobación</h3>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
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

      {persona.bio && <p className="text-sm text-gray-600 leading-relaxed text-center">{persona.bio}</p>}

      {persona.links && persona.links.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-auto pt-4">
          {persona.links.map((link, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-300">·</span>}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 text-sm font-semibold hover:text-brand-700"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function PersonGrid({ personas }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {personas.map((persona, i) => (
        <PersonCard key={i} persona={persona} />
      ))}
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

        <PersonGrid personas={EQUIPO} />

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

          <PersonGrid personas={ASESORES} />
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

          <PersonGrid personas={PROMOTOR} />
        </div>
      </div>
    </section>
  )
}
