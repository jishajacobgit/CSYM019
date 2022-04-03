function firstfunction() {
 var element = document.getElementById('inputid');
 var div = document.getElementById('divid');
 div.firstChild.nodeValue = element.value;
}
function myLoadFunction() {
 var element = document.getElementById('inputid');
 element.addEventListener('keyup', firstfunction);
}
document.addEventListener('DOMContentLoaded', myLoadFunction)