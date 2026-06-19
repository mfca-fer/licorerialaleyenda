# 🍾 Licorería La Leyenda — Guía del Proyecto Web

> Sitio web profesional para una licorería tradicional en Cuenca, Ecuador.  
> Construido con HTML + CSS + JavaScript puro. Sin frameworks. Sin dependencias externas de pago.

---

## 📁 Estructura del Proyecto

```
Pagina_LaLeyenda/
│
├── index.html          ← Página principal (toda la estructura del sitio)
├── style.css           ← Todos los estilos visuales (colores, animaciones, layout)
├── script.js           ← Lógica interactiva (catálogo, filtros, búsqueda, WhatsApp)
│
├── assets/             ← 🖼️ CARPETA DE IMÁGENES Y RECURSOS VISUALES
│   ├── Logo_Leyenda.png        ← Logo principal (PNG transparente — el que se usa)
│   ├── Logo_Leyenda.jpg        ← Logo en JPG (versión antigua, no se usa)
│   ├── logo_gold.png           ← Logo dorado generado (versión anterior)
│   ├── logo_white.png          ← Logo blanco generado (versión anterior)
│   ├── logo_new_gold.png       ← Logo dorado del nuevo logo JPG
│   ├── logo_new_white.png      ← Logo blanco del nuevo logo JPG
│   ├── logo_new_trans.png      ← Logo transparente procesado
│   ├── logo_original.png       ← Logo extraído del PDF original
│   │
│   ├── aguardiente_category.png    ← Imagen categoría Aguardientes
│   ├── beer_category.png           ← Imagen categoría Cervezas
│   ├── gin_category.png            ← Imagen categoría Gin
│   └── accessories_category.png    ← Imagen categoría Accesorios
│
├── Logo_Leyenda.png    ← Archivo fuente original del logo (copia en assets/)
├── Logo_Leyenda.jpg    ← Archivo fuente original en JPG
├── ejemplo_colores.jpg ← Imagen de referencia de la paleta de colores
└── GUIA_PROYECTO.md    ← Este archivo
```

---

## 🎨 ¿Qué se construyó?

### 1. Estructura General (`index.html`)

El sitio tiene **una sola página** con las siguientes secciones en orden:

| Sección | ID / Ancla | Descripción |
|---|---|---|
| Header / Nav | `#header` | Barra fija con logo + nombre + botón WhatsApp |
| Hero | `#inicio` | Pantalla principal con animación, eslogan y logo |
| Features Bar | — | 3 íconos: Legales · Delivery · Tradición |
| Catálogo | `#catalogo` | Grilla de productos con filtros y búsqueda |
| Nosotros | `#nosotros` | Historia, misión y visión de la licorería |
| Contacto | `#contacto` | Dirección, teléfono, horarios y mapa |
| Footer | — | Logo, redes sociales, WhatsApp delivery |

### 2. Paleta de Colores (`style.css`)

Toda la paleta está definida en variables CSS al inicio del archivo:

```css
:root {
    --accent-gold: #cfb53b;       /* Oro envejecido — color principal */
    --bg-black: #050505;          /* Fondo más oscuro */
    --bg-dark: #0c0c0c;           /* Fondo oscuro secundario */
    --bg-card: #141414;           /* Fondo de tarjetas */
    --text-cream: #f5f0e0;        /* Texto claro cálido */
    --text-muted: #a3a3a3;        /* Texto secundario gris */
}
```

> Si quieres cambiar el tono dorado, solo modifica `--accent-gold` y se actualiza en todo el sitio.

### 3. Catálogo de Productos (`script.js`)

El catálogo **no usa base de datos**. Los productos están definidos como un array JSON dentro de `script.js`. Cada producto tiene esta estructura:

```javascript
{
    name: "Zhumir Tradicional 750ml",
    category: "aguardientes",
    image: "assets/aguardiente_category.png",
    badge: "Nacional",
    description: "El aguardiente más popular del Ecuador."
}
```

Al hacer clic en cualquier producto, el usuario es enviado directamente a **WhatsApp** con un mensaje personalizado preguntando por ese producto específico.

---

## ✅ Cambios Realizados (Historial)

### 🖼️ Logo
- Se reemplazó el logo antiguo por `Logo_Leyenda.png` (PNG con fondo transparente RGBA)
- El logo aparece en: header, menú móvil, hero, sección Nosotros y footer
- Se añadió **efecto de luz dorada** en el contorno usando `drop-shadow` multicapa en CSS
- En el hero hay **2 anillos pulsantes** que giran alrededor del logo grande

