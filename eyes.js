const balls = document.getElementsByClassName('ball');
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};

for (let i = 0; i < balls.length; i++) {
  balls[i].setAttribute('data-color', 'black'); // Set initial color to black
  balls[i].addEventListener('click', () => {
    if (balls[i].getAttribute('data-color') === 'red') {
      balls[i].style.backgroundColor = 'black';
      balls[i].setAttribute('data-color', 'black');
    } else {
      balls[i].style.backgroundColor = 'red';
      balls[i].setAttribute('data-color', 'red');
    }
  });
}

//we use data-color to keep track of the current color. When ball is clicked the event listener determines then existing attribute color and toggles it. 
