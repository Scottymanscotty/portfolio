$( document ).ready(function() {
        
    $(".header-container").hide().fadeIn(2200);
    $(".about-me-main").hide();
    
    $(window).scroll(function(){
        var fromTop = window.pageYOffset;
        
        var elToShow = $(".about-me-main").offset().top;
        
        var windowHeight = $(window).height();

        console.log(fromTop + " from top");
        console.log(elToShow + " element to show");
        console.log(windowHeight + " window height");

        if(fromTop >= (elToShow - windowHeight) ) {            
            $(".about-me-main").fadeIn(2000);
        } else {
            
        }
    });
});



// show items when they appear on screen
// on scroll count how far down you are and how far down the element was originally

