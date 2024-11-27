const canvas = document.getElementById('stadiumCanvas');
const ctx = canvas.getContext('2d');

// Fondo del campo de juego (rectángulo principal)
ctx.fillStyle = '#008000'; // color verde para el césped
ctx.fillRect(100, 100, 600, 400); // posición (x, y), ancho y alto

// Líneas de banda y línea de medio campo
ctx.strokeStyle = '#FFFFFF'; // color blanco para las líneas
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(100, 300); // Línea de medio campo
ctx.lineTo(700, 300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 100); // Línea superior del campo
ctx.lineTo(100, 500); // Línea inferior del campo
ctx.moveTo(700, 100); // Línea superior del campo
ctx.lineTo(700, 500); // Línea inferior del campo
ctx.stroke();

// Área de la portería (en ambos lados)
ctx.strokeRect(100, 250, 40, 100); // Lado izquierdo
ctx.strokeRect(660, 250, 40, 100); // Lado derecho

// Círculo central
ctx.beginPath();
ctx.arc(400, 300, 50, 0, Math.PI * 2); // Círculo en el centro del campo
ctx.stroke();

// Marcador del punto de penalti
ctx.beginPath();
ctx.arc(400, 300, 10, 0, Math.PI * 2); // Punto central
ctx.fillStyle = '#FF0000';
ctx.fill();
