/* ==========================================================================
   LICORERÍA LA LEYENDA - CLIENT-SIDE LOGIC
   Features: Dynamic Catalog, Advanced Filtering, Custom WA Messages, UI Effects
   ========================================================================== */

// --- 1. Product Database (Extracted from Catalog PDF) ---
const PRODUCTS = [
    { name: "Antioqueño Azul 1 Lt.", category: "aguardientes", presentation: "Botella 1 Litro", img: "assets/images/antioquenoazul1lt.png" },
    { name: "Antioqueño Azul 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/antioquenoazul750ml.png" },
    { name: "Antioqueño Azul 375ml", category: "aguardientes", presentation: "Botella 375ml", img: "assets/images/antioquenoazul375ml.png" },
    { name: "Caña Manabita 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/canamanabita750ml.png" },
    { name: "Caña Manabita 375ml", category: "aguardientes", presentation: "Botella 375ml", img: "assets/images/canamanabita375ml.png" },
    { name: "Cantaclaro 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/cantaclaro750ml.png" },
    { name: "Cantaclaro 375ml", category: "aguardientes", presentation: "Botella 375ml", img: "assets/images/cantaclaro375ml.png" },
    { name: "Cristal 1960 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/cristal1960750ml.png" },
    { name: "Cristal 1960 C 375ml", category: "aguardientes", presentation: "Botella 375ml", img: "assets/images/cristal1960c375ml.png" },
    { name: "Cristal Mundialista 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/cristalmundialista750ml.png" },
    { name: "Norteño 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/norteno750ml.png" },
    { name: "Norteño Black 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/nortenoblack750ml.png" },
    { name: "Norteño Garrafa", category: "aguardientes", presentation: "Garrafa Plástica", img: "assets/images/nortenogarrafa.png" },
    { name: "Del Monte 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/delmonte750ml.png" },
    { name: "Pájaro Azul N 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/pajaroazuln750ml.png" },
    { name: "Pájaro Azul N 375ml", category: "aguardientes", presentation: "Botella 375ml", img: "assets/images/pajaroazuln375ml.png" },
    { name: "Pedrito Coco 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/pedritococo750ml.png" },
    { name: "Pedrito Coco 375ml", category: "aguardientes", presentation: "Botella 375ml", img: "assets/images/pedritococo375ml.png" },
    { name: "Zamarro 40° 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/zamarro40750ml.png" },
    { name: "Trópico Seco 350ml", category: "aguardientes", presentation: "Botella 350ml", img: "assets/images/tropicoseco350ml.png" },
    { name: "Zhumir Roja 1750ml", category: "aguardientes", presentation: "Botella 1.75 Litros", img: "assets/images/zhumirroja1750ml.png" },
    { name: "Zhumir Roja 1 Lt.", category: "aguardientes", presentation: "Botella 1 Litro", img: "assets/images/zhumirroja1lt.png" },
    { name: "Zhumir Roja 350ml", category: "aguardientes", presentation: "Botella 350ml", img: "assets/images/zhumirroja350ml.png" },
    { name: "Zhumir Roja N 700ml", category: "aguardientes", presentation: "Botella 700ml", img: "assets/images/zhumirrojan700ml.png" },
    { name: "Zhumir Verde 700ml", category: "aguardientes", presentation: "Botella 700ml", img: "assets/images/zhumirverde700ml.png" },
    { name: "Zhumir Canuto 750ml", category: "aguardientes", presentation: "Botella 750ml", img: "assets/images/zhumircanuto750ml.png" },
    { name: "Zhumir Canuto 125ml", category: "aguardientes", presentation: "Botella 125ml", img: "assets/images/zhumircanuto125ml.png" },
    { name: "Zhumir Coco N 700ml", category: "aguardientes", presentation: "Botella 700ml", img: "assets/images/zhumircocon700ml.png" },
    { name: "Zhumir Durazno 350ml", category: "aguardientes", presentation: "Botella 350ml", img: "assets/images/zhumirduraznon350ml.png" },
    { name: "Zhumir Durazno N 700ml", category: "aguardientes", presentation: "Botella 700ml", img: "assets/images/zhumirduraznon700ml.png" },
    { name: "Zhumir Durazno N 350ml", category: "aguardientes", presentation: "Botella 350ml", img: "assets/images/zhumirduraznon350ml.png" },
    { name: "Zhumir Garrafa", category: "aguardientes", presentation: "Garrafa Plástica", img: "assets/images/zhumirgarrafan.png" },
    { name: "Zhumir Garrafa N", category: "aguardientes", presentation: "Garrafa Plástica", img: "assets/images/zhumirgarrafan.png" },
    { name: "Zhumir Mango 700ml", category: "aguardientes", presentation: "Botella 700ml", img: "assets/images/zhumirmango700ml.png" },
    { name: "Zhumir Naranjilla N 700ml", category: "aguardientes", presentation: "Botella 700ml", img: "assets/images/zhumirnaranjillan700ml.png" },
    { name: "Zhumir Naranjilla N 350ml", category: "aguardientes", presentation: "Botella 350ml", img: "assets/images/zhumirnaranjillan350ml.png" },
    { name: "Zhumir Seco 700ml", category: "aguardientes", presentation: "Botella 700ml", img: "assets/images/zhumirseco700ml.png" },
    { name: "Zhumir Seco N 350ml", category: "aguardientes", presentation: "Botella 350ml", img: "assets/images/zhumirsecon350ml.png" },
    { name: "Zhumir Tamarindo", category: "aguardientes", presentation: "Botella 700ml", img: "assets/images/zhumirtamarindo.png" },
    { name: "Zhumir Watermelon 700ml", category: "aguardientes", presentation: "Botella 700ml", img: "assets/images/zhumirwatermelon700ml.png" },
    { name: "Zhumir 125ml", category: "aguardientes", presentation: "Botella 125ml", img: "assets/images/zhumir125ml.png" },
    { name: "593 Lager 600ml", category: "cervezas", presentation: "Botella Retornable 600ml", img: "assets/images/593lager600ml.png" },
    { name: "Amstel 355ml", category: "cervezas", presentation: "Botella/Lata 355ml", img: "assets/images/amstel355ml.png" },
    { name: "Biela 473ml", category: "cervezas", presentation: "Lata Grande 473ml", img: "assets/images/biela473ml.png" },
    { name: "Club Lata 355ml", category: "cervezas", presentation: "Lata 355ml", img: "assets/images/clublata355ml.png" },
    { name: "Club Lata 473ml", category: "cervezas", presentation: "Lata Grande 473ml", img: "assets/images/clublata473ml.png" },
    { name: "Corona Extra 330ml", category: "cervezas", presentation: "Botella 330ml", img: "assets/images/coronaextra330ml.png" },
    { name: "Corona Cero 330ml", category: "cervezas", presentation: "Botella 330ml (Sin Alcohol)", img: "assets/images/coronacero330ml.png" },
    { name: "Coronita Extra 210ml", category: "cervezas", presentation: "Botella Pequeña 210ml", img: "assets/images/coronitaextra210ml.png" },
    { name: "Heineken Original 355ml", category: "cervezas", presentation: "Botella/Lata 355ml", img: "assets/images/heinekenoriginal355ml.png" },
    { name: "Heineken 0.0 Sin Alcohol", category: "cervezas", presentation: "Botella 330ml (Sin Alcohol)", img: "assets/images/heineken00sinalcohol.png" },
    { name: "Modelo Especial 355ml", category: "cervezas", presentation: "Botella 355ml", img: "assets/images/modeloespecial355ml.png" },
    { name: "La Paz Torete Lager 330ml", category: "cervezas", presentation: "Botella 330ml", img: "assets/images/lapaztoretelager330ml.png" },
    { name: "La Paz Oveja 330ml", category: "cervezas", presentation: "Botella 330ml", img: "assets/images/lapazoveja330ml.png" },
    { name: "La Paz Torete BT 330ml", category: "cervezas", presentation: "Botella 330ml", img: "assets/images/lapaztoretebt330ml.png" },
    { name: "Paulaner Weissbier Dunkel 500ml", category: "cervezas", presentation: "Botella Importada 500ml", img: "assets/images/paulanerweissbierdunkel500ml.png" },
    { name: "Paulaner Hefe-Weissbier 500ml", category: "cervezas", presentation: "Botella Importada 500ml", img: "assets/images/paulanerhefeweissbier500ml.png" },
    { name: "Pilsener Lata 355ml", category: "cervezas", presentation: "Lata 355ml", img: "assets/images/pilsenerlata355ml.png" },
    { name: "Pilsener Lata 473ml", category: "cervezas", presentation: "Lata Grande 473ml", img: "assets/images/pilsenerlata473ml.png" },
    { name: "Cerveza Siembra Lata 473ml", category: "cervezas", presentation: "Lata Grande 473ml", img: "assets/images/cervezasiembralata473ml.png" },
    { name: "Cerveza Sol 330ml", category: "cervezas", presentation: "Botella 330ml", img: "assets/images/cervezasol330ml.png" },
    { name: "Stella Artois Botella 330ml", category: "cervezas", presentation: "Botella 330ml", img: "assets/images/stellaartoisbotella330ml.png" },
    { name: "Antagonic Gin 750ml", category: "gin", presentation: "Botella 750ml", img: "assets/images/antagonicgin750ml.png" },
    { name: "Beefeater Dry Gin 750ml", category: "gin", presentation: "Botella 750ml", img: "assets/images/beefeaterdrygin750ml.png" },
    { name: "Bombay Sapphire Gin 750ml", category: "gin", presentation: "Botella 750ml", img: "assets/images/bombaysapphiregin750ml.png" },
    { name: "Crespo Gin Rose 700ml", category: "gin", presentation: "Botella 700ml", img: "assets/images/crespoginrose700ml.png" },
    { name: "Gordon's London Dry Gin 750ml", category: "gin", presentation: "Botella 750ml", img: "assets/images/gordonslondondrygin750ml.png" },
    { name: "Tanqueray London Dry Gin 750ml", category: "gin", presentation: "Botella 750ml", img: "assets/images/tanqueraylondondrygin750ml.png" },
    { name: "Tanqueray Flor de Sevilla Gin 750ml", category: "gin", presentation: "Botella 750ml", img: "assets/images/tanquerayflordesevillagin750ml.png" },
    { name: "Larios London Dry Gin 70cl", category: "gin", presentation: "Botella 700ml", img: "assets/images/larioslondondrygin70cl.png" },
    { name: "Larios Gin Rose 70cl", category: "gin", presentation: "Botella 700ml", img: "assets/images/lariosginrose70cl.png" },
    { name: "W Gin 700ml", category: "gin", presentation: "Botella 700ml", img: "assets/images/wgin700ml.png" },
    { name: "W Gin Rose 750ml", category: "gin", presentation: "Botella 750ml", img: "assets/images/wginrose750ml.png" },
    { name: "Wembley Dry Gin 70cl", category: "gin", presentation: "Botella 700ml", img: "assets/images/wembleydrygin70cl.png" },
    { name: "Under Gin 1 Lt.", category: "gin", presentation: "Botella 1 Litro", img: "assets/images/undergin1lt.png" },
    { name: "Gibson's London Dry Gin 70cl", category: "gin", presentation: "Botella 700ml", img: "assets/images/gibsonslondondrygin70cl.png" },
    { name: "Fosforera BIC", category: "accesorios", presentation: "Encendedor Clásico", img: "assets/images/fosforerabic.png" },
    { name: "Naipe Clásico", category: "accesorios", presentation: "Baraja de Cartas", img: "assets/images/naipeclasico.png" }
];

