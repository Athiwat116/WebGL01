const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// ฟังก์ชันวาดสี่เหลี่ยม
function drawRectangle(x, y, width, height) {
    ctx.fillStyle = '#FF0000'; // สีแดง
    ctx.fillRect(x, y, width, height);
}

// ฟังก์ชันการเลื่อนตำแหน่ง (Translation)
function translateRectangle(dx, dy) {
    ctx.setTransform(1, 0, 0, 1, dx, dy); // ตั้งค่า Translation Matrix
}

// เริ่มการวาดภาพ
function draw() {
    // ล้างหน้าจอก่อนวาด
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // วาดสี่เหลี่ยมที่ตำแหน่งเริ่มต้น
    drawRectangle(50, 50, 100, 100);

    // เลื่อนตำแหน่งและวาดสี่เหลี่ยมใหม่
    translateRectangle(150, 150);
    drawRectangle(50, 50, 100, 100);
}

draw();

