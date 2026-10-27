(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("cyberpunk-toggle");
  let enabled = root.getAttribute("data-cyberpunk") === "on";
  const isChinese = root.lang.toLowerCase().startsWith("zh");
  const meteor = document.querySelector(".cyberpunk-meteor");
  let meteorTimer;
  let meteorAnimation;

  const scheduleMeteor = (first = false) => {
    window.clearTimeout(meteorTimer);
    if (!enabled || !meteor || typeof meteor.animate !== "function") return;

    meteorTimer = window.setTimeout(() => {
      if (!enabled) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const edgePoint = () => {
        const edge = Math.floor(Math.random() * 4);
        if (edge === 0) return { x: Math.random() * width, y: -12 };
        if (edge === 1) return { x: width + 12, y: Math.random() * height };
        if (edge === 2) return { x: Math.random() * width, y: height + 12 };
        return { x: -12, y: Math.random() * height };
      };
      const start = edgePoint();
      let end = edgePoint();
      while (Math.hypot(end.x - start.x, end.y - start.y) < Math.min(width, height) * 0.55) end = edgePoint();

      const dx = end.x - start.x;
      const dy = end.y - start.y;
      // The meteor head follows the straight start-to-end path; its tail extends directly behind it.
      const angle = Math.atan2(dy, dx) * 180 / Math.PI + 180;
      const palettes = [
        { core: "#f3e8ff", glow: "rgba(166, 91, 255, 0.95)" },
        { core: "#ffe5fa", glow: "rgba(255, 58, 208, 0.92)" },
        { core: "#e1fbff", glow: "rgba(51, 216, 255, 0.9)" },
        { core: "#e5e7ff", glow: "rgba(105, 111, 255, 0.96)" }
      ];
      const palette = palettes[Math.floor(Math.random() * palettes.length)];
      const duration = 700 + Math.random() * 700;
      meteor.style.left = `${start.x}px`;
      meteor.style.top = `${start.y}px`;
      meteor.style.width = `${110 + Math.random() * 240}px`;
      meteor.style.height = `${2.5 + Math.random() * 3}px`;
      meteor.style.setProperty("--meteor-core", palette.core);
      meteor.style.setProperty("--meteor-glow", palette.glow);
      meteorAnimation = meteor.animate([
        { opacity: 0, transform: `translate3d(0, 0, 0) rotate(${angle}deg)` },
        { opacity: 1, offset: 0.12, transform: `translate3d(${dx * 0.12}px, ${dy * 0.12}px, 0) rotate(${angle}deg)` },
        { opacity: 0.9, offset: 0.84, transform: `translate3d(${dx * 0.84}px, ${dy * 0.84}px, 0) rotate(${angle}deg)` },
        { opacity: 0, transform: `translate3d(${dx}px, ${dy}px, 0) rotate(${angle}deg)` }
      ], { duration, easing: "linear", fill: "both" });
      meteorAnimation.onfinish = () => {
        meteorAnimation.cancel();
        meteorAnimation = null;
        scheduleMeteor();
      };
    }, first ? 2000 + Math.random() * 3000 : 12000 + Math.random() * 6000);
  };

  const render = () => {
    if (enabled) {
      root.setAttribute("data-cyberpunk", "on");
    } else {
      root.removeAttribute("data-cyberpunk");
    }

    const label = isChinese
      ? `${enabled ? "关闭" : "开启"} CyberPunk 模式`
      : `${enabled ? "Disable" : "Enable"} CyberPunk mode`;
    toggle.setAttribute("aria-pressed", String(enabled));
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
  };

  if (toggle) {
    render();
    toggle.addEventListener("click", () => {
      enabled = !enabled;
      try {
        localStorage.setItem("cyberpunk", enabled ? "on" : "off");
      } catch (error) {}
      if (!enabled && meteorAnimation) {
        meteorAnimation.cancel();
        meteorAnimation = null;
      }
      render();
      scheduleMeteor(true);
    });
  }
  scheduleMeteor(true);
})();
