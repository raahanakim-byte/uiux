document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  var themeToggle = document.querySelector(".theme-toggle");
  var backToTop = document.querySelector(".back-to-top");
  var nav = document.querySelector(".site-nav");

  // Mobile nav toggle
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      toggle.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("open");
      });
    });
  }

  // Theme toggle
  if (themeToggle) {
    var savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === "dark") {
      themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
    }
  }

  // Back to top
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Nav background on scroll
  if (nav) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }

  // Scroll reveal animations
  var revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  // Active nav link on scroll
  var sections = document.querySelectorAll("section[id]");
  if (sections.length > 0) {
    var navLinks = document.querySelectorAll(".nav-links a:not(.theme-toggle)");

    window.addEventListener("scroll", function () {
      var current = "";
      sections.forEach(function (section) {
        var top = section.offsetTop - 200;
        if (window.scrollY >= top) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(function (link) {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });
  }
});
