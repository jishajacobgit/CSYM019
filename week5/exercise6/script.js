function myInterval()
{
    var element = document.getElementById('circle');
    var opacity = parseFloat(element.style.opacity);
    element.style.opacity = opacity - 0.01;
}
function myClickEvent() {
    setInterval(myInterval, 10);
   }
   

function myLoadFunction(){
    var element = document.getElementById('circle');
    element.addEventListener('click',myClickEvent);
    element.style.opacity = 1;


}


document.addEventListener('DOMContentLoaded',myLoadFunction)