const imageContainer = document.getElementById('imageContainer');
const movingImage = document.getElementById('movingImage');

imageContainer.addEventListener('mouseenter', () => {
  imageContainer.addEventListener('mousemove', moveImage);
});

imageContainer.addEventListener('mouseleave', () => {
  imageContainer.removeEventListener('mousemove', moveImage);
  resetImageRotation();
});

function moveImage(e) {
  const { clientX, clientY } = e;
  const { left, top, width, height } = imageContainer.getBoundingClientRect();

  const x = clientX - left;
  const y = clientY - top;

  const rotationX = ((x - width / 2) / width) * 45;
  const rotationY = ((y - height / 2) / height) * 45;

  movingImage.style.transform = `rotateX(${rotationY}deg) rotateY(${rotationX}deg)`;
}

function resetImageRotation() {
  movingImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
}
