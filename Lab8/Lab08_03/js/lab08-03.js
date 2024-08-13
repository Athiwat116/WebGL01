const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// ฟังก์ชันวาดสี่เหลี่ยม
function drawRectangle(x, y, width, height) {
    ctx.fillStyle = '#FF0000'; // สีแดง
    ctx.fillRect(x, y, width, height);
}

// ฟังก์ชันการหมุน (Rotation)
function rotateRectangle(x, y, width, height, angle) {
    // คำนวณมุมเป็น radian
    let rad = angle * Math.PI / 180;

    // บันทึกสถานะของ context ก่อนหมุน
    ctx.save();

    // ย้ายจุดหมุนไปที่จุดกึ่งกลางของสี่เหลี่ยม
    ctx.translate(x + width / 2, y + height / 2);

    // หมุน context
    ctx.rotate(rad);

    // ย้ายกลับจุดหมุนและวาดสี่เหลี่ยม
    ctx.translate(-x - width / 2, -y - height / 2);
    drawRectangle(x, y, width, height);

    // คืนค่าการหมุนและการย้าย
    ctx.restore();
}

// เริ่มการวาดภาพ
function draw() {
    // ล้างหน้าจอก่อนวาด
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // เติมพื้นหลังสีขาว
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // วาดสี่เหลี่ยมที่ตำแหน่งเริ่มต้น
    drawRectangle(100, 100, 100, 100);

    // หมุนและวาดสี่เหลี่ยมใหม่
    rotateRectangle(100, 100, 100, 100, 45);
}

draw();