// --- 2. Element Selectors ---
const productsGrid = document.getElementById("products-grid");
const searchInput = document.getElementById("search-input");
const clearSearch = document.getElementById("clear-search");
const filterTabs = document.querySelectorAll(".filter-tab");
const emptyCategoryBlock = document.getElementById("empty-category-block");
const emptyTitle = document.getElementById("empty-title");
const emptyDescription = document.getElementById("empty-description");
const emptyCtaBtn = document.getElementById("empty-cta-btn");
const noResultsBlock = document.getElementById("no-results-block");

// Mobile menu elements
const hamburger = document.getElementById("hamburger");
const mobileMenuContainer = document.getElementById("mobile-menu-container");
const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
const closeMenu = document.getElementById("close-menu");
const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

// Header and Scroll elements
const header = document.getElementById("header");
const backToTop = document.getElementById("back-to-top");
const navItems = document.querySelectorAll(".nav-item");

// --- 3. State Variables ---
let activeCategory = "all";
let searchQuery = "";

// --- 4. Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // Initial products rendering
    renderCatalog();
    
    // Add cursor-hover tracking coordinates to products catalog grid initially
    initCardTracker();
    
    // Add scroll spy listeners
    window.addEventListener("scroll", handleScrollEffects);
    
    // Event listeners setup
    setupEventListeners();
});

