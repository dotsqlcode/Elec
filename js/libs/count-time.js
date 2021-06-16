var startline = 'December 10 2020 23:04:59 GMT+05:00'; //Передевай сюда даты, в этом формате
var deadline = 'March 22 2021 23:15:00 GMT+05:00'; //Передевай сюда даты, в этом формате

function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
     'total': t,
     'days': days,
     'hours': hours,
     'minutes': minutes,
     'seconds': seconds
    };
}


initializeClock('clockdiv', deadline);


function initializeClock(id, endtime){
var clock = document.getElementById(id);
var daysSpan = clock.querySelector('.days');
var hoursSpan = clock.querySelector('.hours');
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');
function updateClock(){
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = t.seconds;
    if(t.total<=0){
        clearInterval(timeinterval);
    }
}
    updateClock(); // запустите функцию один раз, чтобы избежать задержки
    var timeinterval = setInterval(updateClock,1000);
}

function OutPutPercGrad () {
    var DifferenceEndNow = Date.parse(deadline) - Date.parse(new Date()),
        DifferenceEndStart = Date.parse(deadline) - Date.parse(startline),
        TakeElem = document.querySelector('.grey-gradient');
        if (DifferenceEndNow > 0) {
            OutPut = 100 - (DifferenceEndNow / DifferenceEndStart * 100),
            $(TakeElem).attr('style', '--gradien-remainder-width:' + OutPut);
        }
        else {
            $(TakeElem).attr('style', '--gradien-remainder-width:' + 100);
            var ClockElements = document.getElementsByClassName('clock-el');
            var ClockElCounter;
            for (ClockElCounter = 0; ClockElements.length > ClockElCounter; ClockElCounter++) {
                $(ClockElements[ClockElCounter]).text('0');
            }
        }
}

OutPutPercGrad();
var OutPutInterval = setInterval(OutPutPercGrad,1000);
