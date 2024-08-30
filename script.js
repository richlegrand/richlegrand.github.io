function changeText() {
    const helloElement = document.getElementById('hello');
    helloElement.textContent = "You clicked the button!";
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

function requestFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
    }
}

function adjustImage() {
    const imgElement = document.querySelector('img.mjpeg');
    if (imgElement) {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const imageAspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;
        const viewportAspectRatio = viewportWidth / viewportHeight;

        if (viewportAspectRatio > imageAspectRatio) {
            // Viewport is wider than the image, so fit to height
            imgElement.style.width = 'auto';
            imgElement.style.height = '100vh';
        } else {
            // Viewport is narrower than the image, so fit to width
            imgElement.style.width = '100vw';
            imgElement.style.height = 'auto';
        }
    }
}

window.addEventListener('resize', adjustImage);
window.addEventListener('orientationchange', adjustImage);

// Initial call to set the size on load
adjustImage();

// Usage example
const debugConsole = new DebugConsole('debug-console');
