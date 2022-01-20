document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__btn-menu'),
    nav = document.querySelector('.nav');

    function menuBtn() {
        menu.addEventListener('click', () => {
            menu.classList.toggle('dark');
        });
        console.log('1');
    }
    function mainNav(){
        document.addEventListener('scroll', () => {
            if (window.scrollY >= 720 && window.screen.width <=992) {
                document.querySelector('.nav').style.cssText = 'background: url(img/mount.jpg);  background-position: top;  background-size: cover;';
                console.log('done');
            }else{
                document.querySelector('.nav').style.cssText = 'background-color: transparent';
            }
        });
    }
    menuBtn();
    mainNav();
});