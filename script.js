document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");
  const navToggle = document.querySelector(".nav-toggle");
  const header = document.querySelector(".site-header");

  if (themeToggle) {
    const savedTheme = localStorage.getItem("northstar-theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
      themeToggle.textContent = "☀";
    }

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      const isDark = body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? "☀" : "☾";
      localStorage.setItem("northstar-theme", isDark ? "dark" : "light");
    });
  }

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("menu-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll(".newsletter form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      const input = form.querySelector("input");

      if (!input.value.trim()) {
        input.focus();
        return;
      }

      button.textContent = "Subscribed";
      button.disabled = true;
      input.value = "";
      input.placeholder = "Thanks for joining!";
    });
  });
});