### 🏷️ Header (Barra de Navegación)
- Diseño: logo + texto de marca lado a lado
  - Arriba: `LICORERÍA` (letras pequeñas con separación)
  - Abajo: `La Leyenda` (letras grandes con gradiente dorado metálico)
- En móvil el texto se oculta automáticamente para ahorrar espacio

### 🛵 Animación de Delivery (Hero)
- Moto dibujada en SVG con oro envejecido: ruedas, chasis, faro, jinete
- Carretera animada con líneas punteadas que se desplazan
- Humo animado del escape con 3 capas:
  - `0983417971` — número de WhatsApp
  - `WhatsApp`
  - 📞 ícono de teléfono

### 💬 Eslogan
- Texto añadido entre el subtítulo y la animación:
  > *"No salgas, pide licores, snacks, elige tu combo y sigue disfrutando..."*
- Estilo: borde dorado izquierdo, fondo semitransparente, itálica

### 🎨 Color Oro
- Cambiado de oro brillante `#f8c800` → oro envejecido `#cfb53b`
- Más sofisticado, menos estridente, armonioso con el tema oscuro

### 📍 Google Maps
- Link actualizado al enlace real del negocio:
  `https://maps.app.goo.gl/yxBQFsiEpQfAYNg57`

---

## 🖼️ Cómo subir imágenes personalizadas

### Paso 1 — Prepara la imagen

| Tipo de imagen | Formato recomendado | Tamaño recomendado |
|---|---|---|
| Logo / Marca | `.png` con fondo transparente | máx. 500KB |
| Foto de producto | `.jpg` o `.webp` | 400×400px, máx. 200KB |
| Imagen de fondo | `.jpg` o `.webp` | 1920×1080px, máx. 500KB |
| Icono / Badge | `.svg` o `.png` | máx. 50KB |

> **Tip:** Para el logo siempre usa PNG con fondo transparente. Evita JPG para logos.

### Paso 2 — Guarda la imagen en la carpeta correcta

**👉 Todas las imágenes van en la carpeta `assets/`**

```
d:\Proyectos\Pagina_LaLeyenda\assets\
```

Ejemplo: si quieres añadir la foto de una botella de whisky:
```
assets/whisky_johnnie_red.jpg
```

### Paso 3 — Referenciarla en el código

**En `index.html`** (para imágenes en el HTML):
```html
<img src="assets/whisky_johnnie_red.jpg" alt="Johnnie Walker Red Label">
```

**En `script.js`** (para imágenes de productos en el catálogo):
```javascript
{
    name: "Johnnie Walker Red Label 750ml",
    category: "whiscky",
    image: "assets/whisky_johnnie_red.jpg",   // ← aquí
    badge: "Importado",
    description: "El whisky escocés más vendido del mundo."
}
```

**En `style.css`** (para imágenes de fondo):
```css
.mi-seccion {
    background-image: url('assets/mi_fondo.jpg');
}
```

---

## 📲 Datos de Contacto Configurados

| Campo | Valor |
|---|---|
| Teléfono | `0983417971` |
| WhatsApp | `+593 98 341 7971` |
| Dirección | Av. Fray Vicente Solano 1-80 y Daniel Córdova Toral, Cuenca |
| Google Maps | https://maps.app.goo.gl/yxBQFsiEpQfAYNg57 |
| Facebook | https://www.facebook.com/share/1Di4Pgr4Qk/ |
| Instagram | https://www.instagram.com/leyendalicoreriala |
| TikTok | https://www.tiktok.com/@licorera.la.leyen |

> Para actualizar el número de WhatsApp, busca `593983417971` en `index.html` y reemplázalo en todos los lugares donde aparezca.

---

## 🔧 Cómo agregar un nuevo producto al catálogo

Abre `script.js` y localiza el array `products`. Añade un objeto nuevo:

```javascript
{
    name: "Nombre del Producto",
    category: "ron",              // debe coincidir con un filtro existente
    image: "assets/mi_imagen.jpg",
    badge: "Importado",           // o "Nacional", "Nuevo", "Oferta", etc.
    description: "Descripción corta del producto."
}
```

**Categorías disponibles:**
`aguardientes` · `cervezas` · `gin` · `ron` · `tequila` · `vodka` · `whiscky` · `vino` · `espumantes` · `hierbas` · `saborizados` · `accesorios` · `varios`

---

## 🚀 Cómo ver el sitio localmente

El servidor local ya está corriendo. Para verlo en el navegador:

```
http://localhost:8000
```

Si necesitas reiniciarlo:
```powershell
cd d:\Proyectos\Pagina_LaLeyenda
python -m http.server 8000
```

---

*Guía generada el 18 de junio de 2026 · Licorería La Leyenda · Cuenca, Ecuador*
