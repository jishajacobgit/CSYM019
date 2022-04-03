    function headingchange()
    {
        var element = document.getElementById('pageheading');
        element.firstChild.nodeValue = 'New Heading';
       
    }
    function paragraphchange()
    {
       
        var element = document.getElementById('paragraph');
        element.firstChild.nodeValue = 'New Paragraph';
    }
    function myloadfunction()
    {
       
        var element = document.getElementById('paragraph');
    element.addEventListener('mouseover',paragraphchange)

    var element = document.getElementById('pageheading');
    element.addEventListener('click',headingchange)
    }

    document.addEventListener('DOMContentLoaded',myloadfunction);

