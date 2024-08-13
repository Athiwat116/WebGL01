const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// ฟังก์ชันวาดสี่เหลี่ยม
function drawRectangle(x, y, width, height) {
    ctx.fillStyle = '#FF0000'; // สีแดง
    ctx.fillRect(x, y, width, height);
}

// ฟังก์ชันการเปลี่ยนขนาด (Scaling) โดยไม่ใช้ matrix
function scaleRectangle(x, y, width, height, scaleX, scaleY) {
    // วาดสี่เหลี่ยมที่มีขนาดเปลี่ยนแปลง
    drawRectangle(x, y, width * scaleX, height * scaleY);
}

// เริ่มการวาดภาพ
function draw() {
    // ล้างหน้าจอก่อนวาด
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // เติมพื้นหลังสีขาว
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // วาดสี่เหลี่ยมที่ตำแหน่งเริ่มต้น
    drawRectangle(50, 50, 100, 100);

    // เปลี่ยนขนาดและวาดสี่เหลี่ยมใหม่
    scaleRectangle(200, 200, 100, 100, 1.5, 0.5);
}

draw();
