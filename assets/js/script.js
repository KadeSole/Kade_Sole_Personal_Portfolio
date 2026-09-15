"use strict";

const sidebar = document.querySelector("[data-sidebar]");
const sidebarButton = document.querySelector("[data-sidebar-btn]");
const sidebarDetails = document.querySelector("[data-sidebar-details]");

const setSidebarState = (expanded) => {
  if (!sidebar || !sidebarButton || !sidebarDetails) {
    return;
  }

  sidebar.classList.toggle("active", expanded);
  sidebarButton.setAttribute("aria-expanded", String(expanded));
  sidebarDetails.setAttribute("aria-hidden", String(!expanded));
};

if (sidebar && sidebarButton && sidebarDetails) {
  sidebarButton.addEventListener("click", () => {
    const isExpanded =
      sidebarButton.getAttribute("aria-expanded") === "true";

    setSidebarState(!isExpanded);
  });

  const desktopMediaQuery = window.matchMedia("(min-width: 1250px)");

  const synchronizeSidebarForViewport = (event) => {
    if (event.matches) {
      sidebarDetails.setAttribute("aria-hidden", "false");
      return;
    }

    const isExpanded = sidebar.classList.contains("active");
    sidebarButton.setAttribute("aria-expanded", String(isExpanded));
    sidebarDetails.setAttribute("aria-hidden", String(!isExpanded));
  };

  synchronizeSidebarForViewport(desktopMediaQuery);
  desktopMediaQuery.addEventListener(
    "change",
    synchronizeSidebarForViewport
  );
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const activatePage = (targetName) => {
  let activePage = null;

  pages.forEach((page) => {
    const isActive = page.dataset.page === targetName;

    page.classList.toggle("active", isActive);
    page.hidden = !isActive;

    if (isActive) {
      activePage = page;
    }
  });

  navigationLinks.forEach((link) => {
    const isActive = link.dataset.navTarget === targetName;

    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  window.scrollTo({ top: 0, behavior: "auto" });

  if (activePage) {
    activePage.focus({ preventScroll: true });
  }
};

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activatePage(link.dataset.navTarget);
  });
});