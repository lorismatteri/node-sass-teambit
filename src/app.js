const hamMenu = $('#hamburger');

hamMenu.click(function() {
    if($('#menu').css('display') == "none")
     {
        $('#menu').fadeIn(1000);
     }
     else
     {
        $('#menu').fadeOut(1000);
     }
});
