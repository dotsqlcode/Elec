var StartNumCalRes = 3;
var EndNumCalRes = 9;
var NumInRange;


$.fn.datepicker.language['my-lang'] =  {
    days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'dd.mm.yyyy',
    timeFormat: 'hh:ii',
    firstDay: 1
};
$('.datepicker-here').datepicker({
    language: 'my-lang',
    range: 'true',
    toggleSelected: false,
    inline: true
});
$('document').ready(function() {

    $('.datepicker--cell-day').removeClass('.-current-');
    
    
    var ArrCalDates = document.getElementsByClassName('datepicker--cell-day');
    var FoundNumStart; /* хранит в себе проверку того что значение даты совпадает с указанным числом в StartNumCalRes*/
    var FoundNumLast; /* хранит в себе проверку того что значение даты совпадает с указанным числом в EndNumCalRes*/
    var FoundNumStartEl;
    var FoundNumLastEl;

    function ReservDatePick () {

        for (CntrNm = 0; ArrCalDates.length > CntrNm; CntrNm++) {
            var TakeAttrDate = $(ArrCalDates[CntrNm]).attr('data-date');
            if (TakeAttrDate == StartNumCalRes) {
                FoundNumStart = TakeAttrDate;
                FoundNumStartEl = ArrCalDates[CntrNm];
            };
            if (TakeAttrDate == EndNumCalRes) {
                FoundNumLast = TakeAttrDate;
                FoundNumLastEl = ArrCalDates[CntrNm];
            };
        };

        for (CntrRngNms = StartNumCalRes + 4; CntrRngNms < EndNumCalRes + 3; CntrRngNms++) {
            $(ArrCalDates[CntrRngNms]).addClass('res-in-range-dates');
        };

        $(FoundNumStartEl).addClass('res-date res-start-date');
        $(FoundNumLastEl).addClass('res-date res-end-date');

    }
    

    // ReservDatePick();

//ДОПИЛИТЬ 
    /*$('.datepicker--content').on('click', function () {
        var FoundedNumAfCl =  document.getElementsByClassName('-range-from-');
        var FoundedNumAfClTwo =  document.getElementsByClassName('-range-to-');
        var GetDateFNAC = $(FoundedNumAfCl).attr('data-date');
        var GetDateFNACT = $(FoundedNumAfClTwo).attr('data-date');
        if (GetDateFNAC == StartNumCalRes) {
            $(FoundedNumAfCl[0]).addClass('res-start-date');
        }
        if (GetDateFNACT == EndNumCalRes) {
            $(FoundedNumAfClTwo[0]).addClass('res-end-date');
        }
    });*/
//ДОПИЛИТЬ 

});
