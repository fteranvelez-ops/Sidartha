# Sidartha

Sitio de marketing. Vite + React, desplegado en Firebase Hosting
(proyecto `sidartha-ec`).

## Estado

La **estructura** está lista y es desplegable. El **design system** todavía no
está migrado: ver `ui_kits/marketing-site/README.md` para el porqué y el
procedimiento.

Todo el CSS lee de `src/styles/tokens.css`. Los valores actuales son neutros y
provisionales, pensados para ser sustituidos por los del kit sin tocar
componentes.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run preview    # sirve dist/ localmente
```

## Despliegue

Requiere autenticación de Firebase, que no está disponible en el entorno remoto
de Claude Code. Desde una máquina con acceso al proyecto `sidartha-ec`:

```bash
npx firebase login
npm run deploy             # producción
npm run deploy:preview     # canal de preview, URL temporal
```

URL de producción una vez desplegado: `https://sidartha-ec.web.app`
(y `https://sidartha-ec.firebaseapp.com`).

> El proyecto `sidartha-ec` no se ha verificado desde aquí — no hay
> credenciales de Firebase en este entorno. Si el ID real difiere, corregirlo
> en `.firebaserc`.

## Estructura

```
index.html               entrada de Vite
firebase.json            config de Hosting (SPA rewrite + cache headers)
.firebaserc              proyecto por defecto: sidartha-ec
src/
  main.jsx               bootstrap de React
  App.jsx                composición de la home
  components/            Header, Hero, Sections, Footer, ImageSlot
  styles/
    tokens.css           design tokens  <- punto de migración
    global.css           reset + primitivas de layout
    components.css       estilos de componentes (solo tokens)
ui_kits/
  marketing-site/        slot reservado para el kit de Claude Design
```
