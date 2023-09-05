$(window).on('load', function () {
    $('#preloader_container').hide();
})


$(function () {
    $(window).on('scroll', function () {


        let scrollToTop = $(window).scrollTop();
        if (scrollToTop > 100) {
            $('#navbar_section').addClass('fixed');
        }
        else { $('#navbar_section').removeClass('fixed'); }
    })

})