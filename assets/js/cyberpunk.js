(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("cyberpunk-toggle");
  let enabled = root.getAttribute("data-cyberpunk") === "on";
  const isChinese = root.lang.toLowerCase().startsWith("zh");
  const meteorFlight = document.querySelector(".cyberpunk-meteor-flight");
  const meteor = document.querySelector(".cyberpunk-meteor");
  const gridCanvas = document.querySelector(".cyberpunk-grid-canvas");
  const gridContext = gridCanvas ? gridCanvas.getContext("2d") : null;
  let meteorTimer;
  let meteorAnimation;
  let meteorFadeAnimation;
  let gridFrame;
  let gridPointerX = -1000;
  let gridPointerY = -1000;
  let gridWarpStrength = 0;
  let gridWarpDirection = 1;
  let gridWidth = 0;
  let gridHeight = 0;
  let gridPixelRatio = 1;

  const resizeGrid = () => {
    if (!gridCanvas || !gridContext) return;
    gridWidth = window.innerWidth;
    gridHeight = window.innerHeight;
    gridPixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    gridCanvas.width = Math.round(gridWidth * gridPixelRatio);
    gridCanvas.height = Math.round(gridHeight * gridPixelRatio);
    gridContext.setTransform(gridPixelRatio, 0, 0, gridPixelRatio, 0, 0);
    requestGridFrame();
  };

  const drawGridFrame = () => {
    gridFrame = null;
    if (!gridContext || !gridCanvas) return;
    gridContext.clearRect(0, 0, gridWidth, gridHeight);

    const spacing = 42;
    const radius = 180;
    const strength = enabled ? gridWarpStrength : 0;
    const point = (x, y) => {
      const offsetX = x - gridPointerX;
      const offsetY = y - gridPointerY;
      const distance = Math.hypot(offsetX, offsetY);
      if (distance < 1 || distance > radius || strength < 0.05) return { x, y };
      const ratio = distance / radius;
      const bend = strength * Math.sin(ratio * Math.PI) * Math.exp(-ratio * ratio * 1.4) * gridWarpDirection;
      return {
        x: x - offsetY / distance * bend,
        y: y + offsetX / distance * bend
      };
    };

    const drawLine = (vertical, position, index) => {
      gridContext.beginPath();
      const limit = vertical ? gridHeight : gridWidth;
      for (let along = -spacing; along <= limit + spacing; along += 14) {
        const rawX = vertical ? position : along;
        const rawY = vertical ? along : position;
        const warped = point(rawX, rawY);
        if (along === -spacing) gridContext.moveTo(warped.x, warped.y);
        else gridContext.lineTo(warped.x, warped.y);
      }
      gridContext.strokeStyle = index % 5 === 0 ? "rgba(165, 138, 255, 0.19)" : "rgba(103, 245, 255, 0.14)";
      gridContext.lineWidth = 1;
      gridContext.stroke();
    };

    for (let x = 0, index = 0; x <= gridWidth; x += spacing, index += 1) drawLine(true, x, index);
    for (let y = 0, index = 0; y <= gridHeight; y += spacing, index += 1) drawLine(false, y, index);

    if (enabled && gridWarpStrength > 0.12) {
      gridWarpStrength *= 0.97;
      requestGridFrame();
    } else {
      gridWarpStrength = 0;
    }
  };

  function requestGridFrame() {
    if (!enabled || !gridCanvas || !gridContext || gridFrame) return;
    gridFrame = window.requestAnimationFrame(drawGridFrame);
  }

  const stopGrid = () => {
    if (gridFrame) window.cancelAnimationFrame(gridFrame);
    gridFrame = null;
    gridWarpStrength = 0;
    if (gridContext && gridCanvas) gridContext.clearRect(0, 0, gridWidth, gridHeight);
  };

  const startGrid = () => {
    if (!enabled || !gridCanvas || !gridContext) return;
    resizeGrid();
  };

  window.addEventListener("mousemove", (event) => {
    if (!enabled || !gridCanvas) return;
    gridPointerX = event.clientX;
    gridPointerY = event.clientY;
    const motion = Math.hypot(event.movementX || 0, event.movementY || 0);
    gridWarpStrength = Math.min(9, Math.max(1.4, gridWarpStrength + motion * 0.045));
    gridWarpDirection = (event.movementX || 0) + (event.movementY || 0) >= 0 ? 1 : -1;
    requestGridFrame();
  }, { passive: true });
  window.addEventListener("resize", () => {
    if (enabled) resizeGrid();
  }, { passive: true });

  const scheduleMeteor = (first = false) => {
    window.clearTimeout(meteorTimer);
    if (!enabled || !meteorFlight || !meteor || typeof meteorFlight.animate !== "function") return;

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
      meteorFlight.style.left = `${start.x}px`;
      meteorFlight.style.top = `${start.y}px`;
      meteor.style.width = `${110 + Math.random() * 240}px`;
      meteor.style.height = `${4 + Math.random() * 3}px`;
      meteor.style.transform = `rotate(${angle}deg)`;
      meteor.style.setProperty("--meteor-core", palette.core);
      meteor.style.setProperty("--meteor-glow", palette.glow);
      meteorFlight.style.transform = "translate3d(0, 0, 0)";
      meteorFlight.style.opacity = "0";
      void meteorFlight.offsetWidth;
      meteorAnimation = meteorFlight.animate([
        { transform: "translate3d(0, 0, 0)" },
        { transform: `translate3d(${dx}px, ${dy}px, 0)` }
      ], { duration, easing: "linear", fill: "both" });
      meteorFadeAnimation = meteorFlight.animate([
        { opacity: 0, offset: 0 },
        { opacity: 0.95, offset: 0.22 },
        { opacity: 0.9, offset: 0.78 },
        { opacity: 0, offset: 1 }
      ], { duration, easing: "linear", fill: "both" });
      meteorAnimation.onfinish = () => {
        meteorAnimation.cancel();
        meteorFadeAnimation.cancel();
        meteorAnimation = null;
        meteorFadeAnimation = null;
        meteorFlight.style.transform = "translate3d(0, 0, 0)";
        meteorFlight.style.opacity = "0";
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
      window.location.reload();
    });
  }
  if (enabled) startGrid();
  scheduleMeteor(true);
})();
