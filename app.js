const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      document.body.classList.remove("nav-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}
