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
├── productos.csv       ← Matriz de productos, nombres de imágenes y categorías
│
├── assets/             ← 🖼️ CARPETA DE IMÁGENES Y RECURSOS VISUALES
│   ├── Logo_Leyenda.png        ← Logo principal (PNG transparente — el que se usa)
│   ├── Logo_Leyenda.jpg        ← Logo en JPG (versión antigua, no se usa)
│   ├── logo_original.png       ← Logo original extraído
│   │
│   ├── images/                 ← 🏷️ FOTOS REALES DE LOS PRODUCTOS DEL CATÁLOGO
│   │   ├── 593lager600ml.jpg   
│   │   ├── amstel355ml.jpg     
│   │   ├── antioquenoazul1lt.webp
│   │   └── ... (todas las imágenes de licores con nombres normalizados)
│   │
│   ├── aguardiente_category.png    ← Imagen categoría Aguardientes (fallback/anterior)
│   ├── beer_category.png           ← Imagen categoría Cervezas (fallback/anterior)
│   ├── gin_category.png            ← Imagen categoría Gin (fallback/anterior)
│   └── accessories_category.png    ← Imagen categoría Accesorios (fallback/anterior)
│
├── ejemplo_colores.jpg ← Imagen de referencia de la paleta de colores
└── GUIA_PROYECTO.md    ← Este archivo (documentación del proyecto)
```

---

## 🎨 ¿Qué se construyó?

### 1. Estructura General (`index.html`)

El sitio tiene **una sola página** con las siguientes secciones en orden:

| Sección | ID / Ancla | Descripción |
|---|---|---|
| Header / Nav | `#header` | Barra fija con logo + nombre + botón WhatsApp |
| Hero | `#inicio` | Pantalla principal con animación, eslogan, logo y botón de WhatsApp flotante |
| Features Bar | — | 3 íconos: Legales · Delivery · Tradición |
| Catálogo | `#catalogo` | Grilla de productos con filtros, búsqueda y "Consulta Directa" para categorías vacías |
| Nosotros | `#nosotros` | Historia, misión y visión de la licorería en tarjetas oscuras interactivas |
| Contacto | `#contacto` | Dirección, teléfono, horarios, horarios de atención y mapa interactivo real |
| Footer | — | Logo, redes sociales y WhatsApp delivery en tono oscuro premium |

### 2. Paleta de Colores (`style.css`)

Toda la paleta de colores oscuros premium y tarjetas claras está definida en variables CSS al inicio del archivo:

```css
:root {
    --bg-black: #0D0D0D;             /* Fondo principal negro carbón */
    --bg-dark: #1A1A1A;              /* Fondo de secciones secundarias/alternas */
    --bg-card: #FAF8F2;              /* Fondo de tarjetas de producto (blanco cálido) */
    
    --accent-gold: #D4AF37;          /* Oro clásico metálico */
    --accent-gold-hover: #F4E5A1;    /* Oro claro para hover */
    
    --text-cream: #F5F0E6;           /* Texto claro cálido sobre fondo negro */
    --text-muted: #B8B0A0;           /* Texto secundario grisáceo/dorado */
    --text-dark: #0D0D0D;            /* Texto oscuro para usar sobre tarjetas blancas */
}
```

### 3. Catálogo de Productos (`script.js`)

Los productos activos en la página se mapean automáticamente a través del array `PRODUCTS` en `script.js` con esta estructura:

```javascript
{
    name: "Antioqueño Azul 1 Lt.",
    category: "aguardientes",
    presentation: "Botella 1 Litro",
    img: "assets/images/antioquenoazul1lt.webp"
}
```

Al hacer clic en cualquier producto, el usuario es enviado directamente a **WhatsApp** con un mensaje personalizado preguntando por ese producto específico.

---

## ✅ Cambios Realizados (Julio 2026)

### 🏷️ Catálogo Depurado e Imágenes Reales
- Se filtraron y eliminaron del catálogo todos los productos que no estaban en la lista final de `productos.csv`, reduciendo los ítems de 104 a **78 productos activos**.
- Se vincularon todas las botellas con sus **fotos reales** renombradas en `assets/images/`, detectando automáticamente las extensiones correctas (`.jpg`, `.png`, `.webp`).
- Se rediseñó el contenedor de imagen de las tarjetas con `object-fit: contain;` y `padding: 12px;` para que las botellas se vean completas (sin recortar) y todas las tarjetas conserven exactamente el **mismo tamaño (porte)**.

