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

function resizeImageToViewport() {
    const imgElement = document.querySelector('img.mjpeg');
    if (imgElement) {
        imgElement.style.width = window.innerWidth + 'px';
        imgElement.style.height = window.innerHeight + 'px';
    }
}

window.addEventListener('resize', resizeImageToViewport);
window.addEventListener('orientationchange', resizeImageToViewport);

// Initial call to set the size on load
resizeImageToViewport();
class DebugConsole {
    constructor(elementId) {
        this.consoleElement = document.getElementById(elementId);
        if (!this.consoleElement) {
            console.error(`Element with id ${elementId} not found.`);
        }
    }

    log(message) {
        if (this.consoleElement) {
            const msgElement = document.createElement('p');
            msgElement.textContent = message;
            this.consoleElement.appendChild(msgElement);
            this.consoleElement.scrollTop = this.consoleElement.scrollHeight;
        }
    }

    clear() {
        if (this.consoleElement) {
            this.consoleElement.innerHTML = '';
        }
    }
}

// Usage example
const debugConsole = new DebugConsole('debug-console');
