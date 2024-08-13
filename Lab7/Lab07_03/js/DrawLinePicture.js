window.onload = function() {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 600;

    // เติมพื้นหลังสีขาว
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // เริ่มต้นการวาดรูปบ้าน
    context.beginPath();
    
    // วาดตัวบ้าน
    context.moveTo(300, 400);  // จุดเริ่มต้นล่างซ้าย
    context.lineTo(500, 400);  // ล่างขวา
    context.lineTo(500, 300);  // ขวาบน
    context.lineTo(300, 300);  // ซ้ายบน
    context.lineTo(300, 400);  // กลับไปจุดเริ่มต้นล่างซ้าย

    // วาดหลังคาบ้าน
    context.moveTo(300, 300);  // ซ้ายล่างของหลังคา
    context.lineTo(400, 200);  // จุดยอดหลังคา
    context.lineTo(500, 300);  // ขวาล่างของหลังคา

    // ใช้การ stroke เพื่อวาดเส้น
    context.stroke();
}