### 🎨 Rediseño a Tema Oscuro Premium (Carbon & Gold)
- El fondo general del sitio se definió en negro carbón (`#0D0D0D` / `#1A1A1A`).
- Las **tarjetas de producto** usan un fondo blanco cálido (`#FAF8F2`) con bordes dorados, de modo que "sobresalen" y toman protagonismo frente al fondo oscuro del sitio. Los textos dentro de las tarjetas se fijaron en negro completo para mantener un contraste de accesibilidad óptimo.
- Al pasar el cursor por encima de una tarjeta de producto, esta se eleva (`translateY(-6px) scale(1.02)`) con una sombra dorada resplandeciente (`0 8px 24px rgba(212,175,55,0.35)`) y la imagen de la botella se amplía un 5%.

### 💬 Botón WhatsApp Integrado
- Se añadió un **botón flotante de WhatsApp** en la parte inferior izquierda con un diseño verde oficial, borde dorado de 2px y una animación de pulso continuo para captar la atención de los clientes.
- Los botones de WhatsApp dentro de cada tarjeta de producto ahora cuentan con un borde dorado de 2px, y aumentan de tamaño (`scale(1.1)`) con sombras combinadas al pasar el cursor.

### 📍 Google Maps Interactivo
- Se eliminó el marcador estático del mapa y se reemplazó por un **mapa interactivo de Google Maps** integrado por `iframe`.
- Para mantener la estética oscura, el mapa tiene aplicados filtros CSS (`invert` y `grayscale`), integrándose estéticamente con el diseño del sitio sin molestar la vista.

---

## 🔧 Cómo agregar o editar productos

1. Abre el archivo [productos.csv](file:///d:/Proyectos/Pagina_LaLeyenda/productos.csv) en Excel.
2. Agrega la información del producto respetando las columnas: `Producto;Nombre_Imagen;Categoria;Presentacion`.
3. Guarda tu imagen del licor en `assets/images/` y renómbrala tal como colocaste en la columna `Nombre_Imagen` (ej. `miproducto.jpg`).
4. Avisa al asistente para ejecutar el actualizador del catálogo. El script actualizará automáticamente el catálogo de `script.js` con las nuevas rutas y extensiones de imágenes.

---

## 🌐 GitHub y Publicación en Línea

El sitio está publicado y disponible públicamente usando **GitHub + GitHub Pages**.

### 🔗 Enlaces del proyecto

| Recurso | URL |
|---|---|
| **Sitio web público** | https://mfca-fer.github.io/licorerialaleyenda/ |
| **Repositorio GitHub** | https://github.com/mfca-fer/licorerialaleyenda |

---

### 📦 ¿Qué se subió a GitHub?

- `index.html` (Estructura completa del sitio)
- `style.css` (Todos los estilos, animaciones y tema oscuro)
- `script.js` (Catálogo activo de 78 productos y buscador)
- `productos.csv` (Matriz de productos de referencia)
- `assets/logo_original.png` y `assets/Logo_Leyenda.png` (Logos del negocio)
- `assets/images/*` (Todas las 76 imágenes reales de los licores cargadas)
- `GUIA_PROYECTO.md` (Esta guía de documentación)

---

### 🔄 Cómo actualizar el sitio en el futuro

Cada vez que hagas un cambio en los archivos locales, ejecuta los siguientes comandos en tu terminal de PowerShell:

```powershell
# 1. Ir a la carpeta del proyecto
cd d:\Proyectos\Pagina_LaLeyenda

# 2. Agregar todos los cambios
git add .

# 3. Guardar los cambios con una descripción
git commit -m "Descripción breve del cambio realizado"

# 4. Subir a GitHub
git push
```

> Los cambios tardarán aproximadamente **1 minuto** en verse reflejados en el sitio web público.

---

*Guía actualizada en julio de 2026 · Licorería La Leyenda · Cuenca, Ecuador*
