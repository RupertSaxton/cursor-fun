const body = document.body;
const bodyHeight = body.offsetHeight;
const bodyWidth = body.offsetWidth;

const container = document.querySelector('.image-container');
const image = document.querySelector('.image');

function applyCaret(e) {
  var heightOffset = bodyHeight/2 - e.clientY;
  var widthOffset = bodyWidth/2 - e.clientX;
  body.className = '';
  if (Math.abs(widthOffset) > Math.abs(heightOffset)) {
    if (widthOffset > 0) {
      body.classList.add('left');
      container.scroll(container.scrollLeft - 10, container.scrollTop)
    } else {
      body.classList.add('right');
      container.scroll(container.scrollLeft + 10, container.scrollTop)
    }
  } else {
    if (heightOffset > 0) {
      body.classList.add('up');
      container.scroll(container.scrollLeft, container.scrollTop - 10)
    } else {
      body.classList.add('down');
      container.scroll(container.scrollLeft, container.scrollTop + 10)
    }
  }
}

function removeCaret(e) {
  e.stopPropagation();
  body.className = '';
}

window.addEventListener('mousemove', applyCaret);
container.addEventListener('mousemove', removeCaret);
container.scroll(image.naturalWidth/2, image.naturalHeight/2);
