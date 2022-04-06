function KeyDown(event) {
    if (event.keyCode == 37) {
    setInterval(moveLeft, 10);
    }
    if (event.keyCode == 38) {
    setInterval(moveUp, 10);
    }
    if (event.keyCode == 40) {
    setInterval(moveDown, 10);
    }
    if (event.keyCode == 39) {
    setInterval(moveRight, 10);
    }
   }
   function LoadEvent() {
    document.addEventListener('keydown', KeyDown);
   }
   document.addEventListener('DOMContentLoaded', LoadEvent);
   
   function moveUp() {
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = positionTop - 1 + 'px';
   }
   function moveDown() {
    var element = document.getElementById('circle');
    var positionTop = element.offsetTop;
    element.style.top = positionTop + 1 + 'px';
   }
   function moveLeft() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 1 + 'px';
   }
   function moveRight() {
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft + 1 + 'px';
   }   