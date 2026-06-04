# El Reto de Claudia

Sitio web de la iniciativa **El Reto de Claudia** — una campaña de concienciación y recaudación de fondos para la investigación de la distrofia muscular de Duchenne (DMD).

Dominio: [elretodeclaudia.org](https://elretodeclaudia.org)

---

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** — paleta `brand-*` (azul/morado) + `warm-*` (naranja)
- **React Router v7** — SPA con rutas `/`, `/donar`, `/privacidad`, `/prensa`
- **EmailJS** — formulario de contacto sin backend
- **Google Analytics** — tracking via `gtag` (ID: `G-06X52MG7GN`)
- Fuentes: **Lora** (títulos) + **Inter** (cuerpo), cargadas desde Google Fonts

---

## Estructura del proyecto

```
src/
├── App.jsx                  # Router principal + Analytics
├── main.jsx                 # Entry point
├── index.css                # Estilos globales + fuentes
├── components/
│   ├── Navbar.jsx           # Barra de navegación con selector de idioma
│   ├── Hero.jsx             # Sección principal con CTA
│   ├── QuEsDBP.jsx          # Qué es la distrofia muscular de Duchenne
│   ├── HistoriaClaudia.jsx  # Historia de Claudia
│   ├── ComoAyudar.jsx       # Cómo colaborar
│   ├── Contacto.jsx         # Formulario de contacto (EmailJS)
│   └── Footer.jsx           # Pie de página
├── pages/
│   ├── Donar.jsx            # Página de donación con calculadora fiscal
│   ├── Privacidad.jsx       # Política de privacidad
│   └── Prensa.jsx           # Sala de prensa — stats, medios, objetivos
├── context/
│   └── LanguageContext.jsx  # Proveedor de idioma (ES / EN)
├── i18n/
│   └── translations.js      # Textos en español e inglés
├── hooks/
│   └── useScrollAnimation.js # Hook para animaciones al hacer scroll
└── config/
    └── emailjs.js           # Configuración de EmailJS
```

---

## Requisitos previos

- **Node.js** v18 o superior — [descargar](https://nodejs.org)
- **npm** v9 o superior (incluido con Node.js)

Verificar versiones:

```bash
node -v
npm -v
```

---

## Instalación y arranque local

```bash
# 1. Clonar el repositorio
git clone git@github.com:ignaciolavina/elretodeclaudia.git
cd elretodeclaudia

# 2. Instalar dependencias
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
```

El sitio estará disponible en **http://localhost:5173**

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR en `localhost:5173` |
| `npm run build` | Genera el build de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción en local |

---

## Internacionalización (i18n)

El sitio soporta **español** e **inglés**. Los textos viven en `src/i18n/translations.js`. El idioma activo se gestiona mediante `LanguageContext` y el selector en la `Navbar`.

Para añadir o editar textos, modificar el objeto de traducciones en ese archivo manteniendo las dos claves (`es` / `en`) sincronizadas.

---

## Formulario de contacto

Usa **EmailJS**. La configuración (service ID, template ID, public key) está en `src/config/emailjs.js`. Para que funcione en local necesitás tener credenciales propias de EmailJS o las del proyecto.

---

## Despliegue

El sitio está desplegado en **GitHub Pages** con dominio personalizado (`elretodeclaudia.org` via `CNAME`).

Para generar y previsualizar el build de producción:

```bash
npm run build
npm run preview
```

La carpeta `/dist` es el artefacto de despliegue.

---

## Página de prensa (`/prensa`)

El archivo es `src/pages/Prensa.jsx`. Todo el contenido editable está en los bloques de datos al principio del archivo, antes de cualquier componente.

### Agregar una aparición en medios

Abrí `src/pages/Prensa.jsx` y localizá el array `MEDIA`. Copiá cualquier bloque existente y pegalo al final del array, rellenando los campos:

```js
{
  outlet: 'Nombre del medio',        // Ej: 'El País'
  type: 'Prensa digital',            // 'Radio' | 'Prensa digital' | 'TV'
  logo: 'PAIS',                      // Texto corto que aparece como logo
  logoColor: '#000000',              // Color del logo en hex
  url: 'https://elpais.com/...',     // URL de la noticia — null si no hay enlace
  quote: 'Título o extracto de la noticia tal como aparece en el medio.',
  typeIcon: (...),                   // Copiar el typeIcon de otro ítem del mismo tipo
},
```

Si `url` tiene valor, la card entera se vuelve un enlace que abre en pestaña nueva. Si es `null`, la card no es clickeable.

### Editar el bloque "Próximamente"

Localizá el objeto `UPCOMING` justo encima del array `MEDIA`:

```js
const UPCOMING = {
  show: true,              // false para ocultar el bloque sin borrar el contenido
  label: 'Próximamente',   // Etiqueta del badge
  title: 'Las Tardes de Cristian Gálvez',
  date: 'Jueves 4 de junio',
  cta: '¡No te lo pierdas!',
}
```

Cambiá `show: false` para ocultarlo cuando no haya nada próximo. Cuando llegue un nuevo evento, actualizá `title`, `date` y `cta`, y volvé a poner `show: true`.

### Actualizar las métricas de impacto

Localizá el array `STATS` y editá los valores `value` de cada ítem (ej: `'1,6M'` → `'2,1M'`). También están los mismos números en la card del hero (columna derecha) — esos se toman del mismo array, no hace falta duplicar.

### Actualizar los stats de Instagram

Localizá el objeto `INSTAGRAM` al principio de `src/pages/Prensa.jsx`:

```js
const INSTAGRAM = {
  handle: '@elretodeclaudia',
  url: 'https://www.instagram.com/elretodeclaudia',
  views: '1,6M',       // ← actualizar aquí
  followers: '4.874',  // ← actualizar aquí
}
```

**¿Por qué no es automático?** Instagram deprecó su API pública en 2024. La Instagram Graph API actual requiere una app aprobada por Meta y una cuenta Business — no es viable para un sitio estático sin backend. La actualización es manual.

---

## Ramas principales

| Rama | Descripción |
|---|---|
| `main` | Producción — lo que está publicado en elretodeclaudia.org |
| `feature/*` | Ramas de desarrollo activo |
