const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// ฟังก์ชันวาดสี่เหลี่ยม
function drawRectangle(x, y, width, height) {
    ctx.fillStyle = '#FF0000'; // สีแดง
    ctx.fillRect(x, y, width, height);
}

// ฟังก์ชันการเลื่อนตำแหน่ง (Translation)
function translateRectangle(x, y, dx, dy) {
    return { newX: x + dx, newY: y + dy };
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

    // คำนวณตำแหน่งใหม่และวาดสี่เหลี่ยมใหม่
    const newPosition = translateRectangle(50, 50, 150, 150);
    drawRectangle(newPosition.newX, newPosition.newY, 100, 100);
}

draw();

