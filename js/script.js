document.addEventListener('DOMContentLoaded', () => {
    const sheduleButton = document.querySelector('.shedule__btn'),
        cross = document.querySelector('.fancybox-close-small');

    function fix() {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 100 && window.screen.width >= 992) {
                document.querySelector('.shedule__btn').classList.add('fixed');
            }
        });

    }

    function shedule() {
        sheduleButton.addEventListener('click', () => {
            sheduleButton.style.display = 'none';
            console.log('none');
        });
        cross.addEventListener('click',()=>{
            sheduleButton.style.display = 'block';
            console.log('clone');
        });
    }

    fix();
    shedule();
});