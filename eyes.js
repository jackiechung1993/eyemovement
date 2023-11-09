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
  balls[i].addEventListener('click', () => {
    if (balls[i].style.backgroundColor === 'red') {
      balls[i].style.backgroundColor = 'black';
    } else {
      balls[i].style.backgroundColor = 'red';
    }
  });
}
