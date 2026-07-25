# ui_kits/marketing-site — slot del design system

Este directorio está **reservado** para el kit de Claude Design:

https://claude.ai/design/p/7e81978e-3ded-45c8-97b0-f1a61869371f

Todavía está vacío. En esta sesión no fue posible descargarlo: `DesignSync`
requiere `/design-login`, que necesita una terminal interactiva y no existe en
el entorno remoto de Claude Code Web. La estructura del sitio en `src/` se
construyó sin él, leyendo únicamente de tokens, para que la migración sea un
reemplazo y no una reescritura.

## Archivos que se esperan aquí

Al sincronizar, el proyecto de diseño aporta:

| Ruta                                  | Qué es                                  |
| ------------------------------------- | --------------------------------------- |
| `_ds_bundle.js`                       | Bundle del design system (raíz del repo) |
| `styles.css`                          | Tokens y estilos base (raíz del repo)    |
| `ui_kits/marketing-site/index.html`   | Entrada del kit                          |
| `ui_kits/marketing-site/Home.jsx`     | Composición de la home                   |
| `ui_kits/marketing-site/parts.jsx`    | Componentes de sección                   |
| `ui_kits/marketing-site/image-slot.js`| Placeholder de imágenes                  |

## Cómo migrar cuando lleguen

1. **Sincronizar.** Desde Claude Design, usar «Send to Claude Code Web», o
   ejecutar `/design-login` + `/design-sync` desde una terminal local. Los
   archivos deben caer en las rutas de la tabla.

2. **Tokens.** `styles.css` pasa a ser la fuente de verdad. Llevar sus valores
   a `src/styles/tokens.css` **conservando los nombres de variable** que ya
   existen. Ningún componente cambia: todos leen de esas variables.

3. **Componentes.** Sustituir por los del kit, en este orden:

   | Actual                            | Reemplazo del kit         |
   | --------------------------------- | ------------------------- |
   | `src/components/ImageSlot.jsx`    | `image-slot.js`           |
   | `src/components/Sections.jsx`     | `parts.jsx`               |
   | `src/App.jsx` (composición)       | `Home.jsx`                |

   El alias `@kit` ya apunta aquí (`vite.config.js`), así que se importa como
   `import Home from '@kit/Home.jsx'` sin rutas relativas frágiles.

4. **Verificar.** `npm run build && npm run preview`, y desplegar.

## Regla que mantiene esto barato

Ningún archivo en `src/` debe contener un color, tamaño o espaciado literal.
Todo sale de `tokens.css`. Mientras eso se cumpla, cambiar el design system es
cambiar un archivo.
