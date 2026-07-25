# Sidartha Comunicación

Sitio de la agencia. Vite + React, desplegable en Firebase Hosting
(proyecto `sidartha-ec`).

El design system de Claude Design está migrado: tokens, librería de
componentes y la home completa (`ui_kits/marketing-site/index.html` del
handoff) portados a React.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run preview    # sirve dist/ localmente
```

## Despliegue

Requiere credenciales de Firebase, que no existen en el entorno remoto de
Claude Code. Desde una máquina con acceso al proyecto `sidartha-ec`:

```bash
npx firebase login
npm run deploy             # producción
npm run deploy:preview     # canal temporal de preview
```

URL una vez desplegado: `https://sidartha-ec.web.app`
(y `https://sidartha-ec.firebaseapp.com`).

> El ID `sidartha-ec` se tomó de la indicación del proyecto y **no** se pudo
> verificar desde aquí. Si el real difiere, corregirlo en `.firebaserc`.

## Estructura

```
index.html                 entrada de Vite (título, meta, OG)
firebase.json              Hosting: SPA rewrite + cache de assets
.firebaserc                proyecto por defecto: sidartha-ec

src/
  main.jsx                 bootstrap + orden de importación de estilos
  App.jsx                  composición de la home (era Home.jsx > App)

  styles/
    tokens/                colors · typography · spacing · fonts  ← del kit
    base.css                                                      ← del kit
    site.css               estilos de la home + responsive

  components/
    ui.jsx                 design system: Badge, Button, Card, Input,
                           Textarea, QuoteCard, StatBlock
    primitives.jsx         Marquee, Eyebrow, MaskHead, ImageSlot
    Icon.jsx               mapa de iconos lucide

  sections/
    parts.jsx              Nav, Hero, KineticMarquee, About, Fundamentos,
                           Statement, Departments, Process
    home.jsx               Portfolio, Stats, BudhAi, Trust, Manifesto,
                           Contacto, CallCTA, Newsletter, Footer, LegalModal

  lib/
    useMotion.js           motor de scroll: reveals, parallax, count-up,
                           galería fija, marquees, cursor magnético
    forms.js               envío de formularios

  data/site.js             contenido: áreas, valores, proceso, proyectos,
                           métricas, clientes, fundadores, textos legales

public/assets/             logos y fotografía del kit
```

## Qué cambió respecto al prototipo

El handoff es un prototipo HTML/CSS/JS pensado para 1440×900. Al llevarlo a
producción se corrigió lo siguiente, todo marcado con comentarios en el
código:

- **Iconos.** El kit usaba lucide por CDN con `<i data-lucide>`; ahora es
  `lucide-react`. `Instagram` y `Facebook` no existen en lucide v1 (retiró los
  iconos de marca), así que van como SVG propios en `Icon.jsx`.
- **`<image-slot>`.** Era un componente de autoría (drag & drop, reencuadre,
  persistencia en un sidecar JSON) que no tiene sentido en un sitio publicado.
  Se reemplazó por un `ImageSlot` que muestra la foto real si existe y un
  placeholder etiquetado si no.
- **Formularios.** El prototipo mostraba «te contactaremos» sin enviar nada:
  en producción eso pierde leads en silencio. Ahora envían de verdad — ver
  abajo.
- **Responsive.** El prototipo no tenía media queries. Se añadieron, más un
  menú móvil: con los enlaces ocultos y sin él, la navegación era inalcanzable
  en teléfono.
- **Cursor personalizado.** Los dos elementos del cursor quedaban visibles en
  la esquina superior izquierda en cualquier dispositivo táctil. Ahora se
  muestran solo cuando el motor los controla (punteros finos).

## Pendientes antes de publicar

1. **Endpoint del formulario.** Sin configurar, contacto y newsletter abren el
   cliente de correo del visitante con el mensaje ya redactado — funciona,
   pero el visitante tiene que pulsar enviar. Para envío directo:

   ```bash
   echo 'VITE_CONTACT_ENDPOINT=https://…' > .env.local
   ```

   Debe aceptar `POST` con JSON (`{kind, nombre, correo, mensaje}`). Sirve una
   Firebase Function, Formspree o similar. Ver `src/lib/forms.js`.

2. **Fotografía.** El kit solo trae 4 assets reales (3 logos y una foto de
   oficina). Siguen como placeholder etiquetado: los 8 proyectos del
   portafolio, las 2 fotos del equipo, el retrato de budh.ai y dos imágenes de
   «Nosotros». Se rellenan pasando `src` a `ImageSlot`.

3. **Redes sociales.** Los tres iconos del footer apuntan a `#top`. Faltan las
   URLs reales de `@sidarthafilmsec` y `@sidarthacomunicacion`.

4. **Página budh.ai.** El handoff incluye un segundo kit (`ui_kits/budh-ai/`)
   que no forma parte de esta entrega. Su CTA lleva al formulario de contacto
   mientras tanto.

5. **Textos legales.** Términos, privacidad y cookies vienen del kit y estaban
   marcados como texto de ejemplo. Conviene revisión legal antes de publicar.
