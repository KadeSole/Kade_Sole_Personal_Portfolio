"use strict";

const sidebar = document.querySelector("[data-sidebar]");
const sidebarButton = document.querySelector("[data-sidebar-btn]");
const sidebarDetails = document.querySelector("[data-sidebar-details]");

const navigationLinks = Array.from(
  document.querySelectorAll("[data-nav-link]")
);

const pages = Array.from(document.querySelectorAll("[data-page]"));

const desktopMediaQuery = window.matchMedia("(min-width: 1250px)");

const validPageNames = new Set(
  pages.map((page) => page.dataset.page)
);

const updateSidebarAccessibility = () => {
  if (!sidebar || !sidebarButton || !sidebarDetails) {
    return;
  }

  const isDesktop = desktopMediaQuery.matches;
  const isExpanded =
    isDesktop || sidebar.classList.contains("active");

  sidebarButton.setAttribute("aria-expanded", String(isExpanded));
  sidebarDetails.setAttribute("aria-hidden", String(!isExpanded));
};

const setSidebarState = (expanded) => {
  if (!sidebar || !sidebarButton || !sidebarDetails) {
    return;
  }

  sidebar.classList.toggle("active", expanded);
  updateSidebarAccessibility();
};

if (sidebar && sidebarButton && sidebarDetails) {
  sidebarButton.addEventListener("click", () => {
    const isExpanded = sidebar.classList.contains("active");
    setSidebarState(!isExpanded);
  });

  if (typeof desktopMediaQuery.addEventListener === "function") {
    desktopMediaQuery.addEventListener(
      "change",
      updateSidebarAccessibility
    );
  } else {
    desktopMediaQuery.addListener(updateSidebarAccessibility);
  }

  updateSidebarAccessibility();
}

const getPageNameFromHash = () => {
  const requestedPage = window.location.hash.replace("#", "");

  return validPageNames.has(requestedPage)
    ? requestedPage
    : "about";
};

const activatePage = (
  targetName,
  { updateHistory = true, moveFocus = true } = {}
) => {
  if (!validPageNames.has(targetName)) {
    return;
  }

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

  if (updateHistory) {
    const nextHash = `#${targetName}`;

    if (window.location.hash !== nextHash) {
      window.history.pushState(
        { page: targetName },
        "",
        nextHash
      );
    }
  }

  window.scrollTo(0, 0);

  if (moveFocus && activePage) {
    activePage.focus({ preventScroll: true });
  }
};

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activatePage(link.dataset.navTarget);
  });
});

window.addEventListener("popstate", () => {
  activatePage(getPageNameFromHash(), {
    updateHistory: false,
    moveFocus: false
  });
});

window.addEventListener("hashchange", () => {
  activatePage(getPageNameFromHash(), {
    updateHistory: false,
    moveFocus: false
  });
});

activatePage(getPageNameFromHash(), {
  updateHistory: false,
  moveFocus: false
});