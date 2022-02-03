function about() {
    if (window.screen.width >= 500) {
        document.querySelector('#about .container').innerHTML = `
        <div class="about__title">O NAS I NASZEJ NIEEKSTREMALNEJ EKSTREMUM
            </div>
            <div class="about__wrapper">
                <div class="about__text">
                    <div class="about__text-descr">
                        Jak narodził się pomysł? Wszystko jest
                        proste!
                        Jesteśmy aktywnymi ludźmi, którzy nie
                        mogą siedzieć w domu. Biegaliśmy w
                        maratonach i półmaratonach, wspinaliśmy się na szczyty, spływaliśmy rzekami, skakaliśmy ze
                        spadochronem, aż w końcupostanowiliśmy, że tym wszystkim należy się dzielić.

                    </div>
                </div>
                <div class="about__slider">
                    <div id="slider">
                        <div class="slide" id="mps1"></div>
                        <div class="slide" id="mps2"></div>
                        <div class="slide" id="mps3"></div>
                        <div class="slide" id="mps4"></div>
                        <div class="slide" id="mps5"></div>
                    </div>
                    <div class="about__range">
                        <input type="range" id="range" min="1" value="1" step="1" />
                    </div>
                </div>
            </div>
            <div class="about__text-descr">
                Nasze wyprawy to przemyślane i bezpieczne przygody dla tych, którzy chcą poczuć się jak prawdziwy
                bohater, zanurzyć się w świat żywiołów - powietrza, wody, ziemi i gór, poznać nowych przyjaciół i
                PRZYTRZYMAĆ BICIE SERCA.<br><br>

                • w naszych wycieczkach staramy się pokazać różnorodność otaczającego nas świata, a na trasy wybieramy
                miejsca najbardziej imponujące i niepowtarzalne.<br>
                • Tak, na naszych wycieczkach jest wiele zajęć, ale nie wymagają one wyjątkowej sprawności fizycznej.
                Cała podróż zależy od Ciebie.<br>
                • ekstremalne w naszych wycieczkach jest koncepcją warunkową, ponieważ naszym celem jest, aby Twoje
                wakacje były jasne, bogate i najbardziej ekstremalnie wygodne.
            </div>
        `;
    } else if (window.screen.width < 500) {
        document.querySelector('#about .container').innerHTML = ``;
        document.querySelector('#about .container').innerHTML = `
        <div class="about__title">O NAS I NASZEJ NIEEKSTREMALNEJ EKSTREMUM
        </div>
        <div class="about__wrapper">
            <div class="about__text">
                <div class="about__text-descr">
                    Jak narodził się pomysł? Wszystko jest
                    proste!
                    Jesteśmy aktywnymi ludźmi, którzy nie
                    mogą siedzieć w domu. Biegaliśmy w
                    maratonach i półmaratonach, wspinaliśmy się na szczyty, spływaliśmy rzekami, skakaliśmy ze
                    spadochronem, aż w końcupostanowiliśmy, że tym wszystkim należy się dzielić.

                </div>
            </div>
            <div class="about__text-descr">
                Nasze wyprawy to przemyślane i bezpieczne przygody dla tych, którzy chcą poczuć się jak prawdziwy
                bohater, zanurzyć się w świat żywiołów - powietrza, wody, ziemi i gór, poznać nowych przyjaciół i
                PRZYTRZYMAĆ BICIE SERCA.<br><br>

                • w naszych wycieczkach staramy się pokazać różnorodność otaczającego nas świata, a na trasy wybieramy
                miejsca najbardziej imponujące i niepowtarzalne.<br>
                • Tak, na naszych wycieczkach jest wiele zajęć, ale nie wymagają one wyjątkowej sprawności fizycznej.
                Cała podróż zależy od Ciebie.<br>
                • ekstremalne w naszych wycieczkach jest koncepcją warunkową, ponieważ naszym celem jest, aby Twoje
                wakacje były jasne, bogate i najbardziej ekstremalnie wygodne.
            </div>
            </div>
            <div class="about__slider">
                    <div id="slider">
                        <div class="slide" id="mps1"></div>
                        <div class="slide" id="mps2"></div>
                        <div class="slide" id="mps3"></div>
                        <div class="slide" id="mps4"></div>
                        <div class="slide" id="mps5"></div>
                    </div>
                    <div class="about__range">
                        <input type="range" id="range" min="1" value="1" step="1" />
                    </div>
                </div>
        `;
    }
}
