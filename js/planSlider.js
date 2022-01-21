function planSlider() {
    if (window.screen.width >= 992) {
        console.log('slider');
        document.querySelector('.plan__items').innerHTML = `
        <div class="plan__item">
                        <div class="plan__item-text">DZIEŃ 1</div>
                        <div class="plan__item-img1 img">
                        </div>
                        <div class="plan__item-btn">
                            <a data-fancybox data-src="#modal-plan1" href="javascript:;" href="#">
                                <div class="plan__item-link">Plan 1 dnia</div>
                            </a>
                        </div>
                    </div>
                    <div class="plan__item">
                        <div class="plan__item-text">DZIEŃ 2</div>
                        <div class="plan__item-img2 img"></div>
                        <div class="plan__item-btn">
                            <a data-fancybox data-src="#modal-plan2" href="javascript:;" href="#">
                                <div class="plan__item-link">Plan 2 dnia</div>
                            </a>
                        </div>
                    </div>
                    <div class="plan__item">
                        <div class="plan__item-text">DZIEŃ 3</div>
                        <div class="plan__item-img3 img"></div>
                        <div class="plan__item-btn">
                            <a data-fancybox data-src="#modal-plan3" href="javascript:;" href="#">
                                <div class="plan__item-link">Plan 3 dnia</div>
                            </a>
                        </div>
                    </div>
        `;
    } else if (window.screen.width < 992) {
        document.querySelector('.plan__items').innerHTML = `<div class="slider5">
        <div class="slider__item">
        <div class="plan__item">
                        <div class="plan__item-text">DZIEŃ 1</div>
                        <div class="plan__item-img1 img">
                        </div>
                        <div class="plan__item-btn">
                            <a data-fancybox data-src="#modal-plan1" href="javascript:;" href="#">
                                <div class="plan__item-link">Plan 1 dnia</div>
                            </a>
                        </div>
                    </div></div>
        <div class="slider__item"><div class="plan__item">
        <div class="plan__item-text">DZIEŃ 2</div>
        <div class="plan__item-img2 img"></div>
        <div class="plan__item-btn">
            <a data-fancybox data-src="#modal-plan2" href="javascript:;" href="#">
                <div class="plan__item-link">Plan 2 dnia</div>
            </a>
        </div>
    </div></div>
        <div class="slider__item"><div class="plan__item">
        <div class="plan__item-text">DZIEŃ 3</div>
        <div class="plan__item-img3 img"></div>
        <div class="plan__item-btn">
            <a data-fancybox data-src="#modal-plan3" href="javascript:;" href="#">
                <div class="plan__item-link">Plan 3 dnia</div>
            </a>
        </div>
    </div></div>
        </div>`;
    }
}
planSlider();