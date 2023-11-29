alert('Hello JS!');
function loadImage(id, targetId) {
    var el = document.getElementById(id);
    var targetEl = targetId ? document.getElementById(targetId) : el;
    var imageToLoad;
    if (el.dataset.image) {
        imageToLoad = el.dataset.image;
    } else if (typeof el.currentSrc === 'undefined') {
        imageToLoad = el.src;
    } else {
        imageToLoad = el.currentSrc;
    }
    if (imageToLoad) {
        var img = new Image();
        img.src = imageToLoad;
        img.onload = function () {
            targetEl.classList.add('is-loaded');
        };
    }
}
function loadImage(id, targetId) { }
var el = document.getElementById(id);
var targetEl = targetId ? document.getElementById(targetId) : el;
var imageToLoad;
if (el.dataset.image) {
    imageToLoad = el.dataset.image;
}
else if (typeof el.currentSrc === 'undefined') {
    imageToLoad = el.src;
}
else {
    imageToLoad = el.currentSrc;
}
if (imageToLoad)
    var img = new Image();
img.src = imageToLoad;
img.onload = function () {
    targetEl.classList.add('is-loaded');
};
.wallpaper {
    animation - name; zoomOut;
    animation - timing - function() { ease- out;
}
             .picture - shadow ;
    animation - name; picShadow;
}
             .picture - image ;{
    animation - name; picImage;
}
                 .Wallpaper {
    animation - timing - function() {ease- out;
}
.wallpaper.is - loaded ;{
    animation - delay; 1s; animation - name; zoomOut;
}
.picture.is - loaded.picture - shadow; {
    animation - name; picShadow;
}
.picture.is - loaded.picture - image; {
    animation - name; picImage;
}
     .wallpaper,          
      .picture - shadow, 
      .picture - image ;{
    opacity: 0;
}
document.addEventListener('DOMContentLoaded', function () {
    loadImage('wallpaper');
    loadImage('pictureImage', 'picture');
});






                 }
