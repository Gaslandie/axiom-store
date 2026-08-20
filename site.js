const menuToggle = document.querySelector("[data-menu-toggle]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const searchForms = document.querySelectorAll("[data-site-search]");
const contactForm = document.querySelector("[data-contact-form]");

if (menuToggle && mobilePanel) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute("aria-label", expanded ? "Ouvrir le menu" : "Fermer le menu");
    mobilePanel.hidden = expanded;
  });
}

searchForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    const query = input.value.trim();
    const base = form.dataset.searchTarget || "../boutique/";
    const target = query ? `${base}?q=${encodeURIComponent(query)}` : base;
    window.location.href = target;
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const message = [
      "Bonjour Axiom Store,",
      `Nom : ${data.get("name") || ""}`,
      `Téléphone : ${data.get("phone") || ""}`,
      `Besoin : ${data.get("need") || ""}`,
      `Message : ${data.get("message") || ""}`
    ].join("\n");

    window.open(`https://wa.me/224000000000?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
}
