
const items = document.querySelectorAll('.historia-item');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');
let index = 0;

function mostrarItem(n) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === n);
  });
}

downBtn.addEventListener('click', () => {
  index = (index + 1) % items.length;
  mostrarItem(index);
});

upBtn.addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  mostrarItem(index);
});

