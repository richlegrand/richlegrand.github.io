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
