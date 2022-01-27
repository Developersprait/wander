
function Calendar2(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        month = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
    if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= Dlast; i++) {
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today">' + i;
        } else {
            calendar += '<td>' + i;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }
    for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) { // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }

}
Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// переключатель минус месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {

    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
    update();
}
// переключатель плюс месяц
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function () {

    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
    update();
}

function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
}

function update() {
    const d = document.querySelectorAll('#calendar2 td');
    for (let i = 10; i < d.length; i += 1) {
        let monthes = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];

        d[i].onclick = function (event) {
            const target = event.target;
            const day = target.innerHTML;
            const yearAndMonth = d[1].innerHTML;
            const year = yearAndMonth.split(' ')[1];
            const month = monthes.findIndex(m => m === yearAndMonth.split(' ')[0]) + 1;
            const key = `${minTwoDigits(day)}-${minTwoDigits(month)}-${year}`;
            let tooltipDate = window.dates[key];
            let attr = "data-tooltipe";
            if (!tooltipDate) {
                return;
            } else {
                target.setAttribute(attr, `piątek-niedziela: POZOSTAŁO MIEJSC - ${tooltipDate}`);
                document.querySelectorAll('#calendar2 td span').forEach(e => e.remove());
                target.appendChild(document.createElement("span"));
                let span = target.querySelector("span");
                let data = target.getAttribute("data-tooltipe");
                span.className = "tooltip";
                span.style.display = "block";
                span.innerHTML = data;
                span.onmousemove.style.display = "none";
                update();
            } 
        };
    }
}
update();