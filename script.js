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

window.addEventListener('load', function() {
    if (1) {
        const imgElement = document.querySelector('img.mjpeg');
        imgElement.addEventListener('click', function() {
            requestFullScreen(imgElement);
        });
        imgElement.addEventListener('touchstart', function() {
            requestFullScreen(imgElement);
        });
    }
});

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
debugConsole.log('This is a debug message.');
debugConsole.log('Another message.');