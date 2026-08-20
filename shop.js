const shopProducts = [
  {
    name: "Smartphone Nova X 128 Go",
    category: "Électronique",
    price: 2650000,
    oldPrice: 2850000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Smartphone moderne posé sur une surface claire"
  },
  {
    name: "Casque Bluetooth Pulse",
    category: "Audio",
    price: 390000,
    oldPrice: null,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Casque audio utilisé avec un smartphone"
  },
  {
    name: "Sac urbain compact",
    category: "Mode",
    price: 275000,
    oldPrice: null,
    badge: "",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Sac à dos urbain bleu"
  },
  {
    name: "Montre connectée Fit One",
    category: "Électronique",
    price: 520000,
    oldPrice: 610000,
    badge: "Bon plan",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Montre connectée sur fond jaune"
  },
  {
    name: "Baskets Street Flex",
    category: "Mode",
    price: 430000,
    oldPrice: null,
    badge: "Tendance",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Baskets rouges"
  },
  {
    name: "Clavier compact sans fil",
    category: "Accessoires tech",
    price: 310000,
    oldPrice: null,
    badge: "",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Clavier compact blanc"
  },
  {
    name: "Lunettes solaires Meridian",
    category: "Accessoires",
    price: 165000,
    oldPrice: null,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Lunettes solaires sur fond clair"
  },
  {
    name: "Enceinte portable Mini Bass",
    category: "Audio",
    price: 245000,
    oldPrice: 295000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Enceinte portable compacte"
  },
  {
    name: "T-shirt Premium Essential",
    category: "Mode",
    price: 145000,
    oldPrice: null,
    badge: "",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "T-shirt blanc porté"
  },
  {
    name: "Chargeur rapide USB-C",
    category: "Accessoires tech",
    price: 185000,
    oldPrice: null,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Chargeur et câble USB-C"
  },
  {
    name: "Sacoche ordinateur Nomad",
    category: "Accessoires",
    price: 230000,
    oldPrice: null,
    badge: "",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Sacoche de travail posée sur une table"
  },
  {
    name: "Pack assistance produit",
    category: "Services",
    price: 120000,
    oldPrice: null,
    badge: "Service",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Conseillers discutant autour d'un ordinateur"
  }
];

const state = {
  category: "Tous",
  query: "",
  sort: "featured"
};

const formatter = new Intl.NumberFormat("fr-FR");
const grid = document.querySelector("[data-shop-grid]");
const count = document.querySelector("[data-result-count]");
const emptyState = document.querySelector("[data-empty-state]");
const categoryFilters = document.querySelector("[data-category-filters]");
const sortSelect = document.querySelector("[data-sort-products]");
const searchForms = document.querySelectorAll("[data-shop-search]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobilePanel = document.querySelector("[data-mobile-panel]");

const params = new URLSearchParams(window.location.search);
const initialQuery = params.get("q");
const initialCategory = params.get("category");

if (initialQuery) state.query = initialQuery.trim();
if (initialCategory) state.category = initialCategory;

function formatPrice(value) {
  return `${formatter.format(value)} GNF`;
}

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getCategories() {
  return ["Tous", ...new Set(shopProducts.map((product) => product.category))];
}

function getFilteredProducts() {
  if (!getCategories().includes(state.category)) state.category = "Tous";

  const query = normalize(state.query);
  let items = shopProducts.filter((product) => {
    const matchesCategory = state.category === "Tous" || product.category === state.category;
    const matchesQuery = !query || normalize(`${product.name} ${product.category}`).includes(query);
    return matchesCategory && matchesQuery;
  });

  if (state.sort === "price-asc") items = [...items].sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
  if (state.sort === "name") items = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return items;
}

function renderFilters() {
  categoryFilters.innerHTML = getCategories()
    .map(
      (category) => `
        <button class="${category === state.category ? "active" : ""}" type="button" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join("");
}

function renderProducts() {
  const items = getFilteredProducts();
  count.textContent = `${items.length} produit${items.length > 1 ? "s" : ""}`;
  emptyState.hidden = items.length > 0;

  grid.innerHTML = items
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.alt}" loading="lazy" decoding="async">
            ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
          </div>
          <div class="product-body">
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <div class="price-row">
              <span class="price">${formatPrice(product.price)}</span>
              ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
            </div>
            <a class="button secondary" href="https://wa.me/224000000000" target="_blank" rel="noreferrer">
              Commander
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

function updateShop() {
  renderFilters();
  renderProducts();
}

searchForms.forEach((form) => {
  const input = form.querySelector("input");
  if (input) input.value = state.query;
});

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  updateShop();
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderProducts();
});

searchForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    state.query = input.value.trim();
    renderProducts();
    document.querySelector("#catalog-title").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Ouvrir le menu" : "Fermer le menu");
  mobilePanel.hidden = expanded;
});

updateShop();
