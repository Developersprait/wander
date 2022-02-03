const calendar = document.querySelector('.calendar');
const luty = `25.02.2022 - 27.02.2022`, //февраль
    marzec = [`04.03.2022 - 06.03.2022`, //март
        `11.03.2022 - 13.03.2022`,
        `18.03.2022 - 20.03.2022`,
        `25.03.2022 - 27.03.2022`
    ],
    kwiecien = [`01.04.2022 - 03.04.2022`, //апрель
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
            <p id="d1">${luty}</p>
            </div>
        </div>
        <div class="calendar__item">
            <div class="calendar__title">
            MARZEC 2022
            </div>
            <div class="calendar__text">
            <p id="d2">${marzec[0]}</p>
            <p id="d3">${marzec[1]}</p>
            <p id="d4">${marzec[2]}</p>
            <p id="d5">${marzec[3]}</p>
            </div>
        </div>
        <div class="calendar__item">
            <div class="calendar__title">
            KWIECIEŃ 2022
            </div>
            <div class="calendar__text">
            <p id="d6">${kwiecien[0]}</p>
            <p id="d7">${kwiecien[1]}</p>
            <p id="d8">${kwiecien[2]}</p>
            <p id="d9">${kwiecien[3]}</p>
            </div>
        </div>
    </div>
</div>
`;
// места на выходные
const weeks = {
    w1:10,//25.02.2022 - 27.02.2022
    w2:8,//
    w3:12,
    w4:11,
    w5:54,
    w6:33,
    w7:9,
    w8:15,
    w9:14
};
const d1 = document.querySelector("#d1"),
    d2 = document.querySelector("#d2"),
    d3 = document.querySelector("#d3"),
    d4 = document.querySelector("#d4"),
    d5 = document.querySelector("#d5"),
    d6 = document.querySelector("#d6"),
    d7 = document.querySelector("#d7"),
    d8 = document.querySelector("#d8"),
    d9 = document.querySelector("#d9");
d1.addEventListener("click", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w1}` ; //первая неделя
});
d1.addEventListener("touchend", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w1}`; //первая неделя
});
d2.addEventListener("click", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w2}`; //вторая неделя
});
d2.addEventListener("touchend", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w2}`; //вторая неделя
    console.log("1");
});
d3.addEventListener("click", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w3}`; //третья неделя
});
d3.addEventListener("touchend", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w3}`; //третья неделя
});
d4.addEventListener("click", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w4}`; //четвертая неделя
});
d4.addEventListener("touchend", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w4}`; //третья неделя
});
d5.addEventListener("click", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w5}`; //пятая неделя
});
d5.addEventListener("touchend", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w5}`; //третья неделя
});
d6.addEventListener("click", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w6}`; //шестая неделя
});
d6.addEventListener("touchend", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w6}`; //третья неделя
});
d7.addEventListener("click", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w7}`; //седьая неделя
});
d7.addEventListener("touchend", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w7}`; //третья неделя
});
d8.addEventListener("click", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w8}`; //восьмая неделя
});
d8.addEventListener("touchend", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w8}`; //третья неделя
});
d9.addEventListener("click", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w9}`; //девятая неделя
});
d9.addEventListener("touchend", (e) => {
    const target = e.target;
    document.querySelectorAll('.calendar__text p span').forEach(e => e.remove());
    target.appendChild(document.createElement("span"));
    let span = target.querySelector("span");
    span.innerHTML = `POZOSTAŁO MIEJSC - ${weeks.w9}`; //третья неделя
});