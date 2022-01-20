document.addEventListener('DOMContentLoaded', () => {
    const sheduleButton = document.querySelector('.shedule__btn'),
        cross = document.querySelector('.fancybox-button');

    function fix() {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                document.querySelector('.shedule__btn').style.cssText = 'position: fixed; right: 0; top:84%; box-shadow: -14px -18px 19px 7px rgb(255 255 255 / 43%); z-index: 100;';
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

});