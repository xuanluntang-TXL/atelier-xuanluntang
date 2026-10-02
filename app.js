(function () {
  const DATA = window.ATELIER_DATA;
  const navList = document.getElementById("navList");
  const sideNav = document.getElementById("sideNav");
  const navToggle = document.getElementById("navToggle");
  function buildNav() {
    navList.innerHTML = DATA.NAV.map((item) => `
      <li><a href="#${item.id}" data-nav data-id="${item.id}"><span class="nav-num">${item.num}</span><span>${item.label}</span></a></li>`).join("");
  }
  function showPanel(id) {
    const target = id || "home";
    document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("active", p.dataset.panel === target));
    document.querySelectorAll("#navList a").forEach((a) => a.classList.toggle("active", a.dataset.id === target));
    sideNav.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }
  function routeFromHash() {
    const hash = (location.hash || "#home").slice(1);
    if (hash === "en-resume" || hash === "zh-resume") { showPanel("about"); return; }
    const known = ["home", ...DATA.NAV.map((n) => n.id)];
    showPanel(known.includes(hash) ? hash : "home");
  }
  navToggle.addEventListener("click", () => sideNav.classList.toggle("open"));
  window.addEventListener("hashchange", routeFromHash);
  function renderCollections() {
    const grid = document.getElementById("collectionsGrid"), detail = document.getElementById("collectionDetail");
    grid.innerHTML = DATA.COLLECTIONS.map((c, i) => `<article class="card" data-collection="${c.id}" role="button" tabindex="0"><div class="card-media"><span class="ph">${c.season}</span></div><div class="card-body"><div class="card-num">${String(i + 1).padStart(2, "0")} / Collection</div><h3 class="card-title">${c.title}</h3><p class="card-meta">${c.season} · ${c.blurb}</p></div></article>`).join("");
    function openCollection(id) {
      const c = DATA.COLLECTIONS.find((x) => x.id === id); if (!c) return;
      detail.classList.add("open");
      detail.innerHTML = `<div class="detail-header"><div><p class="panel-kicker">${c.season}</p><h2 class="detail-title">${c.title}</h2><p class="panel-body" style="margin-top:.75rem">${c.blurb}</p></div><button type="button" class="detail-close" id="closeCollection">Close</button></div><p class="panel-kicker" style="margin-bottom:1rem">Lookbook</p><div class="lookbook-grid">${c.lookbook.map((l) => `<div class="card-media card-media--wide" style="border:1px solid var(--line)"><span class="ph">${l.label}</span>${l.src ? `<img src="${l.src}" alt="${l.label}" />` : ""}</div>`).join("")}</div><p class="panel-kicker" style="margin-bottom:1rem">Garment details</p><div class="garment-list">${c.garments.map((g) => `<div class="garment"><div class="garment-thumb"></div><div><h4>${g.name}</h4><p>${g.detail}</p></div></div>`).join("")}</div>`;
      detail.querySelector("#closeCollection").onclick = () => { detail.classList.remove("open"); detail.innerHTML = ""; };
      detail.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    grid.addEventListener("click", (e) => { const card = e.target.closest("[data-collection]"); if (card) openCollection(card.dataset.collection); });
    grid.addEventListener("keydown", (e) => { if (e.key === "Enter") { const card = e.target.closest("[data-collection]"); if (card) openCollection(card.dataset.collection); } });
  }
  function renderBeading() {
    const el = document.getElementById("beadingModules");
    el.innerHTML = DATA.BEADING_MODULES.map((m, i) => `<article class="module"><div class="module-head"><h3 class="module-title">${m.title}</h3><span class="module-num">${String(i + 1).padStart(2, "0")}</span></div><div class="media-row">${m.media.map((t) => `<div class="media-tile ${t.type === "video" ? "media-tile--video" : ""}">${t.src ? (t.type === "video" ? `<video src="${t.src}" muted playsinline></video>` : `<img src="${t.src}" alt="${t.label}" />`) : `<span class="ph">${t.label}</span>`}</div>`).join("")}</div></article>`).join("");
  }
  function renderAI() {
    const el = document.getElementById("aiModules");
    el.innerHTML = DATA.AI_MODULES.map((m, i) => `<article class="module"><div class="module-head"><h3 class="module-title">${m.title}</h3><span class="module-num">${String(i + 1).padStart(2, "0")}</span></div><p class="panel-kicker" style="margin-bottom:.75rem">Models</p><div class="media-row" style="margin-bottom:1.5rem">${m.models.map((t) => `<div class="media-tile">${t.src ? `<img src="${t.src}" alt="${t.label}" />` : `<span class="ph">${t.label}</span>`}</div>`).join("")}</div><p class="panel-kicker" style="margin-bottom:.75rem">Lookbook</p><div class="media-row">${m.lookbook.map((t) => `<div class="media-tile">${t.src ? `<img src="${t.src}" alt="${t.label}" />` : `<span class="ph">${t.label}</span>`}</div>`).join("")}</div></article>`).join("");
  }
  function renderPhotoCards(containerId, items, opts = {}) {
    const el = document.getElementById(containerId);
    el.innerHTML = items.map((item, i) => `<article class="card" style="cursor:default"><div class="card-media ${opts.wide && item.wide ? "card-media--wide" : opts.sq ? "card-media--sq" : ""}">${item.src ? `<img src="${item.src}" alt="${item.label}" />` : `<span class="ph">${item.label}</span>`}</div><div class="card-body"><div class="card-num">${String(i + 1).padStart(2, "0")}</div><h3 class="card-title" style="font-size:1.1rem">${item.label}</h3></div></article>`).join("");
  }
  function renderTechPacks() {
    const el = document.getElementById("techpackList");
    el.innerHTML = DATA.TECH_PACKS.map((t) => `<a class="download-item" href="${t.file}" download><div><strong>${t.title}</strong><div><span>${t.note}</span></div></div><span class="btn" style="padding:.55rem .9rem">Download</span></a>`).join("");
  }
  function applyShopLink() { const a = document.getElementById("shopExternalLink"); if (a && DATA.SHOP_URL) a.href = DATA.SHOP_URL; }
  buildNav(); renderCollections(); renderBeading(); renderAI(); renderPhotoCards("cloGrid", DATA.CLO_PHOTOS); renderPhotoCards("printGrid", DATA.PRINT_DESIGNS, { wide: true }); renderPhotoCards("sketchesGrid", DATA.SKETCHES, { sq: true }); renderTechPacks(); applyShopLink(); routeFromHash();
})();
