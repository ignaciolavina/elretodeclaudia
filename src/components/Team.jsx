import { useLanguage } from '../context/LanguageContext'

const PAIS_BANDERA = { ES: '🇪🇸', US: '🇺🇸' }

// Config estructural (no traducible): foto, iniciales, país y enlaces de cada persona.
// El texto (nombre, badge, bio) vive en i18n/translations.js bajo team.personas.
const PERSONAS_CONFIG = {
  carmenFernandezMartos: {
    iniciales: 'CF',
    foto: '/images/team/carmen-fernandez-martos.png',
    pais: 'ES',
    links: [{ tipo: 'cv', url: 'https://orcid.org/0000-0002-6387-4456' }],
  },
  mariaCarmenCondeRubio: {
    iniciales: 'MC',
    foto: '/images/team/maria-carmen-conde.webp',
    pais: 'ES',
    links: [{ tipo: 'cv', url: 'https://orcid.org/0000-0002-0469-0227' }],
  },
  danielGao: {
    iniciales: 'DG',
    foto: '/images/team/daniel-gao.png',
    pais: 'US',
    links: [{ tipo: 'cv', url: 'https://orcid.org/0000-0003-2917-2060' }],
  },
  coralBarbas: {
    iniciales: 'CB',
    foto: '/images/team/coral.png',
    pais: 'ES',
    links: [
      { tipo: 'perfil', url: 'https://investigacionusp.ceu.es/es/ipublic/researcher/271901' },
      { tipo: 'linkedin', url: 'https://www.linkedin.com/in/coral-barbas/' },
    ],
  },
  carmenGonzalezMartin: {
    iniciales: 'CG',
    foto: '/images/team/carmen.png',
    pais: 'ES',
    links: [
      { tipo: 'perfil', url: 'https://investigacionusp.ceu.es/es/ipublic/researcher/272125' },
      { tipo: 'linkedin', url: 'https://www.linkedin.com/in/carmen-gonzalez-martin-273ba232' },
    ],
  },
  luisFernandoAlguacil: {
    iniciales: 'LA',
    foto: '/images/team/luis.png',
    pais: 'ES',
    links: [
      { tipo: 'perfil', url: 'https://investigacionusp.ceu.es/es/ipublic/researcher/271861' },
      { tipo: 'linkedin', url: 'https://www.linkedin.com/in/luis-fernando-alguacil-1b505a1a' },
    ],
  },
  elenaBermejoRubio: {
    iniciales: 'EB',
    foto: '/images/team/elena.png',
    pais: 'ES',
    links: [{ tipo: 'linkedin', url: 'https://www.linkedin.com/in/elena-bermejo-rubio-212a45a0/' }],
  },
  ignacioLavina: {
    iniciales: 'IL',
    foto: '/images/team/ignacio.png',
    pais: 'ES',
    links: [{ tipo: 'linkedin', url: 'https://www.linkedin.com/in/ignacio-lavina/' }],
  },
  fernandoLavina: {
    iniciales: 'FL',
    foto: '/images/team/fernando.png',
    pais: 'ES',
    links: [{ tipo: 'linkedin', url: 'https://www.linkedin.com/in/fernandolrichi/' }],
  },
}

const EQUIPO_IDS = ['carmenFernandezMartos', 'mariaCarmenCondeRubio', 'danielGao']
const ASESORES_IDS = ['coralBarbas', 'carmenGonzalezMartin', 'luisFernandoAlguacil']
const PROMOTOR_IDS = ['elenaBermejoRubio', 'ignacioLavina', 'fernandoLavina']

function PersonCard({ id, d }) {
  const config = PERSONAS_CONFIG[id]
  const texto = d.personas[id]
  if (!config || !texto) return null

  const bandera = PAIS_BANDERA[config.pais]

  return (
    <div className="h-full flex flex-col bg-white rounded-3xl border-l-4 border-brand-500 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8">
      <div className="flex flex-col items-center text-center mb-5">
        <div className="w-24 h-24 rounded-full bg-brand-100 overflow-hidden flex items-center justify-center text-brand-700 font-serif text-2xl font-bold mb-4 flex-shrink-0">
          {config.foto ? (
            <img src={config.foto} alt={texto.nombre} className="w-full h-full object-cover" />
          ) : (
            config.iniciales
          )}
        </div>
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{texto.nombre}</h3>
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700">
          <span>{bandera}</span>
          {texto.badgeTexto}
        </span>
      </div>

      {texto.bio && <p className="text-sm text-gray-600 leading-relaxed text-center">{texto.bio}</p>}

      {config.links && config.links.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-auto pt-4">
          {config.links.map((link, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-300">·</span>}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 text-sm font-semibold hover:text-brand-700"
              >
                {d.linkLabels[link.tipo]}
              </a>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function PersonGrid({ ids, d }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ids.map((id) => (
        <PersonCard key={id} id={id} d={d} />
      ))}
    </div>
  )
}

export default function Team() {
  const { t } = useLanguage()
  const d = t.team

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
            {d.liderazgo.label}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4 leading-tight">
            {d.liderazgo.title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{d.liderazgo.subtitle}</p>
        </div>

        <PersonGrid ids={EQUIPO_IDS} d={d} />

        {/* Equipo asesor científico */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
              {d.comiteAsesor.label}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-tight">
              {d.comiteAsesor.title}
            </h3>
          </div>

          <PersonGrid ids={ASESORES_IDS} d={d} />
        </div>

        {/* Equipo promotor */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
              {d.equipoPromotor.label}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-tight">
              {d.equipoPromotor.title}
            </h3>
          </div>

          <PersonGrid ids={PROMOTOR_IDS} d={d} />
        </div>
      </div>
    </section>
  )
}
