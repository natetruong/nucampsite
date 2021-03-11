$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("em").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("em").removeClass("fa-pause");
            $("#carouselButton").children("em").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("em").removeClass("fa-play");
            $("#carouselButton").children("em").addClass("fa-pause");

        }
    });
        
});