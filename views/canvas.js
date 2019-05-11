"use strict";

window.onload = function () {
  var canvas = document.getElementById('app');
  var ctx = canvas.getContext('2d');
  canvas.style.background = '#8bd8c6';
  /*
    Greens
    Pastel Green
    #77dd77;
    Calming Green
    #8bd8c6
  */

  var scores = [85, 82, 69, 69, 100, 12, 72, 85, 47, 88, 20];
  var width = 50;
  var margin = 10;
  var base = window.innerHeight / 2;
  var currX = 50;
  canvas.width = scores.length * width + margin + 20;
  canvas.height = window.innerHeight;
  ctx.fillStyle = '#77dd77';
  ctx.strokeStyle = 'red'; // rect
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

  scores.forEach(function (score, i) {
    // position starts from top left
    // then width, and height
    console.log("score ".concat(score, " and i: ").concat(i, " for ").concat(currX * i + 10), ctx.strokeStyle);
    /*
      first example, no translate;
      const x = (currX + 10) * i;
      const y = canvas.height - score;
      ctx.fillRect(x, score, width, y);
    */

    ctx.fillStyle = '#77dd77';
    var x = (currX + margin) * i;
    var y = base - score;
    ctx.fillRect(x, score, width, y);
    ctx.fillStyle = '#01796F'; // begins new path when stroke ends path below

    ctx.beginPath();
    var arcX = x + currX / 2;
    var degree = 720 / 360;
    console.log('degree: ', degree * Math.PI); // begX, begY, radius, begAngle, endAngle, anticlockwise

    ctx.arc(arcX, score, 10, 15, 0, degree * Math.PI, false);
    ctx.fill();
    ctx.strokeStyle = '#80A197';
    ctx.lineWidth = 2;
    ctx.stroke(); // translated ^^, so it is flipped
    // really drawing down and then flip
    // const x = (currX + 10) * i;
    // ctx.fillRect(x, 0, width, score);
  }); // start/end arc angles
  //
};