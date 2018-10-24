$(function () {
    $('[data-toggle="popover"]').popover({trigger: 'hover'})
    $('.fa-chevron-up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    // menu icon
    $(".navbar-toggle").click(function(){
        $(".navbar-toggle i").toggleClass("fa-bars fa-times");
    })

    // auto hide menu
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        if(window.innerWidth < 720) {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
             document.querySelector(".navbar-expand-custom").style.top = "0";
             document.querySelector(".inner-right.sticky").classList.add("stickyoffset");
             document.querySelector(".inner-left.sticky").classList.add("stickyoffset");
            } else {
                document.querySelector(".navbar-expand-custom").style.top = "-59px";
                document.querySelector(".inner-right.sticky").classList.remove("stickyoffset");
                document.querySelector(".inner-left.sticky").classList.remove("stickyoffset");
        
             }
            prevScrollpos = currentScrollPos;
        }
    }

    // yesil dugme click
    $("#green").click(function(event){
        event.preventDefault();
        var here = 0;
        if(window.innerWidth > 719) {
            here = 232
        }else{
            here = 232-99;
        }
        $("html, body").animate({ scrollTop: here }, "slow");
        $('#green-block').toggleClass("wide260");
        $('.middle-block').toggleClass("translate50");
        $('#green i').toggleClass("fa-angle-double-left fa-angle-double-right");
    });

    $(".toggle-button-left").click(function(event){
        event.preventDefault();
        var here = 0;
        if(window.innerWidth > 719) {
            here = 232
        }else{
            here = 232-99;
        }
        setTimeout(() => {
            $('.inner-inner-left').toggleClass("displayblock");
        }, 1000);
        $("html, body").animate({ scrollTop: here }, "slow");
        $('#blue-block').toggleClass("wide340");
        $('.toggle-button-left').toggleClass("wide340");
        $('.inner-inner-left').toggleClass("inner-transform");
        $('.middle-block').toggleClass("translate15");
        $('#blue i').toggleClass("fa-angle-double-left fa-angle-double-right");
        $('.nav.-social.blue').toggleClass("makewhite");
        $('.nav.-social.blue a').toggleClass("makegray");  
    })
})