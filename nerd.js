
const object = document.getElementById('img1');
const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;

let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;
let speed = 2; // Pixels per frame

function setRandomTarget() {
  targetX = Math.random() * (containerWidth - object.offsetWidth);
  targetY = Math.random() * (containerHeight - object.offsetHeight);
}

function animate() {
  // Calculate direction towards target
  const dx = targetX - currentX;
  const dy = targetY - currentY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Move towards target
  if (distance > speed) {
    currentX += (dx / distance) * speed;
    currentY += (dy / distance) * speed;
  } else {
    currentX = targetX;
    currentY = targetY;
    setRandomTarget(); // Set a new random target when reached
  }

  // Apply new position
  object.style.left = currentX + 'px';
  object.style.top = currentY + 'px';

  requestAnimationFrame(animate); // Loop the animation
}

// Initial setup
setRandomTarget();
animate();