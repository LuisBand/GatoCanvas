'use strict'
var canvas=document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var cuadroTam = 100;
canvas.height = 300;
canvas.width = 300;

ctx.lineWidth = 10;
ctx.strokeStyle = "black";
canvas.style.cursor = "pointer";

ctx.moveTo(100, 0);
ctx.lineTo(100,300);
ctx.moveTo(200, 0);
ctx.lineTo(200,300);
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.moveTo(0, 200);
ctx.lineTo(300, 200);
ctx.stroke();


canvas.addEventListener("click", function(){
  alert("Hola");
});

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top

    };
}