// --- 5. Navigation & UI Event Handlers ---
function setupEventListeners() {
    // Hamburger Menu Toggle
    hamburger.addEventListener("click", toggleMobileMenu);
    closeMenu.addEventListener("click", closeMobileMenu);
    mobileNavOverlay.addEventListener("click", closeMobileMenu);
    
    // Close mobile menu when clicking nav links
    mobileNavItems.forEach(item => {
        item.addEventListener("click", () => {
            closeMobileMenu();
            // Highlight active link manually on click if needed
            mobileNavItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });
    });

    // Category Tabs Filter Clicking
    filterTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            activeCategory = tab.dataset.category;
            
            // If search is active, clear it because category clicking resets scope
            if (searchQuery !== "") {
                searchQuery = "";
                searchInput.value = "";
                clearSearch.style.display = "none";
            }
            
            renderCatalog();
        });
    });

    // Search bar functionality
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        
        // Show clear button if there is text
        if (searchQuery !== "") {
            clearSearch.style.display = "block";
            // Searching globally resets category tabs for ease of use
            filterTabs.forEach(t => t.classList.remove("active"));
            document.getElementById("filter-all").classList.add("active");
            activeCategory = "all";
        } else {
            clearSearch.style.display = "none";
        }
        
        renderCatalog();
    });

    // Clear search button clicking
    clearSearch.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearch.style.display = "none";
        renderCatalog();
    });
}

