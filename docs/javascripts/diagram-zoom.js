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
      if (e.target.dataset && e.target.dataset.close === "1") closeModal();
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
    clone.setAttribute("width", "100%");
    clone.setAttribute("height", "100%");
    clone.style.maxWidth = "none";
    clone.style.maxHeight = "none";
    content.appendChild(clone);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (window.svgPanZoom) {
      try {
        panZoomInstance = window.svgPanZoom(clone, {
          zoomEnabled: true,
          controlIconsEnabled: true,
          fit: true,
          center: true,
          minZoom: 0.3,
          maxZoom: 20,
          contain: false,
        });
      } catch (err) {
        console.warn("svgPanZoom init failed:", err);
      }
    }
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

  function attachMermaid(container) {
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
      openWithSvg(svg);
    };
    container.addEventListener("click", handler);
    container.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") handler(e);
    });
  }

  function attachImage(img) {
    if (img.dataset.zoomBound === "1") return;
    if (img.closest("a")) return; // リンク内画像は無視
    if (img.closest(".md-header") || img.closest(".md-footer")) return;
    if (img.width && img.width < 120) return; // アイコンサイズは除外
    img.dataset.zoomBound = "1";
    img.classList.add("dnk-zoomable-img");
    img.addEventListener("click", (e) => {
      e.preventDefault();
      openWithImg(img);
    });
  }

  function scanAll() {
    document.querySelectorAll(".md-typeset .mermaid").forEach(attachMermaid);
    document.querySelectorAll(".md-typeset img").forEach(attachImage);
  }

  function init() {
    scanAll();
    // Mermaidは非同期レンダリングなので遅延スキャンを併用
    setTimeout(scanAll, 400);
    setTimeout(scanAll, 1200);
    setTimeout(scanAll, 2500);

    // Material for MkDocs は instant navigation で DOM を差し替える
    if (window.document$ && typeof window.document$.subscribe === "function") {
      window.document$.subscribe(() => {
        setTimeout(scanAll, 100);
        setTimeout(scanAll, 800);
        setTimeout(scanAll, 2000);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
