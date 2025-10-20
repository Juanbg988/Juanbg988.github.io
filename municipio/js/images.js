
const images = [
  document.getElementById('limeImage'),
  document.getElementById('sugarcaneImage'),
  document.getElementById('cornImage'),
  document.getElementById('bananaImage')
];
const rabbit = document.getElementById('rabbitImage');
const hero = document.querySelector('.hero-slider');
const overlay = document.querySelector('.hero-overlay');
let current = 0;

function showNextImage() {
  // Ocultar todas las imágenes
    images.forEach(img => img.style.opacity = '0');
      rabbit.style.opacity = '0';

  // Restaurar overlay gris por defecto
  overlay.style.opacity = '1';
  hero.style.backgroundImage = '';

  if(current < images.length) {
    images[current].style.opacity = '1';
    current++;
} else {
    // Mostrar conejo y cambiar fondo
    rabbit.style.opacity = '1';
    current = 0; // reiniciar ciclo
}
}
// Intervalo de 2.5 segundos
setInterval(showNextImage, 2500);
showNextImage();