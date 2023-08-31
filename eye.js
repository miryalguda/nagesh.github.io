const balls2 = document.getElementsByClassName('ball2');

document.onmousemove2 = (event) => {
  const x2 = (event.clientX * 100) / window.innerWidth + '%';
  const y2 = (event.clientY * 100) / window.innerHeight + '%';

  balls2[0].style.left = x2;
  balls2[0].style.top = y2;
  balls2[0].transform2 = 'translate(-' + x2+ ',-' + y2 + ')';
};




const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  balls[0].style.left = x;
  balls[0].style.top = y;
  balls[0].transform = 'translate(-' + x + ',-' + y + ')';
};



