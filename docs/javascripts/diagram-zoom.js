/* ============================================================
   Diagram Zoom — Mermaid/画像のクリック拡大表示
   依存: svg-pan-zoom (CDN経由で読み込み)
   ============================================================ */

/* Mermaid v11 の closed Shadow DOM を open に強制（外部からSVGアクセス可能にするため） */
(function patchShadow() {
  if (window.__dnkShadowPatched) return;
  window.__dnkShadowPatched = true;
  const orig = Element.prototype.attachShadow;
  Element.prototype.attachShadow = function (init) {
    const opts = init ? Object.assign({}, init, { mode: "open" }) : { mode: "open" };
    return orig.call(this, opts);
  };
})();

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

  /* svg-pan-zoom customEventsHandler — touch (pinch + 1本指pan) を実装 */
  function pinchHandler() {
    let initialDistance = 0;
    let initialZoom = 1;
    let lastPanPoint = null;
    let instance = null;
    return {
      haltEventListeners: ["touchstart", "touchend", "touchmove", "touchleave", "touchcancel"],
      init: function (options) {
        instance = options.instance;
        const target = options.svgElement;
        target.addEventListener("touchstart", onStart, { passive: false });
        target.addEventListener("touchmove", onMove, { passive: false });
        target.addEventListener("touchend", onEnd, { passive: true });
        target.addEventListener("touchcancel", onEnd, { passive: true });
        this._target = target;
      },
      destroy: function () {
        if (!this._target) return;
        this._target.removeEventListener("touchstart", onStart);
        this._target.removeEventListener("touchmove", onMove);
        this._target.removeEventListener("touchend", onEnd);
        this._target.removeEventListener("touchcancel", onEnd);
      },
    };

    function dist(t1, t2) {
      return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
    }
    function onStart(e) {
      if (e.touches.length === 2) {
        e.preventDefault();
        initialDistance = dist(e.touches[0], e.touches[1]);
        initialZoom = instance.getZoom();
        lastPanPoint = null;
      } else if (e.touches.length === 1) {
        lastPanPoint = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }
    function onMove(e) {
      if (e.touches.length === 2 && initialDistance > 0) {
        e.preventDefault();
        const newDist = dist(e.touches[0], e.touches[1]);
        const scale = newDist / initialDistance;
        instance.zoom(initialZoom * scale);
      } else if (e.touches.length === 1 && lastPanPoint) {
        e.preventDefault();
        const t = e.touches[0];
        const dx = t.clientX - lastPanPoint.x;
        const dy = t.clientY - lastPanPoint.y;
        instance.panBy({ x: dx, y: dy });
        lastPanPoint = { x: t.clientX, y: t.clientY };
      }
    }
    function onEnd(e) {
      if (e.touches.length < 2) initialDistance = 0;
      if (e.touches.length === 0) lastPanPoint = null;
    }
  }

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
            customEventsHandler: pinchHandler(),
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

  function findMermaidSvg(container) {
    // 1) Open shadow root（attachShadowパッチで closed→open に変換済みのはず）
    if (container.shadowRoot) {
      const svg = container.shadowRoot.querySelector("svg");
      if (svg) return svg;
    }
    // 2) 直下/子孫の SVG（旧 Mermaid 動作）
    let svg = container.querySelector("svg");
    if (svg) return svg;
    // 3) <template shadowrootmode> の中身（declarative shadow DOM が未活性の場合）
    const tpl = container.querySelector("template");
    if (tpl && tpl.content) {
      svg = tpl.content.querySelector("svg");
      if (svg) return svg;
    }
    // 4) container 自身に shadow root が無くても、子孫要素にある可能性
    const allChildren = container.querySelectorAll("*");
    for (const el of allChildren) {
      if (el.shadowRoot) {
        const s = el.shadowRoot.querySelector("svg");
        if (s) return s;
      }
    }
    return null;
  }

  function bindMermaid(container) {
    if (container.dataset.zoomBound === "1") return;
    container.dataset.zoomBound = "1";
    container.classList.add("dnk-zoomable");
    container.setAttribute("role", "button");
    container.setAttribute("tabindex", "0");
    container.setAttribute("aria-label", "図を拡大表示");
    const handler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const live = findMermaidSvg(container);
      if (!live) {
        console.warn("[diagram-zoom] no SVG found in", container);
        return;
      }
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

  /* IntersectionObserver で表示されたものだけ遅延バインド */
  let intersectionObserver = null;
  function getIO() {
    if (intersectionObserver) return intersectionObserver;
    if (!("IntersectionObserver" in window)) return null;
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          intersectionObserver.unobserve(el);
          if (el.classList.contains("mermaid")) bindMermaid(el);
          else if (el.tagName === "IMG") bindImage(el);
        }
      },
      { rootMargin: "200px 0px" }
    );
    return intersectionObserver;
  }

  function observeOrBind(el, immediate) {
    if (el.dataset.zoomBound === "1") return;
    const io = getIO();
    if (immediate || !io) {
      if (el.classList.contains("mermaid")) bindMermaid(el);
      else if (el.tagName === "IMG") bindImage(el);
    } else {
      io.observe(el);
    }
  }

  function scanAll(root) {
    const scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll(".mermaid").forEach((el) => {
      if (el.closest(".dnk-zoom-modal")) return;
      observeOrBind(el, false);
    });
    scope.querySelectorAll(".md-typeset img").forEach((el) => observeOrBind(el, false));
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

  /* Tabキーが「迷子」になったときだけ、メインコンテンツへフォーカスを誘導する。
     ナビゲーション直後に強制フォーカスはしない（Materialのレンダリングと干渉して
     サイドバー描画が崩れるため） */
  function setupTabRecovery() {
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Tab" || e.shiftKey) return;
      const active = document.activeElement;
      // 既にどこかにフォーカスが当たっていれば何もしない
      if (active && active !== document.body && active !== document.documentElement) return;
      const main =
        document.querySelector("main .md-content__inner") ||
        document.querySelector(".md-content") ||
        document.querySelector("main");
      if (!main) return;
      e.preventDefault();
      if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
      try {
        main.focus({ preventScroll: true });
      } catch (_) {
        main.focus();
      }
    });
  }

  function init() {
    scanAll();
    startGlobalObserver();
    setupTabRecovery();

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
