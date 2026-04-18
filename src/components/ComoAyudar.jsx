import { useScrollAnimation } from '../hooks/useScrollAnimation'

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const CARDS = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: 'Ciencia',
    title: '¿Eres investigador o científico?',
    text: 'Tu conocimiento puede marcar la diferencia. Si trabajas en el campo de las enfermedades metabólicas, la neurogenética, los peroxisomas o áreas relacionadas, queremos conocerte. Juntos podemos acelerar el camino hacia una solución para Claudia y para todas las personas afectadas por la DBP.',
    cta: 'Contacta con nosotros',
    ctaHref: '#contacto',
    accent: 'brand',
    badgeColor: 'bg-brand-100 text-brand-700',
    iconBg: 'bg-brand-100 text-brand-600',
    border: 'border-brand-200',
    ctaStyle: 'bg-brand-700 hover:bg-brand-800 text-white',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    badge: 'Comunidad',
    title: '¿Eres una familia afectada?',
    text: 'No estáis solos. Si tu hijo, familiar o tú mismo habéis recibido un diagnóstico de DBP u otra enfermedad peroxisomal, queremos estar a vuestro lado. Compartir experiencias, apoyarnos mutuamente y construir comunidad también es parte fundamental del reto.',
    cta: 'Únete a la comunidad',
    ctaHref: '#contacto',
    accent: 'warm',
    badgeColor: 'bg-warm-100 text-warm-600',
    iconBg: 'bg-warm-100 text-warm-500',
    border: 'border-warm-200',
    ctaStyle: 'bg-warm-400 hover:bg-warm-500 text-white',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    badge: 'Difusión',
    title: '¿Quieres difundir nuestra causa?',
    text: 'La visibilidad es poder. Cuantas más personas conozcan la DBP, más posibilidades tenemos de llegar a quienes pueden ayudar. Comparte nuestra historia en redes sociales, entre tus contactos, en tu consulta o en tu comunidad. Cada voz importa.',
    cta: 'Comparte nuestra historia',
    ctaHref: '#contacto',
    accent: 'indigo',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    iconBg: 'bg-indigo-100 text-indigo-600',
    border: 'border-indigo-200',
    ctaStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  },
]

function HelpCard({ card, index }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-3xl p-8 border ${card.border} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
    >
      <div className="mb-6">
        <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${card.badgeColor} mb-4`}>
          {card.badge}
        </span>
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${card.iconBg} mb-5`}>
          {card.icon}
        </div>
        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
          {card.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {card.text}
        </p>
      </div>
      <div className="mt-auto pt-4">
        <a
          href={card.ctaHref}
          onClick={(e) => { e.preventDefault(); scrollTo(card.ctaHref) }}
          className={`inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${card.ctaStyle}`}
        >
          {card.cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function ComoAyudar() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section
      id="ayudar"
      className="py-24 bg-white"
      aria-labelledby="ayudar-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-brand-600 text-sm font-semibold uppercase tracking-widest">
            Únete
          </span>
          <h2 id="ayudar-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
            ¿Cómo puedes ayudar?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Cada persona que se suma a este reto lo hace desde un lugar diferente.
            Encontramos un hueco para todos.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <HelpCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
