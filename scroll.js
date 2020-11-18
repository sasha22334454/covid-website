//Scorll

$(".card").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $($(this).data('scroll-to')).offset().top
    }, 20);
});