// Mobile Menu toggles
function toggleMobileMenu() {
    hamburger.classList.toggle("active");
    mobileMenuContainer.classList.toggle("active");
    mobileNavOverlay.classList.toggle("active");
    document.body.style.overflow = mobileMenuContainer.classList.contains("active") ? "hidden" : "";
}

function closeMobileMenu() {
    hamburger.classList.remove("active");
    mobileMenuContainer.classList.remove("active");
    mobileNavOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

// Scrollspy, BackToTop and Header scrolled classes
function handleScrollEffects() {
    const scrollPos = window.scrollY;

    // Header sticky transition
    if (scrollPos > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    // Back to top button visibility
    if (scrollPos > 400) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }

    // Scroll Spy active navigation item
    const sections = ["inicio", "catalogo", "nosotros", "contacto"];
    let currentSection = "inicio";
    
    sections.forEach(secId => {
        const sec = document.getElementById(secId);
        if (sec) {
            const secTop = sec.offsetTop - 100;
            const secHeight = sec.offsetHeight;
            if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
                currentSection = secId;
            }
        }
    });

    // Update desktop header active class
    navItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${currentSection}`) {
            item.classList.add("active");
        }
    });

    // Update mobile menu active class
    mobileNavItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${currentSection}`) {
            item.classList.add("active");
        }
    });
}

