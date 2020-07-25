const body = document.body;
const bodyHeight = body.offsetHeight;
const bodyWidth = body.offsetWidth;

function applyCaret(e) {
  var heightOffset = bodyHeight/2 - e.clientY;
  var widthOffset = bodyWidth/2 - e.clientX;
  body.className = '';
  if (Math.abs(widthOffset) > Math.abs(heightOffset)) {
    if (widthOffset > 0) {
      body.classList.add('left');
    } else {
      body.classList.add('right');
    }
  } else {
    if (heightOffset > 0) {
      body.classList.add('up');
    } else {
      body.classList.add('down');
    }
  }
}

window.addEventListener('mousemove', applyCaret);
