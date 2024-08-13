function drawSquare(ctx, vertices, color) {
    ctx.beginPath();
    ctx.moveTo(vertices[0][0], vertices[0][1]);
    for (let i = 1; i < vertices.length; i++) {
        ctx.lineTo(vertices[i][0], vertices[i][1]);
    }
    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
}

function applyScaling(vertices, scaleX, scaleY) {
    const scaleMatrix = [
        [scaleX, 0],
        [0, scaleY]
    ];
    return vertices.map(([x, y]) => [
        x * scaleMatrix[0][0] + y * scaleMatrix[0][1],
        x * scaleMatrix[1][0] + y * scaleMatrix[1][1]
    ]);
}

function main() {
    const vertices = [
        [50, 50],
        [150, 50],
        [150, 150],
        [50, 150]
    ];

    const scaleX = 2;
    const scaleY = 1.5;
    const scaledVertices = applyScaling(vertices, scaleX, scaleY);

    const beforeCanvas = document.getElementById('beforeCanvas');
    const afterCanvas = document.getElementById('afterCanvas');
    const beforeCtx = beforeCanvas.getContext('2d');
    const afterCtx = afterCanvas.getContext('2d');

    // วาดสี่เหลี่ยมก่อนการเปลี่ยนขนาด
    drawSquare(beforeCtx, vertices, 'blue');
    beforeCtx.clearRect(0, 0, beforeCanvas.width, beforeCanvas.height);
    beforeCtx.strokeStyle = 'black';
    beforeCtx.lineWidth = 2;
    drawSquare(beforeCtx, vertices, 'blue');

    // วาดสี่เหลี่ยมหลังการเปลี่ยนขนาด
    drawSquare(afterCtx, scaledVertices, 'red');
    afterCtx.clearRect(0, 0, afterCanvas.width, afterCanvas.height);
    afterCtx.strokeStyle = 'black';
    afterCtx.lineWidth = 2;
    drawSquare(afterCtx, scaledVertices, 'red');

    // แสดง Scale Matrix
    document.getElementById('matrixOutput').textContent = `[[${scaleX}, 0], [0, ${scaleY}]]`;
}

window.onload = main;
