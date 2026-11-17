(() => {
  "use strict";
  const SITE = window.SITE;
  const PROJECTS = window.PROJECTS;
  const $ = (s, el = document) => el.querySelector(s);
  const pad = (n) => String(n).padStart(2, "0");
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const arrow = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h12M9 3l5 5-5 5"/></svg>';

  /* ─────────── Placeholder architectural drawings ───────────
     Used until a real photo is set in data.js (image: "images/…"). */
  function building(x, base, w, floors, fh = 20, cols = 4) {
    const h = floors * fh;
    const top = base - h;
    let s = `<rect class="a-body" x="${x}" y="${top}" width="${w}" height="${h}"/>`;
    const gw = (w - 12) / cols;
    for (let f = 0; f < floors; f++) {
      const y = top + f * fh + 5;
      for (let c = 0; c < cols; c++) {
        s += `<rect class="a-glass" x="${x + 6 + c * gw + 2}" y="${y}" width="${gw - 4}" height="${fh - 10}"/>`;
      }
      if (f) s += `<line class="a-thin" x1="${x}" y1="${top + f * fh}" x2="${x + w}" y2="${top + f * fh}"/>`;
    }
    s += `<line class="a-line" x1="${x - 4}" y1="${top}" x2="${x + w + 4}" y2="${top}"/>`;
    return s;
  }
  const tree = (x, base, r = 12) =>
    `<line class="a-line" x1="${x}" y1="${base}" x2="${x}" y2="${base - r}"/><circle class="a-tree" cx="${x}" cy="${base - r - r * 0.7}" r="${r}"/>`;
  const ground = (b) => `<line class="a-ground" x1="0" y1="${b}" x2="400" y2="${b}"/>`;
  const sun = `<circle class="a-sun" cx="320" cy="62" r="26"/>`;

  function art(p) {
    const a = p.art || {};
    const B = 250;
    let g = "";
    switch (a.type) {
      case "tower":
        g = sun + building(140, B, 120, a.floors || 6, 26, 5) + tree(110, B) + tree(292, B, 14) + ground(B);
        break;
      case "hotel":
        g = sun + building(130, B, 140, a.floors || 6, 26, 6) +
          `<rect class="a-accent" x="170" y="${B - 30}" width="60" height="8"/>` + tree(100, B, 10) + tree(300, B, 13) + ground(B);
        break;
      case "complex":
        g = sun + building(60, B, 90, 7, 24, 3) + building(250, B, 90, 5, 24, 3) +
          `<rect class="a-body" x="150" y="${B - 44}" width="100" height="44"/><rect class="a-accent" x="150" y="${B - 48}" width="100" height="4"/>` + tree(30, B, 10) + tree(368, B, 12) + ground(B);
        break;
      case "wings":
        g = building(40, B, 90, 8, 22, 3) + building(155, B, 90, 9, 22, 3) + building(270, B, 90, 8, 22, 3) +
          `<line class="a-accent-line" x1="130" y1="${B - 60}" x2="155" y2="${B - 60}"/><line class="a-accent-line" x1="245" y1="${B - 60}" x2="270" y2="${B - 60}"/>` + ground(B);
        break;
      case "campus":
        g = sun + building(30, B, 80, 4, 24, 3) + building(125, B, 110, 7, 24, 4) + building(250, B, 70, 5, 24, 2) +
          building(335, B, 50, 3, 24, 2) + `<rect class="a-accent" x="125" y="${B - 172}" width="110" height="4"/>` + ground(B);
        break;
      case "plan": {
        g = `<path class="a-road" d="M0 150 H400 M200 0 V300"/>`;
        const blocks = [[30, 30], [230, 30], [30, 175], [230, 175]];
        blocks.forEach(([bx, by], i) => {
          for (let r = 0; r < 3; r++)
            for (let c = 0; c < 4; c++) {
              const cls = (r + c + i) % 5 === 0 ? "a-accent" : "a-glass a-plot";
              g += `<rect class="${cls}" x="${bx + c * 36}" y="${by + r * 30}" width="30" height="24"/>`;
            }
        });
        g += `<circle class="a-tree" cx="200" cy="150" r="22"/><circle class="a-ring" cx="200" cy="150" r="32"/>`;
        break;
      }
      case "flow": {
        const nodes = [[30, 70], [150, 70], [270, 70], [90, 180], [210, 180]];
        nodes.forEach(([x, y], i) => {
          g += `<rect class="${i === 4 ? "a-accent" : "a-body"}" x="${x}" y="${y}" width="100" height="50" rx="6"/>`;
          g += `<line class="a-thin" x1="${x + 14}" y1="${y + 20}" x2="${x + 70}" y2="${y + 20}"/><line class="a-thin" x1="${x + 14}" y1="${y + 31}" x2="${x + 50}" y2="${y + 31}"/>`;
        });
        g += `<path class="a-line a-dash" d="M130 95 H150 M250 95 H270 M320 120 V150 H260 V180 M80 120 V150 H140 V180 M190 205 H210"/>`;
        break;
      }
      default:
        g = sun + building(150, B, 100, 5) + ground(B);
    }
    return `<svg class="art art--${a.tone || "sand"}" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration: ${esc(p.title)}">
      <rect class="a-sky" width="400" height="300"/>
      <g class="a-grid">${Array.from({ length: 9 }, (_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="300"/>`).join("")}</g>
      ${g}</svg>`;
  }

  function media(p, { eager = false, sizes = "" } = {}) {
    if (p.image)
      return `<img src="${esc(p.image)}" alt="${esc(p.title)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" ${sizes}>`;
    return art(p);
  }
  const href = (p) => `project.html?p=${encodeURIComponent(p.slug)}`;

  /* ─────────── Shared bits ─────────── */
  document.querySelectorAll("#year").forEach((el) => (el.textContent = new Date().getFullYear()));
  document.querySelectorAll("[data-site]").forEach((el) => {
    const v = SITE[el.dataset.site];
    if (v) el.textContent = v;
  });

  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((e) => io.observe(e));
  }

  /* ─────────── HOME ─────────── */
  function initHome() {
    // Mobile nav
    const toggle = $(".nav__toggle");
    const links = $("#nav-links");
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("is-open", !open);
    });
    links.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("is-open");
      }
    });

    // Hero stage + thumbnails (first 4 projects)
    const featured = PROJECTS.slice(0, 4);
    const thumbs = $("#hero-thumbs");
    const stage = $("#hero-stage");
    const caption = $("#hero-caption");
    thumbs.innerHTML = featured
      .map(
        (p, i) =>
          `<button class="thumb" type="button" aria-pressed="${i === 0}" aria-label="Show ${esc(p.title)}" data-i="${i}">${media(p)}</button>`
      )
      .join("");
    let current = 0;
    function show(i) {
      current = i;
      const p = featured[i];
      stage.classList.remove("is-swap");
      void stage.offsetWidth;
      stage.innerHTML = media(p, { eager: i === 0 });
      stage.classList.add("is-swap");
      caption.innerHTML = `<span class="stage__num">/ ${pad(PROJECTS.indexOf(p) + 1)}</span><a href="${href(p)}"><strong>${esc(p.title)}</strong><span>${esc(p.phase)}</span></a>`;
      thumbs.querySelectorAll(".thumb").forEach((b, j) => b.setAttribute("aria-pressed", String(j === i)));
    }
    thumbs.addEventListener("click", (e) => {
      const b = e.target.closest(".thumb");
      if (b) {
        show(+b.dataset.i);
        restart();
      }
    });
    show(0);

    /* Auto-rotate: every 6s. Pauses on hover/focus, when the tab is hidden,
       or via the pause button. Off entirely for reduced-motion users. */
    const INTERVAL = 6000;
    const visual = $(".hero__visual");
    const toggleBtn = $("#hero-toggle");
    const progress = $("#hero-progress");
    let timer = null;
    let userPaused = reduceMotion;
    let hoverPaused = false;

    function setProgress(running) {
      progress.style.animation = "none";
      void progress.offsetWidth;
      progress.style.animation = running ? `progress ${INTERVAL}ms linear forwards` : "none";
    }
    function stop() {
      clearInterval(timer);
      timer = null;
      setProgress(false);
    }
    function start() {
      stop();
      if (userPaused || hoverPaused || document.hidden) return;
      setProgress(true);
      timer = setInterval(() => {
        show((current + 1) % featured.length);
        setProgress(true);
      }, INTERVAL);
    }
    function restart() {
      if (timer) start();
    }
    function syncToggle() {
      toggleBtn.setAttribute("aria-pressed", String(userPaused));
      toggleBtn.setAttribute("aria-label", userPaused ? "Play slideshow" : "Pause slideshow");
      toggleBtn.classList.toggle("is-paused", userPaused);
    }
    toggleBtn.addEventListener("click", () => {
      userPaused = !userPaused;
      syncToggle();
      userPaused ? stop() : start();
    });
    visual.addEventListener("mouseenter", () => { hoverPaused = true; stop(); });
    visual.addEventListener("mouseleave", () => { hoverPaused = false; start(); });
    visual.addEventListener("focusin", () => { hoverPaused = true; stop(); });
    visual.addEventListener("focusout", (e) => {
      if (!visual.contains(e.relatedTarget)) { hoverPaused = false; start(); }
    });
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    syncToggle();
    start();

    $(".hero__lede").textContent = SITE.intro;

    // Bento
    $("#statement-art").innerHTML = art(PROJECTS.find((p) => p.art.type === "wings") || PROJECTS[0]);
    $("#stats").innerHTML = (SITE.stats || [])
      .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
      .join("");
    const feat = PROJECTS.find((p) => p.slug === "corporate-it-campus") || PROJECTS[1];
    const bf = $("#bento-feature");
    bf.href = href(feat);
    bf.innerHTML = `<div class="bento__feature-media">${media(feat)}</div>
      <div class="bento__feature-text"><p class="eyebrow"><span class="eyebrow__num">/ Featured</span>${esc(feat.category)}</p>
      <h3>${esc(feat.title)}</h3><p>${esc(feat.phase)}</p><span class="more">View project ${arrow}</span></div>`;

    // Filters + grid
    const cats = ["All", ...new Set(PROJECTS.map((p) => p.category))];
    const filters = $("#filters");
    filters.innerHTML = cats
      .map((c, i) => `<button type="button" class="chip" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`)
      .join("");
    const grid = $("#project-grid");
    grid.innerHTML = PROJECTS.map(
      (p, i) => `<li class="card reveal" data-cat="${esc(p.category)}" style="--d:${(i % 2) * 70}ms">
        <a href="${href(p)}">
          <div class="card__media">${media(p)}</div>
          <div class="card__meta"><span class="card__num">/ ${pad(i + 1)}</span><span class="tag">${esc(p.category)}</span></div>
          <h3 class="card__title">${esc(p.title)}</h3>
          <p class="card__phase">${esc(p.phase)}${p.location ? ` · ${esc(p.location)}` : ""}</p>
          <span class="card__arrow">${arrow}</span>
        </a></li>`
    ).join("");
    // Bento pattern (6-col grid): wide+tall, then three equal, then tall+wide.
    const PATTERN = ["lg", "sm", "md", "md", "md", "sm", "lg"];
    function layout() {
      [...grid.querySelectorAll(".card")]
        .filter((c) => !c.hidden)
        .forEach((c, i) => {
          c.classList.remove("card--lg", "card--sm", "card--md");
          c.classList.add(`card--${PATTERN[i % PATTERN.length]}`);
        });
    }
    layout();
    const status = $("#grid-status");
    filters.addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      const cat = b.dataset.cat;
      filters.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
      let n = 0;
      grid.querySelectorAll(".card").forEach((card) => {
        const show = cat === "All" || card.dataset.cat === cat;
        card.hidden = !show;
        if (show) {
          n++;
          card.classList.add("is-in");
        }
      });
      layout();
      status.textContent = `Showing ${n} ${cat === "All" ? "" : cat.toLowerCase() + " "}project${n === 1 ? "" : "s"}`;
    });

    // About
    $("#about-bio").innerHTML = SITE.bio.map((t) => `<p>${esc(t)}</p>`).join("");
    $("#about-skills").innerHTML = SITE.skills.map((s) => `<li>${esc(s)}</li>`).join("");

    // Contact
    const mail = $("#contact-email");
    mail.href = `mailto:${SITE.email}`;
    $("#contact-linkedin").href = SITE.linkedin;

    document.querySelectorAll(".section__head, .about, .contact, .bento > *").forEach((el) => el.classList.add("reveal"));
    setupReveal();
  }

  /* ─────────── CASE STUDY ─────────── */
  function initCase() {
    const main = $("#main.case");
    const slug = new URLSearchParams(location.search).get("p");
    const i = PROJECTS.findIndex((p) => p.slug === slug);
    if (i < 0) {
      main.innerHTML = `<section class="sheet case__missing"><h1>Project not found</h1><p>That project doesn't exist or has moved.</p><a class="pill pill--static" href="index.html#projects">See all projects ${arrow}</a></section>`;
      return;
    }
    const p = PROJECTS[i];
    const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(i + 1) % PROJECTS.length];
    document.title = `${p.title} · Sneha Thombare`;
    main.innerHTML = `
      <section class="sheet case__hero">
        <div class="case__intro">
          <p class="eyebrow"><span class="eyebrow__num">/ ${pad(i + 1)}</span>${esc(p.category)}</p>
          <h1 class="case__title">${esc(p.title)}</h1>
          <p class="case__summary">${esc(p.summary)}</p>
          <dl class="facts">
            ${[
              ["Phase", p.phase],
              ["Location", p.location],
              ["Timeline", p.dates],
              ...(p.facts || []),
            ]
              .filter(([, v]) => v)
              .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
              .join("")}
          </dl>
        </div>
        <figure class="case__media">${media(p, { eager: true })}</figure>
      </section>
      <section class="case__body">
        <div class="sheet case__block case__block--wide reveal">
          <h2 class="case__h"><span class="eyebrow__num">/ Role</span>What I did</h2>
          <ol class="highlights">${(p.highlights || []).map((h) => `<li>${esc(h)}</li>`).join("")}</ol>
        </div>
        <div class="sheet case__block reveal">
          <h2 class="case__h"><span class="eyebrow__num">/ Scope</span>Scope of work</h2>
          <ul class="skills">${(p.scope || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
        </div>
      </section>
      ${
        p.gallery && p.gallery.length
          ? `<section class="gallery" aria-label="Project gallery">${p.gallery
              .map((g, n) => {
                const { src, caption = "" } = typeof g === "string" ? { src: g } : g;
                const alt = caption ? `${p.title}: ${caption}` : `${p.title}, image ${n + 1}`;
                return `<figure class="sheet reveal">
                  <a href="${esc(src)}" target="_blank" rel="noopener" aria-label="${esc(alt)} (opens full size)">
                    <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">
                  </a>
                  ${caption ? `<figcaption><span class="eyebrow__num">/ ${pad(n + 1)}</span>${esc(caption)}</figcaption>` : ""}
                </figure>`;
              })
              .join("")}</section>`
          : ""
      }
      <nav class="case__pager" aria-label="More projects">
        <a class="sheet" href="${href(prev)}"><span class="eyebrow">← Previous</span><strong>${esc(prev.title)}</strong></a>
        <a class="sheet" href="${href(next)}"><span class="eyebrow">Next →</span><strong>${esc(next.title)}</strong></a>
      </nav>`;
    setupReveal();
  }

  if ($("#hero-stage")) initHome();
  else if ($("#main.case")) initCase();
})();
