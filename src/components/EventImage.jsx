// Muestra el cartel completo (object-contain) sin recortarlo. El hueco que deja
// cuando la proporción no coincide con la caja se rellena con la misma imagen
// difuminada, así la tarjeta no queda con bandas vacías.
const EventImage = ({ src, alt }) => (
  <div className="relative w-full h-full overflow-hidden bg-brand-50">
    <img src={src} alt="" aria-hidden="true" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60" />
    <img src={src} alt={alt} loading="lazy" decoding="async" className="relative w-full h-full object-contain" />
  </div>
)

export default EventImage
