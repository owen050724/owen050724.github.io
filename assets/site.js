(() => {
  const body = document.body;
  const sidebar = document.querySelector("#site-sidebar");
  const toggle = document.querySelector("[data-nav-toggle]");
  const toggleLabel = toggle ? toggle.querySelector(".visually-hidden") : null;
  const closeControls = Array.from(document.querySelectorAll("[data-nav-close]"));
  const backgroundElements = [
    document.querySelector(".skip-link"),
    document.querySelector(".mobile-header"),
    document.querySelector(".site-main"),
  ].filter(Boolean);
  const mobileViewport = window.matchMedia("(max-width: 899px)");
  let lastFocused = null;

  if (body && sidebar && toggle) {
    const sidebarFocusables = Array.from(
      sidebar.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );

    sidebarFocusables.forEach((element) => {
      const tabindex = element.getAttribute("tabindex");
      if (tabindex !== null) element.dataset.originalTabindex = tabindex;
    });

    const restoreTabOrder = () => {
      sidebarFocusables.forEach((element) => {
        if (Object.prototype.hasOwnProperty.call(element.dataset, "originalTabindex")) {
          element.setAttribute("tabindex", element.dataset.originalTabindex);
        } else {
          element.removeAttribute("tabindex");
        }
      });
    };

    const removeFromTabOrder = () => {
      sidebarFocusables.forEach((element) => element.setAttribute("tabindex", "-1"));
    };

    const isOpen = () => body.classList.contains("nav-open");

    const setBackgroundInactive = (inactive) => {
      backgroundElements.forEach((element) => {
        element.inert = inactive;
        if (inactive) element.setAttribute("aria-hidden", "true");
        else element.removeAttribute("aria-hidden");
      });
    };

    const syncNavigation = () => {
      if (!mobileViewport.matches) {
        const wasOpen = isOpen();
        body.classList.remove("nav-open");
        body.classList.remove("nav-scroll-lock");
        setBackgroundInactive(false);
        sidebar.removeAttribute("aria-hidden");
        sidebar.inert = false;
        toggle.setAttribute("aria-expanded", "false");
        if (toggleLabel) toggleLabel.textContent = "Open navigation";
        restoreTabOrder();
        if (wasOpen && sidebar.contains(document.activeElement)) {
          const currentLink = sidebar.querySelector('a[aria-current="page"]') || sidebar.querySelector("a[href]");
          if (currentLink) currentLink.focus();
        }
        return;
      }

      const open = isOpen();
      sidebar.setAttribute("aria-hidden", String(!open));
      sidebar.inert = !open;
      toggle.setAttribute("aria-expanded", String(open));
      if (toggleLabel) toggleLabel.textContent = open ? "Close navigation" : "Open navigation";
      body.classList.toggle("nav-scroll-lock", open);
      setBackgroundInactive(open);
      if (open) {
        restoreTabOrder();
      } else {
        removeFromTabOrder();
      }
    };

    const openNavigation = () => {
      if (!mobileViewport.matches || isOpen()) return;
      lastFocused = document.activeElement;
      body.classList.add("nav-open");
      sidebar.removeAttribute("aria-hidden");
      sidebar.inert = false;
      restoreTabOrder();
      const closeButton = sidebar.querySelector(".nav-close");
      if (closeButton) closeButton.focus();
      syncNavigation();
    };

    const closeNavigation = (restoreFocus = true) => {
      if (!mobileViewport.matches) return;
      setBackgroundInactive(false);
      body.classList.remove("nav-open");
      if (restoreFocus && lastFocused instanceof HTMLElement) lastFocused.focus();
      syncNavigation();
    };

    toggle.addEventListener("click", () => {
      if (isOpen()) closeNavigation();
      else openNavigation();
    });

    closeControls.forEach((control) => {
      control.addEventListener("click", () => closeNavigation());
    });

    sidebar.querySelectorAll("a[href]").forEach((link) => {
      link.addEventListener("click", () => closeNavigation());
    });

    document.addEventListener("keydown", (event) => {
      if (!mobileViewport.matches || !isOpen()) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeNavigation();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = sidebarFocusables.filter((element) => element.getAttribute("tabindex") !== "-1");
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    if (typeof mobileViewport.addEventListener === "function") {
      mobileViewport.addEventListener("change", syncNavigation);
    } else {
      mobileViewport.addListener(syncNavigation);
    }

    document.documentElement.classList.replace("no-js", "nav-enhanced");
    syncNavigation();
  }

  const typedNames = Array.from(document.querySelectorAll(".typed-name[data-text]"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (typedNames.length === 0 || reduceMotion) return;

  typedNames.forEach((name) => {
    name.textContent = "";
  });

  const typeName = (name) =>
    new Promise((resolve) => {
      const text = name.dataset.text || "";
      let index = 0;
      name.classList.add("is-typing");

      const typeNext = () => {
        index += 1;
        name.textContent = text.slice(0, index);
        if (index < text.length) {
          window.setTimeout(typeNext, 65);
          return;
        }
        name.classList.remove("is-typing");
        name.classList.add("is-typed");
        window.setTimeout(resolve, 90);
      };

      typeNext();
    });

  window.setTimeout(async () => {
    for (const name of typedNames) await typeName(name);
    document.documentElement.classList.add("typing-complete");
  }, 100);
})();
