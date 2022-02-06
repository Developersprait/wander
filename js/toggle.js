$(function () {
    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    });
    $('.menu ul li a').on('click', function () {
        $('.menu ul').slideToggle();
        $('.header__btn-menu').removeClass('dark');
    });
    $('.burger').on('click', function () {
        $('.menu2 ul').slideToggle();
    });
    $('.cross').on('click', function () {
        $('.menu2 ul').slideToggle();
    });
});