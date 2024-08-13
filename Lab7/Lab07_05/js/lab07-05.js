const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// ฟังก์ชันวาดหูของหมา (ใช้สามเหลี่ยม)
function drawEar(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - size, y + size);
    ctx.lineTo(x + size, y + size);
    ctx.closePath();
    ctx.fillStyle = '#8B4513';  // สีหู
    ctx.fill();
    ctx.stroke();
}

// ฟังก์ชันวาดหัวหมา (ใช้วงกลม)
function drawHead(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#D2B48C';  // สีหัวหมา
    ctx.fill();
    ctx.stroke();
}

// ฟังก์ชันวาดตาหมา (ใช้วงกลม)
function drawEye(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'black';  // สีตา
    ctx.fill();
    ctx.stroke();
}

// ฟังก์ชันวาดปากหมา (ใช้เส้นตรง)
function drawMouth(x, y, width, height) {
    ctx.beginPath();
    ctx.moveTo(x - width / 2, y);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x + width / 2, y);
    ctx.stroke();
}

// ฟังก์ชันวาดจมูกหมา (ใช้วงกลม)
function drawNose(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'black';  // สีจมูก
    ctx.fill();
    ctx.stroke();
}

// เริ่มวาดหมา
function drawDog() {
    // วาดหูหมา
    drawEar(100, 50, 40);  // หูซ้าย
    drawEar(200, 50, 40);  // หูขวา

    // วาดหัวหมา
    drawHead(150, 150, 80);

    // วาดตาหมา
    drawEye(120, 130, 10);  // ตาซ้าย
    drawEye(180, 130, 10);  // ตาขวา

    // วาดจมูกหมา
    drawNose(150, 170, 10);

    // วาดปากหมา
    drawMouth(150, 180, 30, 20);
}

drawDog();
