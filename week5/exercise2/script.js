function myfunction()
{
    var element = document.getElementById('circle');
    element.style.backgroundColor = 'blue';
}

function myLoadFunction(){
    var element = document.getElementById('circle');
    element.addEventListener('click',myfunction);

}


document.addEventListener('DOMContentLoaded',myLoadFunction)