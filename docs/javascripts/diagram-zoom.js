/* ============================================================
   Diagram Zoom — Mermaid/画像のクリック拡大表示
   依存: svg-pan-zoom (CDN経由で読み込み)
   ============================================================ */
(function () {
  "use strict";

  const MODAL_ID = "dnk-zoom-modal";

  function createModal() {
    if (document.getElementById(MODAL_ID)) return document.getElementById(MODAL_ID);
    const modal = document.createElement("div");
    modal.id = MODAL_ID;
    modal.className = "dnk-zoom-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="dnk-zoom-backdrop" data-close="1"></div>
      <div class="dnk-zoom-stage">
        <button class="dnk-zoom-close" type="button" aria-label="閉じる (Esc)" data-close="1">×</button>
        <div class="dnk-zoom-hint">ドラッグで移動 / ホイールまたはピンチで拡大縮小 / Esc で閉じる</div>
        <div class="dnk-zoom-content"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t.dataset && t.dataset.close === "1") closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
    return modal;
  }

  let panZoomInstance = null;

  function openWithSvg(svgNode) {
    const modal = createModal();
    const content = modal.querySelector(".dnk-zoom-content");
    content.innerHTML = "";
    const clone = svgNode.cloneNode(true);
    clone.removeAttribute("width");
    clone.removeAttribute("height");
    clone.removeAttribute("style");
    clone.setAttribute("width", "100%");
    clone.setAttribute("height", "100%");
    clone.style.maxWidth = "none";
    clone.style.maxHeight = "none";
    clone.style.display = "block";
    content.appendChild(clone);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      if (window.svgPanZoom) {
        try {
          panZoomInstance = window.svgPanZoom(clone, {
            zoomEnabled: true,
            controlIconsEnabled: true,
            fit: true,
            center: true,
            minZoom: 0.2,
            maxZoom: 30,
            zoomScaleSensitivity: 0.4,
            contain: false,
          });
        } catch (err) {
          console.warn("[diagram-zoom] svgPanZoom init failed:", err);
        }
      }
    });
  }

  function openWithImg(imgNode) {
    const modal = createModal();
    const content = modal.querySelector(".dnk-zoom-content");
    content.innerHTML = "";
    const img = document.createElement("img");
    img.src = imgNode.currentSrc || imgNode.src;
    img.alt = imgNode.alt || "";
    img.className = "dnk-zoom-img";
    content.appendChild(img);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = document.getElementById(MODAL_ID);
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (panZoomInstance) {
      try { panZoomInstance.destroy(); } catch (_) {}
      panZoomInstance = null;
    }
    const content = modal.querySelector(".dnk-zoom-content");
    if (content) content.innerHTML = "";
  }

  function bindMermaid(container) {
    if (container.dataset.zoomBound === "1") return;
    const svg = container.querySelector("svg");
    if (!svg) return;
    container.dataset.zoomBound = "1";
    container.classList.add("dnk-zoomable");
    container.setAttribute("role", "button");
    container.setAttribute("tabindex", "0");
    container.setAttribute("aria-label", "図を拡大表示");
    const handler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const live = container.querySelector("svg") || svg;
      openWithSvg(live);
    };
    container.addEventListener("click", handler);
    container.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") handler(e);
    });
  }

  function bindImage(img) {
    if (img.dataset.zoomBound === "1") return;
    if (img.closest("a")) return;
    if (img.closest(".md-header") || img.closest(".md-footer")) return;
    if (img.closest(".dnk-zoom-modal")) return;
    if (img.naturalWidth && img.naturalWidth < 120) return;
    img.dataset.zoomBound = "1";
    img.classList.add("dnk-zoomable-img");
    img.addEventListener("click", (e) => {
      e.preventDefault();
      openWithImg(img);
    });
  }

  function scanAll(root) {
    const scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll(".mermaid").forEach((el) => {
      // Skip nodes outside of content area or already bound
      if (el.closest(".dnk-zoom-modal")) return;
      bindMermaid(el);
    });
    scope.querySelectorAll(".md-typeset img").forEach(bindImage);
  }

  let scanScheduled = false;
  function scheduleScan() {
    if (scanScheduled) return;
    scanScheduled = true;
    requestAnimationFrame(() => {
      scanScheduled = false;
      scanAll();
    });
  }

  function startGlobalObserver() {
    const target = document.body;
    if (!target) return;
    const observer = new MutationObserver((mutations) => {
      let needsScan = false;
      for (const m of mutations) {
        if (m.type === "childList" && (m.addedNodes.length || m.removedNodes.length)) {
          for (const node of m.addedNodes) {
            if (node.nodeType !== 1) continue;
            if (
              node.matches?.(".mermaid, .md-typeset img, svg") ||
              node.querySelector?.(".mermaid, .md-typeset img, svg")
            ) {
              needsScan = true;
              break;
            }
          }
        } else if (m.type === "attributes" && m.target.classList?.contains("mermaid")) {
          needsScan = true;
        }
        if (needsScan) break;
      }
      if (needsScan) scheduleScan();
    });
    observer.observe(target, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });
  }

  function init() {
    scanAll();
    startGlobalObserver();

    // Material instant navigation
    if (window.document$ && typeof window.document$.subscribe === "function") {
      window.document$.subscribe(() => scheduleScan());
    }

    // Belt-and-suspenders retries (Mermaid sometimes renders very late)
    [200, 800, 2000, 5000].forEach((d) => setTimeout(scanAll, d));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
