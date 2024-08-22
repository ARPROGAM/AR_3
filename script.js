const modelViewer = document.getElementById('ar-model');

// Add smooth scaling and rotation with two fingers
let initialDistance = 0;
let initialScale = 1;

modelViewer.addEventListener('touchstart', event => {
    if (event.touches.length === 2) {
        initialDistance = getDistance(event.touches[0], event.touches[1]);
        initialScale = modelViewer.scale || 1;
    }
});

modelViewer.addEventListener('touchmove', event => {
    if (event.touches.length === 2) {
        const currentDistance = getDistance(event.touches[0], event.touches[1]);
        const scale = initialScale * (currentDistance / initialDistance);
        modelViewer.scale = `${scale} ${scale} ${scale}`;
    }
});

function getDistance(touch1, touch2) {
    const deltaX = touch1.clientX - touch2.clientX;
    const deltaY = touch1.clientY - touch2.clientY;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

// Optional: Add custom rotation (can be handled by model-viewer’s camera-controls)
modelViewer.addEventListener('touchmove', event => {
    if (event.touches.length === 2) {
        const rotationX = (event.touches[0].clientY + event.touches[1].clientY) / 2;
        const rotationY = (event.touches[0].clientX + event.touches[1].clientX) / 2;
        modelViewer.cameraOrbit = `${rotationX}deg ${rotationY}deg auto`;
    }
});
