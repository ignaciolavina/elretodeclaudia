# Logos de medios — sección "En los medios"

Carpeta para los logos de los medios que aparecen en la página de Prensa.

## Formato del archivo

La card pinta el logo con `h-10 max-w-[150px] object-contain`, así que:

- **Formato:** `.webp` (preferido, igual que `events/`) o `.png`. También sirve `.svg`.
  Evitá `.jpg` — no tiene transparencia.
- **Fondo transparente** (obligatorio). Las cards son blancas; un fondo blanco o de
  color se vería como un recuadro.
- **Dimensiones:** se renderiza a **40px de alto** y **máx. 150px de ancho**, con
  `object-contain` (mantiene la proporción, nunca deforma). Exportá a **~2x** para
  pantallas retina: **80px de alto**, hasta **300px de ancho**. No más grande.
- **Logos apaisados** (ej. "CADENA SER"): al limitarse el ancho a 150px efectivos,
  pueden verse pequeños. Recortá el espacio en blanco lateral antes de exportar.
- **Peso:** un logo bien exportado pesa pocos KB. Si pasás de ~30-40KB, recomprimí.
- **Nombre:** kebab-case, sin acentos ni espacios: `marca.webp`, `cadena-ser.webp`,
  `el-confidencial.png`.

## Cómo enchufarlo

En `src/data/prensa.json`, en el medio correspondiente, agregá la clave `logoImage`
apuntando a la ruta pública (sin `public/`):

```json
{
  "outlet": "MARCA",
  "logoImage": "/images/media/marca.webp",
  "type": "press",
  "quote": "…",
  "url": "https://…"
}
```

## Notas

- Si un medio tiene `logoImage`, se muestra la imagen. Si no, se usa el logo de
  texto (`logo` + `logoColor`) como respaldo. Las dos claves pueden convivir.
- La ruta SIEMPRE empieza en `/images/media/...` (Vite sirve `public/` desde la raíz).
