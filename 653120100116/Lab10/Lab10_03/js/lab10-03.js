const canvas = document.getElementById('catCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 320;  // ขนาดกว้างของภาพ
canvas.height = 320; // ขนาดสูงของภาพ

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawPixel(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * 20, y * 20, 20, 20);  // ขนาดของแต่ละจุดเป็น 20x20 พิกเซล
}

// การสร้างภาพแมวด้วยพิกเซล (จัดตามภาพที่คุณให้มา)
const pixels = [
    // หูซ้าย (ขอบดำ)
    {x: 1, y: 1, color: '#000000'},
    {x: 2, y: 1, color: '#000000'},
    {x: 1, y: 2, color: '#000000'},
    // หูซ้าย (ด้านใน)
    {x: 2, y: 2, color: '#757575'},

    // หูขวา (ขอบดำ)
    {x: 6, y: 1, color: '#000000'},
    {x: 7, y: 1, color: '#000000'},
    {x: 7, y: 2, color: '#000000'},
    // หูขวา (ด้านใน)
    {x: 6, y: 2, color: '#757575'},

    // หน้าแมว
    {x: 3, y: 2, color: '#cccccc'},
    {x: 4, y: 2, color: '#cccccc'},
    {x: 5, y: 2, color: '#cccccc'},
    {x: 2, y: 3, color: '#cccccc'},
    {x: 3, y: 3, color: '#cccccc'},
    {x: 4, y: 3, color: '#cccccc'},
    {x: 5, y: 3, color: '#cccccc'},
    {x: 6, y: 3, color: '#cccccc'},
    {x: 1, y: 4, color: '#cccccc'},
    {x: 2, y: 4, color: '#cccccc'},
    {x: 3, y: 4, color: '#cccccc'},
    {x: 4, y: 4, color: '#cccccc'},
    {x: 5, y: 4, color: '#cccccc'},
    {x: 6, y: 4, color: '#cccccc'},
    {x: 7, y: 4, color: '#cccccc'},

    // ตาและปาก
    {x: 2, y: 3, color: '#000000'},
    {x: 6, y: 3, color: '#000000'},
    {x: 3, y: 4, color: '#000000'},
    {x: 5, y: 4, color: '#000000'},
    {x: 4, y: 5, color: '#000000'},

    // ลำตัวแมว
    {x: 1, y: 5, color: '#cccccc'},
    {x: 2, y: 5, color: '#cccccc'},
    {x: 3, y: 5, color: '#cccccc'},
    {x: 4, y: 5, color: '#cccccc'},
    {x: 5, y: 5, color: '#cccccc'},
    {x: 6, y: 5, color: '#cccccc'},
    {x: 7, y: 5, color: '#cccccc'},
    {x: 1, y: 6, color: '#cccccc'},
    {x: 2, y: 6, color: '#cccccc'},
    {x: 3, y: 6, color: '#cccccc'},
    {x: 4, y: 6, color: '#cccccc'},
    {x: 5, y: 6, color: '#cccccc'},
    {x: 6, y: 6, color: '#cccccc'},
    {x: 7, y: 6, color: '#cccccc'},
    {x: 1, y: 7, color: '#cccccc'},
    {x: 2, y: 7, color: '#cccccc'},
    {x: 3, y: 7, color: '#cccccc'},
    {x: 4, y: 7, color: '#cccccc'},
    {x: 5, y: 7, color: '#cccccc'},
    {x: 6, y: 7, color: '#cccccc'},
    {x: 7, y: 7, color: '#cccccc'},

    // ขาซ้ายหน้า
    {x: 2, y: 8, color: '#000000'},
    {x: 3, y: 8, color: '#000000'},
    // ขาขวาหน้า
    {x: 5, y: 8, color: '#000000'},
    {x: 6, y: 8, color: '#000000'},
    // ขาซ้ายหลัง
    {x: 2, y: 9, color: '#000000'},
    {x: 3, y: 9, color: '#000000'},
    // ขาขวาหลัง
    {x: 5, y: 9, color: '#000000'},
    {x: 6, y: 9, color: '#000000'},

    // หางแมว
    {x: 7, y: 5, color: '#000000'},
    {x: 7, y: 6, color: '#cccccc'},
    {x: 7, y: 7, color: '#000000'},
];

pixels.forEach(pixel => {
    drawPixel(pixel.x, pixel.y, pixel.color);
});
