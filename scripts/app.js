(function () {
  const content = window.LAB_CONTENT;

  function externalTarget(link) {
    return link.startsWith("#") ? "_self" : "_blank";
  }

  function externalRel(link) {
    return link.startsWith("#") ? "" : ' rel="noreferrer"';
  }

  function renderContent() {
    document.querySelector("#erip-slideshow").innerHTML = `
      <div class="erip-slide-frame">
        ${content.eripSlides
          .map(
            (slide, index) => `
            <figure class="erip-slide ${index === 0 ? "is-active" : ""}" data-slide-index="${index}">
              <a href="${slide.fallback}" target="_blank" rel="noreferrer" aria-label="Open ${slide.label}">
                <picture>
                  <source srcset="${slide.image}" type="image/webp" />
                  <img src="${slide.fallback}" alt="${slide.alt}" loading="${index === 0 ? "eager" : "lazy"}" />
                </picture>
              </a>
            </figure>
          `
          )
          .join("")}
      </div>
    `;

    const researchGrid = document.querySelector("#research-grid");
    if (researchGrid) {
      researchGrid.innerHTML = content.researchThemes
        .map(
          (theme) => `
          <a class="research-card" href="${theme.link}" target="${externalTarget(theme.link)}"${externalRel(theme.link)}>
            <span class="card-eyebrow">${theme.eyebrow}</span>
            <h3>${theme.title}</h3>
            <p>${theme.summary}</p>
            <div class="tag-list">${theme.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            <span class="card-link">Read source</span>
          </a>
        `
        )
        .join("");
    }

    const renderProgramCard = (item, isPrimary = false) => `
        <article class="program-card ${isPrimary ? "program-card-primary" : ""}">
          <picture>
            <source srcset="${item.image}" type="image/webp" />
            <img src="${item.fallback}" alt="${item.alt}" loading="lazy" />
          </picture>
          <div>
            <span>${item.label}</span>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </div>
        </article>
      `;

    document.querySelector("#program-grid").innerHTML = content.programImages
      .map((item, index) => renderProgramCard(item, index === 0))
      .join("");

    document.querySelector("#process-steps").innerHTML = content.processSteps
      .map(
        (step, index) => `
        <article class="process-step ${index === 0 ? "is-active" : ""}" data-step-index="${index}">
          <code>${step.short}</code>
          <div>
            <strong>${String(index + 1).padStart(2, "0")} / ${step.title}</strong>
            <span>${step.detail}</span>
          </div>
        </article>
      `
      )
      .join("");

    document.querySelector("#publication-list").innerHTML = content.publications
      .map(
        (paper) => `
        <article class="publication-card ${paper.featured ? "featured" : ""}">
          <div class="publication-meta">
            <div class="publication-year">${paper.year}</div>
            <div class="publication-source">${paper.source}</div>
            ${
              paper.image
                ? `<button
                    class="publication-preview"
                    type="button"
                    data-lightbox-src="${encodeURIComponent(paper.image.fallback)}"
                    data-lightbox-webp="${encodeURIComponent(paper.image.src)}"
                    data-lightbox-alt="${encodeURIComponent(paper.image.alt)}"
                    data-lightbox-title="${encodeURIComponent(paper.title)}"
                    aria-label="Open larger image for ${paper.title}"
                  >
                    <picture>
                      <source srcset="${paper.image.src}" type="image/webp" />
                      <img src="${paper.image.fallback}" alt="${paper.image.alt}" loading="lazy" />
                    </picture>
                  </button>`
                : ""
            }
          </div>
          <div>
            <h3><a href="${paper.link}" target="_blank" rel="noreferrer">${paper.title}</a></h3>
            <p>${paper.authors}</p>
            <p>${paper.journal} / DOI: ${paper.doi}</p>
          </div>
          <div class="publication-actions">
            <a class="publication-link" href="${paper.link}" target="_blank" rel="noreferrer">Source</a>
          </div>
        </article>
      `
      )
      .join("");

    document.querySelector("#people-grid").innerHTML = content.people
      .map(
        (person) => `
        <article class="person-card">
          <div class="avatar">${person.initials}</div>
          <div>
            <span class="person-role">${person.role}</span>
            <h3>${person.name}</h3>
            <p>${person.summary}</p>
          </div>
        </article>
      `
      )
      .join("");

    document.querySelector("#role-grid").innerHTML = content.roles
      .map(
        (role) => `
        <article class="role-card">
          <strong>${role.title}</strong>
          <p>${role.text}</p>
        </article>
      `
      )
      .join("");

    document.querySelector("#news-grid").innerHTML = content.news
      .map(
        (item) => `
        <article class="news-card">
          <time>${item.date}</time>
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </article>
      `
      )
      .join("");

    document.querySelector("#contact-card").innerHTML = content.contact
      .map(([label, value, href]) => {
        const renderedValue = href
          ? `<a href="${href}" target="${href.startsWith("mailto:") ? "_self" : "_blank"}" rel="noreferrer">${value}</a>`
          : `<strong>${value}</strong>`;
        return `<div class="contact-row"><span>${label}</span>${renderedValue}</div>`;
      })
      .join("");
  }

  function initNav() {
    const nav = document.querySelector(".navbar");
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelectorAll(".nav-links a");
    const updateState = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });

    toggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initEripSlideshow() {
    const root = document.querySelector("#erip-slideshow");
    if (!root) return;

    const slides = Array.from(root.querySelectorAll(".erip-slide"));
    if (slides.length < 2) return;

    let activeIndex = 0;
    let timerId = null;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setActive = (index) => {
      activeIndex = index;
      slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === activeIndex));
    };

    const queueNext = () => {
      if (prefersReducedMotion) return;
      window.clearInterval(timerId);
      timerId = window.setInterval(() => setActive((activeIndex + 1) % slides.length), 4200);
    };

    queueNext();
  }

  function initProcessVideoScrub() {
    const section = document.querySelector("#mechanism");
    const video = document.querySelector("#process-video");
    const steps = Array.from(document.querySelectorAll(".process-step"));
    if (!section || !video || !steps.length) return;

    let ticking = false;

    const clamp = (value) => Math.min(1, Math.max(0, value));

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp((0 - rect.top) / travel);
      const activeIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));

      steps.forEach((step, index) => {
        step.classList.toggle("is-active", index === activeIndex);
      });
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    video.playbackRate = 1.5;
    video.play().catch(() => {});
    requestUpdate();
  }

  function initPublicationLightbox() {
    const buttons = Array.from(document.querySelectorAll("[data-lightbox-src]"));
    if (!buttons.length) return;

    const overlay = document.createElement("div");
    overlay.className = "image-lightbox";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `
      <div class="image-lightbox-backdrop" data-lightbox-close></div>
      <figure class="image-lightbox-panel" role="dialog" aria-modal="true" aria-label="Publication image preview">
        <button class="image-lightbox-close" type="button" data-lightbox-close aria-label="Close image preview">Close</button>
        <picture>
          <source data-lightbox-webp-source type="image/webp" />
          <img data-lightbox-image alt="" />
        </picture>
        <figcaption data-lightbox-caption></figcaption>
      </figure>
    `;
    document.body.appendChild(overlay);

    const webpSource = overlay.querySelector("[data-lightbox-webp-source]");
    const image = overlay.querySelector("[data-lightbox-image]");
    const caption = overlay.querySelector("[data-lightbox-caption]");
    const closeButton = overlay.querySelector(".image-lightbox-close");
    let lastTrigger = null;

    const close = () => {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lightbox-open");
      if (lastTrigger) lastTrigger.focus();
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        lastTrigger = button;
        webpSource.setAttribute("srcset", decodeURIComponent(button.dataset.lightboxWebp));
        image.src = decodeURIComponent(button.dataset.lightboxSrc);
        image.alt = decodeURIComponent(button.dataset.lightboxAlt);
        caption.textContent = decodeURIComponent(button.dataset.lightboxTitle);
        overlay.classList.add("is-open");
        overlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("lightbox-open");
        closeButton.focus();
      });
    });

    overlay.querySelectorAll("[data-lightbox-close]").forEach((element) => {
      element.addEventListener("click", close);
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && overlay.classList.contains("is-open")) close();
    });
  }

  renderContent();
  initNav();
  initEripSlideshow();
  initProcessVideoScrub();
  initPublicationLightbox();

  document.querySelectorAll("video[autoplay]").forEach((video) => {
    video.muted = true;
    video.play().catch(() => {});
  });

  if (window.lucide) window.lucide.createIcons();
})();
