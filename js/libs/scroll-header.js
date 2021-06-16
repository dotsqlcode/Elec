var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});
$('.city-of-list').click(function(event) {
    let ChoseCityLi = event.target;
    let ChoseCityText = $(ChoseCityLi).text();
    $('.trigger-city').text(ChoseCityText);
    $('.choose-cities').text(ChoseCityText);
    $('.header__city-block-trig-link').toggleClass('activeses');
    $('.closer-window-area').toggleClass('actives');
});
$('.header__city-block-trig-link, .closer-window-area').on('click', function () {
    $('.header__city-block-trig-link').toggleClass('activeses');
    $('.closer-window-area').toggleClass('actives');
});

$('.burger-drop-menu__container').on('click', function (sharker) {
    if ( $(sharker.target).closest('.burger-drop-menu__container-inner').length) {
        return;
    }
    $('.burger-drop-menu__container').fadeOut();
    $('.burger-block').toggleClass('burger-on');
    $('.choose-cities').toggleClass('smurfic');
});

$('.burger-block').on('click', function () {
    $('.burger-block').toggleClass('burger-on');
    HasClassElSaver = $('.burger-block').hasClass('burger-on');
    if (HasClassElSaver === true) {
        $('.burger-drop-menu__container').fadeIn();
    }
    else {
        $('.burger-drop-menu__container').fadeOut();
        $('.choose-cities').removeClass('smurfic');
    }
});

$('.choose-cities').on('click', function () {
    $('.choose-cities').toggleClass('smurfic');
});
$('body').on('click', function (sharker) {
    if ( $(sharker.target).closest('.city-list__container').length) {
        return;
    }
    if ( $(sharker.target).closest('.choose-cities').length) {
        return;
    }
    $('.choose-cities').removeClass('smurfic');
});
$('.city-of-list').on('click', function () {
    $('.choose-cities').removeClass('smurfic');
});

$('.nav-u1000__link').on('click', function(under1000nav){
    $('.nav-u1000__link').removeClass('U1000ActiveTab');
    var Under1000Nav = under1000nav.target;
    $(Under1000Nav).addClass('U1000ActiveTab');
});

$('document').ready(function() {
    $(window).resize(function() {
        var WidthWin = $(window).width();
        if (WidthWin <= 376) {
            $('.footer__social-btn__tw').text('Задать вопрос');
            $('.footer__electio-info .electio-info__link:first-child').text('Правила пользования');
        }
        else {
            $('.footer__social-btn__tw').text('Чат с администрацией');
            $('.footer__electio-info .electio-info__link:first-child').text('Правила пользования сайтом');  
        }
    });
      // вызовем событие resize
    $(window).resize();
});

$('.change-on-choose-heart').on('click', function (elementus) {
    var ThisHeart = elementus.target;
    var TakeSrcHeart = $(ThisHeart).attr('src');
    var SrcWhiteHeart = '../icons/lighting-heart-unchoose.svg';
    var SrcRedHeart = '../icons/choosen-heart-read.svg';
    if (TakeSrcHeart == SrcWhiteHeart) {
        $(ThisHeart).attr('src', SrcRedHeart);
    }
    else {
        $(ThisHeart).attr('src', SrcWhiteHeart);
    }
});

$('.item__drop-eye').click(function() {
    $('.win-prod__bg-container').addClass('visible');
    $('.page__modal-filters').addClass('visible');
    $('.page__modal-filters').addClass('modify--blur');
});
