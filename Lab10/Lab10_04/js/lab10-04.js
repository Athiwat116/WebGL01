window.onload = function() {
    const canvas = document.getElementById('flowerpotCanvas');
    const context = canvas.getContext('2d');

    // Load the image to use as texture for the entire flowerpot
    const potImage = new Image();
    potImage.src = './gg.jpg'; // ใช้ภาพที่คุณอัพโหลด

    potImage.onload = function() {
        console.log('Pot texture image loaded successfully.');

        // Draw the flowerpot
        function drawFlowerpot(x, y, width, height) {
            // Create a pattern from the loaded image
            const pattern = context.createPattern(potImage, 'repeat');

            // Draw the pot base with the image pattern
            context.fillStyle = pattern;
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x + width, y);
            context.lineTo(x + width - 20, y + height);
            context.lineTo(x + 20, y + height);
            context.closePath();
            context.fill();

            // Draw the pot rim with the same image pattern
            context.beginPath();
            context.rect(x - 10, y - 10, width + 20, 20);
            context.fill();
        }

        // Calculate the position of the pot to be centered
        const potWidth = 200;
        const potHeight = 150;
        const potX = (canvas.width - potWidth) / 2;
        const potY = (canvas.height - potHeight) / 2 + 50; // Adjust Y to move the pot slightly lower

        // Draw the flowerpot at the calculated position
        drawFlowerpot(potX, potY, potWidth, potHeight);
    };

    potImage.onerror = function() {
        console.error('Failed to load the pot texture image.');
    };
};
