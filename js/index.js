var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//Esta funcion es para el circulo de x.y
context.beginPath();
context.arc(100, 100, 50, 0, Math.PI*2);
context.fillStyle = "#ffb8b8";
context.fill();
context.closePath();

context.beginPath();
context.arc(140, 50, 30, 0, Math.PI*2);
context.fillStyle = "#ffb8b8";
context.fill();
context.closePath();

context.beginPath();
context.arc(55, 50, 30, 0, Math.PI*2);
context.fillStyle = "#ffb8b8";
context.fill();
context.closePath();

context.beginPath();
context.arc(83, 80, 10, 0, Math.PI*2);
context.fillStyle = "#F8F8EF";
context.fill();
context.closePath();

context.beginPath();
context.arc(126, 80, 10, 0, Math.PI*2);
context.fillStyle = "#F8F8EF";
context.fill();
context.closePath();

context.beginPath();
context.arc(83, 85, 3, 0, Math.PI*2);
context.fillStyle = "#2C3A47";
context.fill();
context.closePath();

context.beginPath();
context.arc(125, 85, 3, 0, Math.PI*2);
context.fillStyle = "#2C3A47";
context.fill();
context.closePath();

context.beginPath();
context.arc(100, 100, 4, 0, Math.PI*2);
context.fillStyle = "#2C3A47";
context.fill();
context.closePath();

context.beginPath();
context.arc(100, 120, 8, 0, Math.PI*2);
context.fillStyle = "#F8F8EF";
context.fill();
context.closePath();
