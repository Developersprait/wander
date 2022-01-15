document.addEventListener('DOMContentLoaded', () => {
    // const shedule = document.querySelector('.shedule__btn');

    function fix() {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                document.querySelector('.shedule__btn').style.cssText = 'position: fixed; right: 0; top:84%; box-shadow: -14px -18px 19px 7px rgb(255 255 255 / 43%):';
                console.log('done');
            }
        });

    }
    fix();
});