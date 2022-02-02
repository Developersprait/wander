const calendar = document.querySelector('.calendar');
const luty = `25.02.2022 - 27.02.2022`,
    marzec = [`04.03.2022 - 06.03.2022`,
        `11.03.2022 - 13.03.2022`,
        `18.03.2022 - 20.03.2022`,
        `25.03.2022 - 27.03.2022`
    ],
    kwiecien = [`01.04.2022 - 03.04.2022`,
        `08.04.2022 - 10.04.2022`,
        `15.04.2022 - 17.04.2022`,
        `22.04.2022 - 24.04.2022`
    ];
calendar.innerHTML = `
<div class="calendar__top">
Wyjazd liczony jest na 3 dni od piątku do niedzieli. 
Termin następnej wycieczki  25.02 - 27.02. 
Liczbę wolnych miejsc można sprawdzić w kalendarzu klikając w wybrany termin wydarzenia. W celu wzięcia udziału w wycieczce prosimy o kontakt.
</div>
<div class="calendar__bottom">
    <div class="calendar__items">
        <div class="calendar__item">
            <div class="calendar__title">
            LUTY 2022
            </div>
            <div class="calendar__text">
            ${luty}
            </div>
        </div>
        <div class="calendar__item">
            <div class="calendar__title">
            MARZEC 2022
            </div>
            <div class="calendar__text">
            <p>${marzec[0]}</p>
            <p>${marzec[1]}</p>
            <p>${marzec[2]}</p>
            <p>${marzec[3]}</p>
            </div>
        </div>
        <div class="calendar__item">
            <div class="calendar__title">
            KWIECIEŃ 2022
            </div>
            <div class="calendar__text">
            <p>${kwiecien[0]}</p>
            <p>${kwiecien[1]}</p>
            <p>${kwiecien[2]}</p>
            <p>${kwiecien[3]}</p>
            </div>
        </div>
    </div>
</div>
`;