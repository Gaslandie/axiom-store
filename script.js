const products = [
  {
    name: "Smartphone Nova X 128 Go",
    category: "Électronique",
    price: "2 650 000 GNF",
    oldPrice: "2 850 000 GNF",
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=640&q=82",
    alt: "Smartphone moderne posé sur une surface claire"
  },
  {
    name: "Casque Bluetooth Pulse",
    category: "Accessoires",
    price: "390 000 GNF",
    oldPrice: "",
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=640&q=82",
    alt: "Casque audio noir"
  },
  {
    name: "Sac urbain compact",
    category: "Mode",
    price: "275 000 GNF",
    oldPrice: "",
    badge: "",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=640&q=82",
    alt: "Sac à dos urbain"
  },
  {
    name: "Montre connectée Fit One",
    category: "Objets connectés",
    price: "520 000 GNF",
    oldPrice: "610 000 GNF",
    badge: "Bon plan",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=640&q=82",
    alt: "Montre connectée sur fond jaune"
  },
  {
    name: "Baskets Street Flex",
    category: "Mode",
    price: "430 000 GNF",
    oldPrice: "",
    badge: "Tendance",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=640&q=82",
    alt: "Baskets colorées"
  },
  {
    name: "Clavier compact sans fil",
    category: "Accessoires tech",
    price: "310 000 GNF",
    oldPrice: "",
    badge: "",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=640&q=82",
    alt: "Clavier compact sur un bureau"
  },
  {
    name: "Lunettes solaires Meridian",
    category: "Accessoires",
    price: "165 000 GNF",
    oldPrice: "",
    badge: "Nouveau",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=640&q=82",
    alt: "Lunettes solaires sur fond clair"
  },
  {
    name: "Enceinte portable Mini Bass",
    category: "Audio",
    price: "245 000 GNF",
    oldPrice: "295 000 GNF",
    badge: "Promo",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=640&q=82",
    alt: "Enceinte portable compacte"
  }
];

const grid = document.querySelector("[data-product-grid]");
const menuToggle = document.querySelector(".menu-toggle");
const mobilePanel = document.querySelector(".mobile-panel");
const homePage = document.querySelector(".home-page");
const constructionPage = document.querySelector(".construction-page");
const routeLabel = document.querySelector("[data-route-label]");
const searchForms = document.querySelectorAll("form[role='search']");

const routeNames = {
  "/boutique": "Boutique",
  "/categories": "Catégories",
  "/services": "Services",
  "/about": "À propos",
  "/contact": "Contact",
  "/mentions-legales": "Mentions légales"
};

function renderProducts(items) {
  grid.innerHTML = items
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.alt}" loading="lazy">
            ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
          </div>
          <div class="product-body">
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <div class="price-row">
              <span class="price">${product.price}</span>
              ${product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ""}
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

function showCurrentRoute() {
  const isHome = window.location.pathname === "/";
  homePage.hidden = !isHome;
  constructionPage.hidden = isHome;

  if (!isHome) {
    const label = routeNames[window.location.pathname] || "Section";
    routeLabel.textContent = label;
    document.title = `${label} en construction | Axiom Store`;
  }
}

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Ouvrir le menu" : "Fermer le menu");
  mobilePanel.hidden = expanded;
});

searchForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    const term = input.value.trim().toLowerCase();

    if (window.location.pathname !== "/") {
      window.location.href = "/";
      return;
    }

    if (!term) {
      renderProducts(products);
      document.querySelector("#featured-products").scrollIntoView({ behavior: "smooth" });
      return;
    }

    const filtered = products.filter((product) =>
      `${product.name} ${product.category}`.toLowerCase().includes(term)
    );

    renderProducts(filtered.length ? filtered : products);
    document.querySelector("#featured-products").scrollIntoView({ behavior: "smooth" });
  });
});

renderProducts(products);
showCurrentRoute();
