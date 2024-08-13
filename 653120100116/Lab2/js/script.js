let canvas = document.getElementById('drawingCanvas');
let context = canvas.getContext('2d');

function drawShapes() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // วาดเส้นตรง
    context.beginPath();
    context.moveTo(70, 70);
    context.lineTo(200, 70);
    context.stroke();

    // วาดสามเหลี่ยม
    context.beginPath();
    context.moveTo(70, 150);
    context.lineTo(120, 250);
    context.lineTo(20, 250);
    context.closePath();
    context.stroke();

    // วาดสี่เหลี่ยม
    context.beginPath();
    context.rect(70, 300, 150, 100);
    context.stroke();

    // วาดวงกลม
    context.beginPath();
    context.arc(350, 250, 50, 0, 2 * Math.PI);
    context.stroke();
}

drawShapes();
