$(document).ready(function () {
    $('.slider3').slick({
        arrows: true, // показать стрелки
        dots: true, // не показывать точки
        slidesToShow: 1, // показывать по 3 слайда
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear' // автоматическое проигрывание слайдов
    });
});