function price() {
    if (window.screen.width >= 992) {
        document.querySelector('.price__inner').innerHTML = `
        <div class="price__logo"></div>
        <div class="price__descr">Organizator: <br>
                        ( agencja podróży ekstremalnych "wędrowcy")
        </div>
        <div class="price__name">WĘNDROWCY</div>
        `;
    }else if (window.screen.width < 992) {
        document.querySelector('.price__inner').innerHTML = `
        <div class="price__descr">Organizator: <br>
                        ( agencja podróży ekstremalnych "wędrowcy")
        </div>
        <div class="price__box">
            <div class="price__box-left">
                <div class="price__logo"></div>
                <div class="price__name">WĘNDROWCY</div>
            </div>
            <div class="price__box-right"></div>
        </div>    
        `;}
}
// price();