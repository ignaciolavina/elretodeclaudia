import { useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

// Muestra el cartel completo (object-contain) sin recortarlo. El hueco que deja
// cuando la proporción no coincide con la caja se rellena con la misma imagen
// difuminada, así la tarjeta no queda con bandas vacías.
// Con `images` de más de un elemento (carrusel de Instagram) cada diapositiva
// es ese mismo render y se desliza con scroll-snap nativo (swipe táctil y
// trackpad), más flechas y puntos. La tarjeta puede ser un <Link>, así que los
// botones frenan el clic para no navegar. Con 0 o 1 imagen, render de siempre.

const Slide = ({ src, alt, className }) => (
  <div className={['relative w-full h-full overflow-hidden bg-brand-50', className].filter(Boolean).join(' ')}>
    <img src={src} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60" />
    <img src={src} alt={alt} loading="lazy" decoding="async" className="relative w-full h-full object-contain" />
  </div>
)

const Chevron = ({ dir }) => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dir === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
  </svg>
)

// Evita que el clic llegue al <Link> de la tarjeta.
const swallow = (e) => {
  e.preventDefault()
  e.stopPropagation()
}

const arrowClass = 'absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-brand-700 shadow-md flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500'

function Carousel({ images, alt }) {
  const { t } = useLanguage()
  const d = t.eventos
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)
  const last = images.length - 1

  // El índice sale de la posición de scroll, así swipe, trackpad y botones
  // convergen en el mismo sitio y no hay estado propio que se desincronice.
  const syncIndex = () => {
    const el = trackRef.current
    if (!el || !el.clientWidth) return
    setIndex(Math.min(last, Math.max(0, Math.round(el.scrollLeft / el.clientWidth))))
  }

  const goTo = (e, i) => {
    swallow(e)
    const el = trackRef.current
    if (!el) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({ left: Math.min(last, Math.max(0, i)) * el.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <div className="relative w-full h-full" role="group" aria-roledescription="carousel" aria-label={alt}>
      <div
        ref={trackRef}
        onScroll={syncIndex}
        className="flex w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((src, i) => (
          <Slide key={src} src={src} alt={`${alt} (${i + 1}/${images.length})`} className="shrink-0 snap-center" />
        ))}
      </div>

      {index > 0 && (
        <button type="button" onClick={(e) => goTo(e, index - 1)} aria-label={d.imagePrev} className={`${arrowClass} left-2`}>
          <Chevron dir="left" />
        </button>
      )}
      {index < last && (
        <button type="button" onClick={(e) => goTo(e, index + 1)} aria-label={d.imageNext} className={`${arrowClass} right-2`}>
          <Chevron dir="right" />
        </button>
      )}

      <div onClick={swallow} className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-0.5 rounded-full bg-white/70 px-1.5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={(e) => goTo(e, i)}
            aria-label={`${d.imageGoTo} ${i + 1}/${images.length}`}
            aria-current={i === index ? 'true' : undefined}
            className="p-1.5 group focus:outline-none"
          >
            <span className={`block h-2 rounded-full transition-all group-focus-visible:ring-2 group-focus-visible:ring-brand-500 ${i === index ? 'w-5 bg-brand-600' : 'w-2 bg-brand-300 group-hover:bg-brand-400'}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

const EventImage = ({ src, alt, images }) =>
  images && images.length > 1
    ? <Carousel images={images} alt={alt} />
    : <Slide src={(images && images[0]) || src} alt={alt} />

export default EventImage
