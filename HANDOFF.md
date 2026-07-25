# Handoff — Sidartha Comunicación

Estado del trabajo al 25 de julio de 2026.

---

## 1. Dónde está el código

| | |
| --- | --- |
| Repositorio | `github.com/fteranvelez-ops/Sidartha` |
| Rama | `claude/marketing-site-ui-kit-3rgvol` |
| Commits | `baf18e2` (andamiaje) → `611838c` (migración) |
| Rama por defecto | **ninguna** — el repo estaba vacío; esta rama es todo el historial |

No hay pull request abierto. Cuando se apruebe el contenido, esta rama puede
pasar a ser `main` directamente.

---

## 2. Qué está hecho

**El design system está migrado por completo.** Los tokens del handoff de
Claude Design (`colors`, `typography`, `spacing`, `fonts`) y `base.css`
entraron sin modificar y son la fuente de verdad de todo el estilo. La
librería de componentes —Badge, Button, Card, Input, Textarea, QuoteCard,
StatBlock— está portada a JSX conservando los contratos de props.

**La home está construida.** Son las 16 secciones de
`ui_kits/marketing-site/index.html`, con el motor de scroll completo: reveals,
mask headings, count-ups, parallax, el statement que se ilumina palabra por
palabra, la galería horizontal fija y el cursor magnético.

Verificado: `npm run build` compila limpio, y el resultado se renderizó en
Chromium a 1440px y a 390px.

---

## 3. Cinco cambios respecto al prototipo

El handoff es una maqueta HTML/CSS/JS para 1440×900, no código de producción.
Estas diferencias son deliberadas y están comentadas en el código:

1. **`<image-slot>` eliminado.** Era una herramienta de autoría (drag & drop,
   reencuadre, persistencia en un sidecar JSON). Sustituido por un componente
   que muestra la foto real si existe y un placeholder etiquetado si no.
2. **Los formularios ahora envían.** El prototipo mostraba «te contactaremos
   muy pronto» sin mandar nada — en producción eso pierde leads en silencio.
3. **Responsive y menú móvil añadidos.** No había media queries; con los
   enlaces ocultos en pantalla pequeña, la navegación era inalcanzable.
4. **Cursor personalizado corregido.** Sus dos elementos quedaban visibles
   como puntos en la esquina superior izquierda en cualquier táctil.
5. **Iconos.** De lucide por CDN a `lucide-react`. `Instagram` y `Facebook`
   van como SVG propios: lucide v1 retiró los iconos de marca.

---

## 4. Lo que está bloqueado: el despliegue

**El sitio no está publicado.** No se pudo desplegar desde el entorno remoto
de Claude Code porque no tiene credenciales de Firebase. La configuración
(`firebase.json`, `.firebaserc`) sí está lista.

Los intentos desde el Mac fallaron con `Missing script: "deploy"`. La causa no
fue el proyecto sino la ubicación: los comandos se ejecutaron desde
`~` y luego desde `~/Documents`, fuera de la carpeta del repositorio. El
`git clone` no llegó a completarse y su mensaje de error nunca se capturó.

### Procedimiento

```bash
cd ~/Documents && \
git clone -b claude/marketing-site-ui-kit-3rgvol \
  https://github.com/fteranvelez-ops/Sidartha.git sidartha-web && \
cd sidartha-web && \
pwd && ls && \
npm install && \
npm run deploy
```

Encadenado con `&&` a propósito: si el clone falla, nada más se ejecuta y el
error queda visible.

**Comprobación:** `ls` debe mostrar `package.json`, `firebase.json`,
`index.html`, `src` y `public`. El prompt debe terminar en `sidartha-web %`.
Si no es así, el problema sigue siendo la ubicación.

**Si el clone falla**, el mensaje exacto importa:

| Mensaje | Causa |
| --- | --- |
| `Repository not found` | falta de permisos o URL equivocada |
| `Authentication failed` | credenciales de git en el Mac |
| `already exists` | carpeta previa a medias |
| `Could not find remote branch` | nombre de rama mal escrito |

