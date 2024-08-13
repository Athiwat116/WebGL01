const canvas = document.getElementById('dogCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawPoint(x, y, size, color) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

// Example points for a simple dog face
drawPoint(200, 150, 50, 'black');  // Face
drawPoint(150, 100, 30, 'brown');  // Left ear
drawPoint(250, 100, 30, 'brown');  // Right ear
drawPoint(180, 140, 10, 'black');  // Left eye
drawPoint(220, 140, 10, 'black');  // Right eye
drawPoint(200, 180, 15, 'yellow');  // Nose
drawPoint(200, 200, 5, 'red');   // Mouth


