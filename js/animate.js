$(document).ready(function () {
    setTimeout($('.header__logo').each(function () {
        $(this).addClass("fadeInDown");
    }), 3000);
    setTimeout($('.hero__title').each(function () {
        $(this).addClass("fadeInRight");
    }), 3000);
    setTimeout($('.hero__btn').each(function () {
        $(this).addClass("fadeInLeft");
    }), 3000);
});