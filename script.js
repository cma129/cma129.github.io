$(function() {
    $('.hamburger').click(function() {
        $('.menu').addClass('show');
    });
    $('.exit-responsive').click(function() {
        $('.menu').removeClass('show');
    });
});