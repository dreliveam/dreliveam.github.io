(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("cyberpunk-toggle");
  if (!toggle) return;

  let enabled = root.getAttribute("data-cyberpunk") === "on";
  const isChinese = root.lang.toLowerCase().startsWith("zh");

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

  render();
  toggle.addEventListener("click", () => {
    enabled = !enabled;
    try {
      localStorage.setItem("cyberpunk", enabled ? "on" : "off");
    } catch (error) {}
    render();
  });
})();
