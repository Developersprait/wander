document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__btn-menu');

    function menuBtn() {
        menu.addEventListener('click', () => {
            menu.style.cssText = 'background-color: rgba(0, 0, 0, 0.59); color: #000';
        });
        console.log('1');
    }
    menuBtn();
});