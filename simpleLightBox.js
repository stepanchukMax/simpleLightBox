const saleGalleryList = document.querySelector('.sale-gallery-list');
const saleGalleryItems = saleGalleryList.querySelectorAll('.sale-gallery-item');
const body = document.querySelector('body');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
body.appendChild(overlay);

saleGalleryItems.forEach(item => {
  const img = item.querySelector('img');
  const src = img.getAttribute('src');

  item.addEventListener('click', (event) => {
    event.preventDefault();

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalImg = document.createElement('img');
    modalImg.setAttribute('src', src);
    modal.appendChild(modalImg);

    overlay.appendChild(modal);
    overlay.classList.add('overlay--show');
  });
});

overlay.addEventListener('click', (event) => {
  overlay.classList.remove('overlay--show');
  overlay.removeChild(overlay.firstChild);
});