const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const revealItems = document.querySelectorAll(".reveal");
const menuTabs = document.querySelectorAll("[data-menu-tab]");
const menuPanels = document.querySelectorAll("[data-menu-panel]");
const reservationForm = document.querySelector("[data-reservation-form]");
const formMessage = document.querySelector("[data-form-message]");
const tableButtons = document.querySelectorAll("[data-table]");
const selectedTable = document.querySelector("[data-selected-table]");
const tableInput = document.querySelector("[data-table-input]");

const setHeaderState = () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (nav && navToggle) {
  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.menuTab;

    menuTabs.forEach((item) => item.classList.toggle("active", item === tab));
    menuPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.menuPanel === target);
    });
  });
});

tableButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const table = button.dataset.table;

    tableButtons.forEach((item) => item.classList.toggle("selected", item === button));
    if (selectedTable) {
      selectedTable.textContent = table;
    }
    if (tableInput) {
      tableInput.value = table;
    }
    window.sessionStorage.setItem("margarethenhofTableWish", table);
  });
});

if (tableInput) {
  const savedTableWish = window.sessionStorage.getItem("margarethenhofTableWish");
  if (savedTableWish) {
    tableInput.value = savedTableWish;
  }
}

if (reservationForm && formMessage) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent =
      "Demo: Ihre Anfrage wurde nicht gesendet. In der echten Version wuerde hier eine Anfrage an das Restaurant gehen.";
    reservationForm.reset();
  });
}
