function myfunction()
{
    alert("The button was pressed")
}

function myLoadFunction(){
    var element = document.getElementById('circle');
    element.addEventListener('click',myfunction);

}


document.addEventListener('DOMContentLoaded',myLoadFunction)