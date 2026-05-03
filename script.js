// ==========================
// 🔥 ULTRA SMOOTH SCROLL (EASED)
// ==========================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return; // 🔥 important

    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth"
    });
  });
});
    const offset = 60;

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: "smooth"
    });
  });
});


// ==========================
// 🔥 ACTIVE NAV (THROTTLED)
// ==========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {

      let current = "";

      sections.forEach(sec => {
        const top = sec.offsetTop - 200;
        const height = sec.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          current = sec.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + current
        );
      });

      ticking = false;
    });

    ticking = true;
  }
});


// ==========================
// 🔥 SCROLL REVEAL (STAGGER + PERFORMANCE)
// ==========================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      const children = entry.target.querySelectorAll("*");

      children.forEach((el, i) => {
        el.style.transition = "all 0.6s cubic-bezier(.17,.67,.3,1)";
        el.style.transitionDelay = `${i * 0.03}s`;
      });

      observer.unobserve(entry.target); // 🔥 performance boost
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".section").forEach(sec => observer.observe(sec));


// ==========================
// 🔥 HERO CINEMATIC ENTRY (SPRING STYLE)
// ==========================
window.addEventListener("load", () => {
  const elements = [
    document.querySelector(".left"),
    document.querySelector(".right"),
    document.querySelector(".circle")
  ];

  elements.forEach((el, i) => {
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(60px) scale(0.95)";

    setTimeout(() => {
      el.style.transition = "all 0.9s cubic-bezier(.17,.67,.3,1.2)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0) scale(1)";
    }, i * 200);
  });
});


// ==========================
// 🔥 TEXT REVEAL (SUPER SMOOTH)
// ==========================
// ==========================
// 🔥 TEXT REVEAL (SAFE + TARGETED)
// ==========================
document.querySelectorAll(".shine").forEach(shineText => {

  const text = shineText.textContent.trim();

  if (!text) return;

  shineText.innerHTML = text
    .split("")
    .map(l => `<span>${l === " " ? "&nbsp;" : l}</span>`)
    .join("");

  const spans = shineText.querySelectorAll("span");

  spans.forEach((span, i) => {
    span.style.opacity = "0";
    span.style.display = "inline-block";
    span.style.transform = "translateY(25px)";

    setTimeout(() => {
      span.style.transition = "all 0.45s ease";
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    }, i * 25);
  });

});

// ==========================
// 🔥 CURSOR GLOW (BUTTERY RAF)
// ==========================
const glow = document.createElement("div");
glow.className = "glow";
document.body.appendChild(glow);

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGlow() {
  currentX += (mouseX - currentX) * 0.12;
  currentY += (mouseY - currentY) * 0.12;

  glow.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animateGlow);
}
animateGlow();


// ==========================
// 🔥 MAGNETIC BUTTON (SMOOTH PHYSICS)
// ==========================
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.08)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transition = "0.4s ease";
    btn.style.transform = "translate(0,0) scale(1)";
  });
});


// ==========================
// 🔥 3D CARD (DEPTH + GLOW)
// ==========================
document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 18;
    const rotateY = (rect.width / 2 - x) / 18;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;

    card.style.boxShadow = `
      0 20px 40px rgba(0,0,0,0.4),
      0 0 25px rgba(139,92,246,0.3)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transition = "0.5s ease";
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    card.style.boxShadow = "none";
  });

});