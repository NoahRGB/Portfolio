let header = document.getElementById("header");
let headerBgX = 0;
let headerBgY = 0;
let headerBgVx = 0.2;
let headerBgVy = 0.25;

const animate = () => {
  headerBgVx += (Math.random() - 0.5) * 0.02;
  headerBgVy += (Math.random() - 0.5) * 0.02;

  headerBgX += headerBgVx;
  headerBgY += headerBgVy;

  header.style.backgroundPosition =
    `${headerBgX}px ${headerBgY}px`;

  requestAnimationFrame(animate);
}

animate();
