function KeyDownfn()
{
    var element = document.getElementById('circle');
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 10 + 'px';
}
function myLoadFunction() {
 document.addEventListener('keydown', KeyDownfn);
}

document.addEventListener('DOMContentLoaded',myLoadFunction);


