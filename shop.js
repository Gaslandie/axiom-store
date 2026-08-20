const shopProducts = [
  {
    id: "smartphone-nova-x",
    ref: "AX-001",
    name: "Smartphone Nova X 128 Go",
    category: "Électronique",
    price: 2650000,
    oldPrice: 2850000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Smartphone moderne posé sur une surface claire"
  },
  {
    id: "casque-bluetooth-pulse",
    ref: "AX-002",
    name: "Casque Bluetooth Pulse",
    category: "Audio",
    price: 390000,
    oldPrice: null,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Casque audio utilisé avec un smartphone"
  },
  {
    id: "sac-urbain-compact",
    ref: "AX-003",
    name: "Sac urbain compact",
    category: "Mode",
    price: 275000,
    oldPrice: null,
    badge: "",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Sac à dos urbain bleu"
  },
  {
    id: "montre-connectee-fit-one",
    ref: "AX-004",
    name: "Montre connectée Fit One",
    category: "Électronique",
    price: 520000,
    oldPrice: 610000,
    badge: "Bon plan",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Montre connectée sur fond jaune"
  },
  {
    id: "baskets-street-flex",
    ref: "AX-005",
    name: "Baskets Street Flex",
    category: "Mode",
    price: 430000,
    oldPrice: null,
    badge: "Tendance",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Baskets rouges"
  },
  {
    id: "clavier-compact-sans-fil",
    ref: "AX-006",
    name: "Clavier compact sans fil",
    category: "Accessoires tech",
    price: 310000,
    oldPrice: null,
    badge: "",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Clavier compact blanc"
  },
  {
    id: "lunettes-solaires-meridian",
    ref: "AX-007",
    name: "Lunettes solaires Meridian",
    category: "Accessoires",
    price: 165000,
    oldPrice: null,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Lunettes solaires sur fond clair"
  },
  {
    id: "enceinte-portable-mini-bass",
    ref: "AX-008",
    name: "Enceinte portable Mini Bass",
    category: "Audio",
    price: 245000,
    oldPrice: 295000,
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Enceinte portable compacte"
  },
  {
    id: "tshirt-premium-essential",
    ref: "AX-009",
    name: "T-shirt Premium Essential",
    category: "Mode",
    price: 145000,
    oldPrice: null,
    badge: "",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "T-shirt blanc porté"
  },
  {
    id: "chargeur-rapide-usb-c",
    ref: "AX-010",
    name: "Chargeur rapide USB-C",
    category: "Accessoires tech",
    price: 185000,
    oldPrice: null,
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Chargeur et câble USB-C"
  },
  {
    id: "sacoche-ordinateur-nomad",
    ref: "AX-011",
    name: "Sacoche ordinateur Nomad",
    category: "Accessoires",
    price: 230000,
    oldPrice: null,
    badge: "",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&fm=webp&w=640&q=78",
    alt: "Sacoche de travail posée sur une table"
  },
  {
    id: "pack-assistance-produit",
    ref: "AX-012",
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

const WHATSAPP_NUMBER = "224620343586";
const CART_STORAGE_KEY = "axiom-store-cart";
const formatter = new Intl.NumberFormat("fr-FR");
const grid = document.querySelector("[data-shop-grid]");
const count = document.querySelector("[data-result-count]");
const emptyState = document.querySelector("[data-empty-state]");
const categoryFilters = document.querySelector("[data-category-filters]");
const sortSelect = document.querySelector("[data-sort-products]");
const searchForms = document.querySelectorAll("[data-shop-search]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartBackdrop = document.querySelector("[data-cart-backdrop]");
const cartToggleButtons = document.querySelectorAll("[data-cart-toggle]");
const cartClose = document.querySelector("[data-cart-close]");
const cartItemsContainer = document.querySelector("[data-cart-items]");
const cartEmpty = document.querySelector("[data-cart-empty]");
const cartSummary = document.querySelector("[data-cart-summary]");
const cartTotal = document.querySelector("[data-cart-total]");
const cartWhatsapp = document.querySelector("[data-cart-whatsapp]");
const cartClear = document.querySelector("[data-cart-clear]");
const cartCountElements = document.querySelectorAll("[data-cart-count]");
const cartToast = document.querySelector("[data-cart-toast]");

const params = new URLSearchParams(window.location.search);
const initialQuery = params.get("q");
const initialCategory = params.get("category");

if (initialQuery) state.query = initialQuery.trim();
if (initialCategory) state.category = initialCategory;

let cart = loadCart();
let toastTimer;

function formatPrice(value) {
  return `${formatter.format(value)} GNF`;
}

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getCategories() {
  return ["Tous", ...new Set(shopProducts.map((product) => product.category))];
}

function getProductById(id) {
  return shopProducts.find((product) => product.id === id);
}

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    if (!Array.isArray(stored)) return [];
    return stored
      .filter((item) => item && getProductById(item.id))
      .map((item) => ({ id: item.id, quantity: Math.max(1, Number(item.quantity) || 1) }));
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch {
    return;
  }
}

function getCartItems() {
  return cart
    .map((item) => ({ ...item, product: getProductById(item.id) }))
    .filter((item) => item.product);
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
  return getCartItems().reduce((total, item) => total + item.product.price * item.quantity, 0);
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
            <button class="button secondary" type="button" data-add-to-cart="${product.id}">
              Ajouter au panier
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function buildWhatsappMessage() {
  const items = getCartItems();
  const lines = [
    "Bonjour Axiom Store,",
    "Je souhaite commander les produits suivants :",
    ""
  ];

  items.forEach((item, index) => {
    const lineTotal = item.product.price * item.quantity;
    lines.push(
      `${index + 1}. ${item.product.name}`,
      `Réf : ${item.product.ref}`,
      `Catégorie : ${item.product.category}`,
      `Quantité : ${item.quantity}`,
      `Prix unitaire : ${formatPrice(item.product.price)}`,
      `Sous-total : ${formatPrice(lineTotal)}`,
      ""
    );
  });

  lines.push(`Total estimatif : ${formatPrice(getCartTotal())}`);
  lines.push("Merci de me confirmer la disponibilité et les modalités.");
  return lines.join("\n");
}

function renderCart() {
  const items = getCartItems();
  const totalCount = getCartCount();

  cartCountElements.forEach((element) => {
    element.textContent = totalCount;
  });

  cartEmpty.hidden = items.length > 0;
  cartSummary.hidden = items.length === 0;
  cartTotal.textContent = formatPrice(getCartTotal());
  cartWhatsapp.href = items.length
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsappMessage())}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;
  cartWhatsapp.setAttribute("aria-disabled", String(items.length === 0));

  cartItemsContainer.innerHTML = items
    .map(
      (item) => `
        <article class="cart-item">
          <img src="${item.product.image}" alt="${item.product.alt}" loading="lazy" decoding="async">
          <div>
            <span>${item.product.ref} · ${item.product.category}</span>
            <h3>${item.product.name}</h3>
            <p>${formatPrice(item.product.price)} / unité</p>
            <div class="cart-item-controls">
              <button type="button" data-cart-action="decrease" data-cart-product="${item.id}" aria-label="Retirer une unité">-</button>
              <strong>${item.quantity}</strong>
              <button type="button" data-cart-action="increase" data-cart-product="${item.id}" aria-label="Ajouter une unité">+</button>
              <button type="button" data-cart-action="remove" data-cart-product="${item.id}">Supprimer</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function showToast(message) {
  cartToast.textContent = message;
  cartToast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    cartToast.hidden = true;
  }, 2200);
}

function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast(`${product.name} ajouté au panier`);
}

function updateCartQuantity(productId, quantity) {
  cart = cart
    .map((item) => (item.id === productId ? { ...item, quantity } : item))
    .filter((item) => item.quantity > 0);
  saveCart();
  renderCart();
}

function openCart() {
  cartDrawer.hidden = false;
  cartBackdrop.hidden = false;
  document.body.classList.add("cart-open");
  cartToggleButtons.forEach((button) => button.setAttribute("aria-expanded", "true"));
}

function closeCart() {
  cartDrawer.hidden = true;
  cartBackdrop.hidden = true;
  document.body.classList.remove("cart-open");
  cartToggleButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
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

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-to-cart]");
  if (!button) return;
  addToCart(button.dataset.addToCart);
});

cartItemsContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;

  const item = cart.find((cartItem) => cartItem.id === button.dataset.cartProduct);
  if (!item) return;

  if (button.dataset.cartAction === "increase") updateCartQuantity(item.id, item.quantity + 1);
  if (button.dataset.cartAction === "decrease") updateCartQuantity(item.id, item.quantity - 1);
  if (button.dataset.cartAction === "remove") updateCartQuantity(item.id, 0);
});

cartToggleButtons.forEach((button) => button.addEventListener("click", openCart));
cartClose.addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);
cartClear.addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cartDrawer.hidden) closeCart();
});

updateShop();
renderCart();
