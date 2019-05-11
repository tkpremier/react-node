
window.onload = () => {
  const canvas = document.getElementById('app');
  const ctx = canvas.getContext('2d');
  canvas.style.background = '#8bd8c6';
  /*
    Greens
    Pastel Green
    #77dd77;
    Calming Green
    #8bd8c6
  */
 const scores = [85, 82, 69, 69, 100, 12, 72, 85, 47, 88, 20];
  const width = 50;
  const margin = 10;
  const base = window.innerHeight / 2;
  const currX = 50;
 canvas.width = scores.length * width + margin + 20;
 
  canvas.height = window.innerHeight; 
  ctx.fillStyle = '#77dd77';
  ctx.strokeStyle = 'red';
  // rect
  // ctx.rect(10, 10, 400, 200);
  // arc
  // ctx.arc(9, 10, 35, 0, 360, false);
  // fill params: (posX, posY, w, h)
  // ctx.fill();
  // ctx.fillRect(10, 15, 100, 200);
  // ctx.strokeRect(10, 10, 400, 200);
  // ctx.stroke();
  // given scores, show how you would create a bar chart and sort bar chart
  /*
    Transform/Translate example for baseline chart
  */
  // translate
  // set up and translate canvas. ex:move down base and draw UP
  // ctx.translate(scores.length * (width + margin), base * 1.33);
  // 1 Math.PI = 180 degrees;
  // rotate the canvas so you start from bottom up
  // ctx.rotate(1 * Math.PI);
  /* 
    Arc Example
    1 Math.PI = 180 degrees;
    arc(start angle, end angle
  */
  scores.forEach((score, i) => {
    // position starts from top left
    // then width, and height
    console.log(`score ${score} and i: ${i} for ${currX * i + 10}`, ctx.strokeStyle);
    /*
      first example, no translate;
      const x = (currX + 10) * i;
      const y = canvas.height - score;
      ctx.fillRect(x, score, width, y);
    */ 
    ctx.fillStyle = '#77dd77';
    const x = (currX + margin) * i;
    const y = base - score;
    ctx.fillRect(x, score, width, y);
    ctx.fillStyle = '#01796F';
    // begins new path when stroke ends path below
    ctx.beginPath();
    const arcX = x + (currX / 2);
    const degree = 720 / 360;
    console.log('degree: ', degree * Math.PI);
    // begX, begY, radius, begAngle, endAngle, anticlockwise
    ctx.arc(arcX, score, 10, 15, 0, degree * Math.PI, false);
    ctx.fill();
    ctx.strokeStyle = '#80A197';
    ctx.lineWidth = 2;
    ctx.stroke();

      // translated ^^, so it is flipped
    // really drawing down and then flip
    // const x = (currX + 10) * i;
    // ctx.fillRect(x, 0, width, score);
  });
  // start/end arc angles
  //
}
