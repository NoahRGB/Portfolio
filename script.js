let titles = document.getElementsByClassName("title-container")
let titleBgX = 0;
let titleBgY = 0;
let titleBgVx = 0.9;
let titleBgVy = 0.1;

const animate = () => {

  titleBgVx += (Math.random() - 0.5) * 0.02;
  titleBgVy += (Math.random() - 0.5) * 0.02;

  titleBgX += titleBgVx;
  titleBgY += titleBgVy;

	for (title of titles) {
		title.style.backgroundPosition =	`${titleBgX}px ${titleBgY}px`;
	}

  requestAnimationFrame(animate);
}

animate();
