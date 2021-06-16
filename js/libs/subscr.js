var arr = document.getElementsByClassName('tarif__btn');
var ArrImg = document.getElementsByClassName('number-adds-ico');
var FiveAddsText = 'Подписка «Помощник». Пять объявлений на месяц. Теперь Вам будут доступны скидки на размещение до пяти объявлений в месяц. Экономия: 1 объявление = 125 рублей. Подписка на пять объявлений = 500 рублей. 5 объявлений по одному = 625 рублей, таким образом, 1 объявление вы получаете бесплатно.';
var FifteenAddsText = 'Подписка «Костюмер». Пятнадцать объявлений на месяц. Теперь Вам будут доступны скидки на размещение до пятнадцати объявлений в месяц. Экономия: 1 объявление = 125 рублей. Подписка на пятнадцать объявлений = 1250 рублей. 15 объявлений по одному = 1875 рублей, таким образом, 5 объявлений вы получаете бесплатно.';
var FortyAddsText = 'Подписка «Спонсор». Сорок объявлений на месяц. Теперь Вам будут доступны скидки на размещение до сорока объявлений в месяц. Экономия: 1 объявление = 125 рублей. Подписка на сорок объявлений = 2750 рублей. 40 объявлений по одному = 5000 рублей, таким образом, 18 объявлений вы получаете бесплатно.';

$('.tarif__btn').on('click', function (event) {
    var ClickedCard = event.target;
    for (let keks = 0; keks < arr.length; keks++) {
        $(ArrImg[keks]).addClass('disabled');
    }
    if (ClickedCard === arr[0]) {
        $(ArrImg[0]).removeClass('disabled');
        $('.md-electio-info__sub__text').text(FiveAddsText);
        $('.cost-subscr').text('500 ₽');
        $('.profit-info').text('Выгода 125 рублей*');
        $('.subscr-title-secp').text('Помощник');
    }
    if (ClickedCard === arr[1]) {
        $(ArrImg[1]).removeClass('disabled');
        $('.md-electio-info__sub__text').text(FifteenAddsText);
        $('.cost-subscr').text('1250 ₽');
        $('.profit-info').text('Выгода 625 рублей*');
        $('.subscr-title-secp').text('Костюмер');
    }
    if (ClickedCard === arr[2]) {
        $(ArrImg[2]).removeClass('disabled');
        $('.md-electio-info__sub__text').text(FortyAddsText);
        $('.cost-subscr').text('2750 ₽');
        $('.profit-info').text('Выгода 2250 рублей*');
        $('.subscr-title-secp').text('Спонсор');
    }
    $('.tarifs-display, .election-info__main-display').addClass('disabled');
    $('.election-info__main-display.dedicated').removeClass('disabled');
    $('.display-under1000-navigation').toggleClass('disabled');
    $('.dedicated-sub').text('Быстро и без труда');
});


$('.prev-subscr-list__btn').on('click', function () {
    $('.tarifs-display, .election-info__main-display').removeClass('disabled');
    $('.election-info__main-display.dedicated').addClass('disabled');
    $('.display-under1000-navigation').toggleClass('disabled');
});