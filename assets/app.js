// Vanta Waves background
let vantaEffect = null;

function initVanta(){
  if (vantaEffect) vantaEffect.destroy();
  vantaEffect = VANTA.WAVES({
    el: "#vanta-bg",
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x1a57ff,        // wave color
    shininess: 30.0,
    waveHeight: 18.0,
    waveSpeed: 0.65,
    zoom: 0.85
  });
}

window.addEventListener("DOMContentLoaded", initVanta);
window.addEventListener("resize", () => {
  // re-init on resize so it fits perfectly
  initVanta();
});

// Smooth-scroll fix for Safari (already using CSS smooth-behavior)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (id.length > 1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior: "smooth", block: "start"});
    }
  });
});