// --- 6. Catalog Rendering & Filtration ---
function renderCatalog() {
    // 1. Get products matching search query
    let filtered = PRODUCTS;
    if (searchQuery !== "") {
        filtered = PRODUCTS.filter(prod => 
            prod.name.toLowerCase().includes(searchQuery) ||
            prod.category.toLowerCase().includes(searchQuery) ||
            prod.presentation.toLowerCase().includes(searchQuery)
        );
    }
    // 2. Filter by category if not "all"
    else if (activeCategory !== "all") {
        filtered = PRODUCTS.filter(prod => prod.category === activeCategory);
    }

    // Define empty categories (categories that exist but have no actual products in the PDF catalog)
    const EMPTY_CATEGORIES = ["ron", "tequila", "vodka", "whiscky", "vino", "espumantes", "hierbas", "saborizados", "varios"];

    // Check if category is empty
    if (EMPTY_CATEGORIES.includes(activeCategory) && searchQuery === "") {
        productsGrid.style.display = "none";
        noResultsBlock.style.display = "none";
        
        // Setup details for empty category consult block
        let catNameClean = getCategoryNameSpanish(activeCategory);
        emptyTitle.innerText = `Variedad en ${catNameClean} Premium`;
        emptyDescription.innerText = `Contamos con una variada selección de marcas de ${catNameClean} (nacionales e importados) en nuestro local físico. Escríbenos directamente para consultar las opciones y formatos de presentación disponibles en este momento.`;
        
        // Customize WA link
        let message = `Hola, estoy interesado en conocer las marcas y presentaciones de ${catNameClean} que tienen disponibles en local.`;
        emptyCtaBtn.setAttribute("href", `https://wa.me/593983417971?text=${encodeURIComponent(message)}`);
        
        emptyCategoryBlock.style.display = "block";
    } else {
        emptyCategoryBlock.style.display = "none";
        
        if (filtered.length === 0) {
            productsGrid.style.display = "none";
            noResultsBlock.style.display = "block";
        } else {
            noResultsBlock.style.display = "none";
            productsGrid.style.display = "grid";
            
            // Build cards HTML
            productsGrid.innerHTML = filtered.map(prod => {
                let waMessage = `Hola, estoy interesado en el licor ${prod.name}. ¿Me ayudas con el precio o la presentación que dispone?`;
                let waLink = `https://wa.me/593983417971?text=${encodeURIComponent(waMessage)}`;
                
                return `
                    <div class="product-card" data-category="${prod.category}">
                        <div class="product-image-wrapper">
                            <span class="category-badge">${getCategoryNameSpanish(prod.category)}</span>
                            <img src="${prod.img}" alt="${prod.name}" class="product-image" loading="lazy">
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${prod.name}</h3>
                            <p class="product-presentation"><i class="fas fa-layer-group text-gold"></i> ${prod.presentation}</p>
                            <a href="${waLink}" target="_blank" rel="noopener" class="btn product-cta-btn">
                                <i class="fab fa-whatsapp"></i> Pedir por WhatsApp
                            </a>
                        </div>
                    </div>
                `;
            }).join("");
            
            // Re-initialize hover mouse coordinates listener for new elements
            initCardTracker();
        }
    }
}

// Utility to get Spanish name for categories
function getCategoryNameSpanish(cat) {
    const names = {
        all: "Todos",
        aguardientes: "Aguardientes",
        cervezas: "Cervezas",
        gin: "Gin",
        ron: "Ron",
        tequila: "Tequila",
        vodka: "Vodka",
        whiscky: "Whisky",
        vino: "Vino",
        espumantes: "Espumantes",
        hierbas: "Hierbas",
        saborizados: "Saborizados",
        accesorios: "Accesorios",
        varios: "Varios"
    };
    return names[cat] || cat;
}

// --- 7. Mouse Tracker Effect for premium glass shine (3D-ish borders) ---
function initCardTracker() {
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}
