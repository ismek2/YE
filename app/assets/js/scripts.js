$(function () {
    $('[data-toggle="popover"]').popover({trigger: 'hover'})
    $('.fa-chevron-up').click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })

    $("#green").click(function(event){
        event.preventDefault();
        $("#main-inner-content").toggleClass('move-left display-blue')
    })
})