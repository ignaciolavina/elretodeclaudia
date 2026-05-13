# CLAUDE.md — El Reto de Claudia

## Cómo operar

- **Nunca crear pull requests.** Hacer commit directo en la rama activa cuando el usuario lo pida.
- **Nunca usar worktrees.** Editar archivos directamente en la rama activa.
- **No hacer push** a menos que el usuario lo pida explícitamente.
- El usuario se encarga de revisar y hacer commit/push cuando quiera. No hacerlo por iniciativa propia.

## Stack

- React 18 + Vite 5 + Tailwind CSS 3
- Fuentes: Lora (títulos) + Inter (cuerpo)
- Paleta: `brand-*` (morado/lavanda) + `warm-*` (naranja acento)
- Servidor dev: `npm run dev` → http://localhost:5173
- Idiomas: ES + EN via `src/i18n/translations.js` y `LanguageContext`

## Estructura

```
src/
  components/    # Navbar, Hero, QuEsDBP, HistoriaClaudia, ComoAyudar, Contacto, Donar, Privacidad, Footer
  pages/         # Páginas de ruta
  hooks/         # useScrollAnimation
  context/       # LanguageContext
  i18n/          # translations.js (ES + EN)
  config/        # emailjs.js
```
