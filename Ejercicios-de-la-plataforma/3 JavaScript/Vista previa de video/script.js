console.log("page loaded...");

function startPreview(video){
    video.muted=true;
    video.load();
    video.play();
}
function stopPreview(video){
    video.pause();
}

function activeControls(video) {
    video.load();
    video.setAttribute('controls', '');
    video.muted=false;
    video.play();
    video.removeAttribute('onmouseover');
    video.removeAttribute('onmouseout');
    video.removeAttribute('onclick');
}
