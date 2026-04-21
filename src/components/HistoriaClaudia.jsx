import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TIMELINE = [
  {
    year: '2023',
    label: 'Llegada de Claudia',
    text: 'Claudia nace llena de vida. Sus primeros meses transcurren con la normalidad que cualquier familia espera.',
    color: 'bg-brand-400',
  },
  {
    year: '2023',
    label: 'Primeras señales',
    text: 'Comenzamos a notar un desarrollo más lento de lo esperado: dificultad para sostener la cabeza, hipotonía generalizada, una debilidad que no correspondía con su edad.',
    color: 'bg-brand-500',
  },
  {
    year: '2024',
    label: 'El diagnóstico',
    text: 'Tras meses de incertidumbre y múltiples pruebas, llegó el diagnóstico: deficiencia de la proteína D-bifuncional. Un nombre desconocido para nosotros, una realidad que cambió todo.',
    color: 'bg-brand-600',
  },
  {
    year: '2025',
    label: 'Seguimiento multidisciplinar',
    text: 'Claudia empieza a recibir atención de varios especialistas: neurología, logopedia, fisioterapia, oftalmología... Un equipo que trabaja cada día para darle la mejor calidad de vida posible.',
    color: 'bg-brand-700',
  },
  {
    year: '2026',
    label: 'Nace la asociación',
    text: 'Decidimos que el silencio no era una opción. Creamos El Reto de Claudia para que otras familias no se sientan solas y para acercar la DBP a quienes pueden marcar la diferencia.',
    color: 'bg-warm-400',
  },
]

function TimelineItem({ item, index }) {
  const { ref, isVisible } = useScrollAnimation()
  const isRight = index % 2 !== 0

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
    >
      {/* Línea + círculo */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-1 ${item.color} ring-4 ring-white shadow-md`} aria-hidden="true" />
        {index < TIMELINE.length - 1 && (
          <div className="w-0.5 flex-1 bg-brand-200 mt-2" aria-hidden="true" />
        )}
      </div>
      {/* Contenido */}
      <div className="pb-8">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-500 mb-1">
          {item.year}
        </span>
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
          {item.label}
        </h3>
        <p className="text-gray-600 leading-relaxed">{item.text}</p>
      </div>
    </div>
  )
}

export default function HistoriaClaudia() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: photoRef, isVisible: photoVisible } = useScrollAnimation()

  return (
    <section
      id="historia"
      className="py-24 bg-brand-50"
      aria-labelledby="historia-title"
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
            Quiénes somos
          </span>
          <h2 id="historia-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5 leading-tight">
            La historia de Claudia
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Una historia de amor, de incertidumbre, de lucha y de esperanza.
            Una historia que todavía se está escribiendo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Texto narrativo + foto placeholder */}
          <div>
            {/* Foto placeholder */}
            <div
              ref={photoRef}
              className={`transition-all duration-700 ${
                photoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <img
                src="/images/claudia2.jpeg"
                alt="Claudia"
                className="w-full rounded-3xl object-cover aspect-[4/3] mb-8 shadow-lg" style={{ objectPosition: '50% 25%' }}
              />
            </div>

            {/* Texto narrativo */}
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Claudia llegó a nuestras vidas en 2023 llena de luz. Como cualquier
                familia, teníamos los sueños y los miedos propios de los primeros meses,
                pero también teníamos la certeza de que estaríamos ahí para lo que viniera.
              </p>
              <p>
                Pronto comenzamos a notar señales que no encajaban. Una hipotonía que no
                mejoraba, dificultad para escuchar, un desarrollo que se alejaba poco
                a poco de los hitos esperados. Los médicos miraban, investigaban,
                descartaban. Y nosotros esperábamos, sin saber bien qué.
              </p>
              <p>
                El diagnóstico llegó como un mapa en un terreno desconocido: por un lado
                puso nombre a lo que veíamos; por otro, nos abrió ante una realidad para
                la que nadie estaba preparado. La deficiencia de la proteína D-bifuncional.
                Casi nadie había oído hablar de ella. Casi nadie sabía qué hacer con ella.
              </p>
              <p className="font-medium text-gray-900">
                Pero Claudia sigue aquí, luchando cada día. Y nosotros también.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-8">
              El camino hasta aquí
            </h3>
            <div>
              {TIMELINE.map((item, i) => (
                <TimelineItem key={item.label} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