**Sobre el proyecto de Firebase:** `sidartha-ec` se tomó de la indicación
inicial y **nunca se verificó**. Confirmar con
`npx firebase-tools projects:list`; si difiere, corregir `.firebaserc`.

Conviene usar `npm run deploy:preview` primero — publica en un canal temporal
con URL propia sin tocar el sitio principal.

URL de producción prevista: `https://sidartha-ec.web.app`

---

## 5. Pendientes antes de publicar

| # | Pendiente | Detalle |
| --- | --- | --- |
| 1 | **Endpoint del formulario** | Sin configurar, contacto y newsletter abren el cliente de correo con el mensaje redactado: funciona, pero el visitante debe pulsar enviar. Para envío directo, crear `.env.local` con `VITE_CONTACT_ENDPOINT=https://…` que acepte `POST` JSON `{kind, nombre, correo, mensaje}`. Ver `src/lib/forms.js`. |
| 2 | **Fotografía** | El kit solo trae 4 assets reales (3 logos y una foto de oficina). Siguen como placeholder: los 8 proyectos del portafolio, las 2 fotos del equipo, el retrato de budh.ai y 2 imágenes de «Nosotros». Se rellenan pasando `src` a `ImageSlot`. |
| 3 | **Redes sociales** | Los 3 iconos del footer apuntan a `#top`. Faltan las URLs de `@sidarthafilmsec` y `@sidarthacomunicacion`. |
| 4 | **Página budh.ai** | El handoff incluye un segundo kit (`ui_kits/budh-ai/`) que no forma parte de esta entrega. Su CTA lleva al formulario de contacto mientras tanto. |
| 5 | **Textos legales** | Términos, privacidad y cookies vienen del kit y estaban marcados como texto de ejemplo. Requieren revisión legal. |

---

## 6. Mapa del código

```
index.html                 entrada de Vite (título, meta, OG)
firebase.json              Hosting: SPA rewrite + cache de assets
.firebaserc                proyecto por defecto: sidartha-ec

src/
  main.jsx                 bootstrap + orden de importación de estilos
  App.jsx                  composición de la home

  styles/
    tokens/                colors · typography · spacing · fonts   ← del kit
    base.css                                                       ← del kit
    site.css               estilos de la home + responsive

  components/
    ui.jsx                 design system (7 componentes)
    primitives.jsx         Marquee, Eyebrow, MaskHead, ImageSlot
    Icon.jsx               mapa de iconos lucide

  sections/
    parts.jsx              Nav, Hero, KineticMarquee, About, Fundamentos,
                           Statement, Departments, Process
    home.jsx               Portfolio, Stats, BudhAi, Trust, Manifesto,
                           Contacto, CallCTA, Newsletter, Footer, LegalModal

  lib/
    useMotion.js           motor de scroll
    forms.js               envío de formularios

  data/site.js             todo el contenido editable

public/assets/             logos y fotografía
```

**Para editar contenido** (textos, proyectos, métricas, datos de contacto),
el único archivo que hay que tocar es `src/data/site.js`.

**Para cambiar la identidad visual**, `src/styles/tokens/`. Ningún componente
tiene colores ni tamaños literales, así que un cambio de tokens se propaga
solo.

---

## 7. Notas para quien continúe

- El design system se sincronizó desde un **zip de handoff** subido a mano, no
  por MCP: `DesignSync` requiere `/design-login`, que necesita terminal
  interactiva y no existe en Claude Code Web. Para volver a sincronizar desde
  claude.ai/design, hacerlo desde una terminal local.
- Los `placeholder` etiquetados son intencionales y accesibles (`role="img"`
  con `aria-label`). No son un error: marcan dónde faltan fotos.
- El motor de animación respeta `prefers-reduced-motion` en todos sus efectos.
