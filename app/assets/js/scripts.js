$(function () {
    $('[data-toggle="popover"]').popover({trigger: 'hover'})
    $('.fa-chevron-up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(".navbar-toggle").click(function(){
        $(".navbar-toggle i").toggleClass("fa-bars fa-times");
    })

    $(window).on('resize', function(){
        if(window.innerWidth > 960){
            $('.nav.-social.blue').css("background","");
            $('.nav.-social.blue a').css("color","");
        }else{
            $('.nav.-social.blue').css("background","#f0f0f0");
            $('.nav.-social.blue a').css("color","rgb(204, 204, 204)");
        }


    })

    // yesil dugme click
    var isGreenClicked = false;
    $("#green").click(function(event){
        event.preventDefault();
        isGreenClicked ? isGreenClicked = false : isGreenClicked = true;
        if(isGreenClicked){
            $("html, body").animate({ scrollTop: 232 }, "slow");
            $('#green-block').css("width","260px")
            $('.middle-block').css("transform","translateX(-50px)");
            $('#green i').toggleClass("fa-angle-double-left fa-angle-double-right");

        }else{
            $('#green-block').css("width","")
            $('.middle-block').css("transform","");
            $('#green i').toggleClass("fa-angle-double-left fa-angle-double-right");
        }
    });

    var isBlueClicked = false;
    $(".toggle-button-left").click(function(event){
        event.preventDefault();
        isBlueClicked ? isBlueClicked = false : isBlueClicked = true;
        if(isBlueClicked){
            $("html, body").animate({ scrollTop: 232 }, "slow");
            $('#blue-block').css("width","340px")
            $('.toggle-button-left').css("width", "340px");
            $('.inner-inner-left').css({"width": "340px", "opacity": "1", "height":"100%", "display":"block"});
            $('.middle-block').css("transform","translateX(15px)");
            $('#blue i').toggleClass("fa-angle-double-left fa-angle-double-right");
            $('.nav.-social.blue').css("background","#f0f0f0");
            $('.nav.-social.blue a').css("color","rgb(204, 204, 204)");
        }else{
            $('#blue-block').css("width","")
            $('.toggle-button-left').css("width", "");
            $('.inner-inner-left').css({"width": "", "opacity":"", "height":"", "display":""});
            $('.middle-block').css("transform","");
            $('.nav.-social.blue').css("background","");
            $('.nav.-social.blue a').css("color","");
            $('#blue i').toggleClass("fa-angle-double-left fa-angle-double-right");
        }
        
    })
})