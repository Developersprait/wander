document.addEventListener('DOMContentLoaded', () => {
    const sheduleButton = document.querySelector('.shedule__btn'),
        cross = document.querySelector('.fancybox-button');

    function fix() {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 100 && window.screen.width >=992) {
                document.querySelector('.shedule__btn').classList.toggle('fixed');
                console.log('done');
            }
        });

    }
    function shedule(shedule, cross) {
        shedule.addEventListener('click', () => {
            shedule.style.display = 'none';
        });
        cross.addEventListener('click', () => {
            shedule.style.display = 'block';
        });
    }
    
    fix();
    shedule(sheduleButton, cross);
    menu2();

});