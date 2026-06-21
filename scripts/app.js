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

    document.querySelector("#research-grid").innerHTML = content.researchThemes
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

    const renderProgramCard = (item, isPrimary = false) => `
        <a class="program-card ${isPrimary ? "program-card-primary" : ""}" href="${item.link}">
          <picture>
            <source srcset="${item.image}" type="image/webp" />
            <img src="${item.fallback}" alt="${item.alt}" loading="lazy" />
          </picture>
          <div>
            <span>${item.label}</span>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <strong>View related research</strong>
          </div>
        </a>
      `;

    const [primaryProgram, ...secondaryPrograms] = content.programImages;
    document.querySelector("#program-grid").innerHTML = `
      <div class="program-top">${renderProgramCard(primaryProgram, true)}</div>
      <div class="program-branches" aria-hidden="true">
        <span class="program-branch program-branch-left"></span>
        <span class="program-branch program-branch-right"></span>
      </div>
      <div class="program-bottom">
        ${secondaryPrograms.map((item) => renderProgramCard(item)).join("")}
      </div>
    `;

    document.querySelector("#process-steps").innerHTML = content.processSteps
      .map(
        (step, index) => `
        <a class="process-step ${index === 0 ? "is-active" : ""}" href="${step.link}" target="_blank" rel="noreferrer">
          <code>${step.short}</code>
          <div>
            <strong>${String(index + 1).padStart(2, "0")} / ${step.title}</strong>
            <span>${step.detail}</span>
          </div>
        </a>
      `
      )
      .join("");

    document.querySelector("#publication-list").innerHTML = content.publications
      .map(
        (paper) => `
        <a class="publication-card ${paper.featured ? "featured" : ""}" href="${paper.link}" target="_blank" rel="noreferrer">
          <div class="publication-meta">
            <div class="publication-year">${paper.year}</div>
            <div class="publication-source">${paper.source}</div>
            ${
              paper.image
                ? `<picture class="publication-preview">
                    <source srcset="${paper.image.src}" type="image/webp" />
                    <img src="${paper.image.fallback}" alt="${paper.image.alt}" loading="lazy" />
                  </picture>`
                : ""
            }
          </div>
          <div>
            <h3>${paper.title}</h3>
            <p>${paper.authors}</p>
            <p>${paper.journal} / DOI: ${paper.doi}</p>
          </div>
          <div class="publication-actions">
            <span class="publication-link">Source</span>
          </div>
        </a>
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

  renderContent();
  initNav();
  initEripSlideshow();

  document.querySelectorAll("video[autoplay]").forEach((video) => {
    video.muted = true;
    video.play().catch(() => {});
  });

  if (window.lucide) window.lucide.createIcons();
})();
