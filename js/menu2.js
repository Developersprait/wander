function menu2() {
    document.addEventListener('scroll', () => {
        if (window.scrollY > 100 && window.screen.width <= 992) {
            document.querySelector('.header2__top').style.position = 'inherit';
            document.querySelector('.menu2').style.display = 'none';
            console.log('yeah');
        }else{
            document.querySelector('.menu2').style.display = 'block';
            console.log('yeah2');
        }
    });
}
menu2();