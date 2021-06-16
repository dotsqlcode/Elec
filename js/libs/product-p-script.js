$('document').ready(function() {
    
    // $('.modal-slider-img__inner').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     // fade: true,
    //     cssEase: 'linear',
    //     nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    //     prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    //     dotsClass: "slick-dots dots-slider"
    // });

    $('.zoom-photo-ico, .img-prod-photo, .photo__modal-edit-photo').mouseover(function () {
        $('.photo__modal-edit-photo').addClass('active-o');
    });
    $('.img-prod-photo, .photo__modal-edit-photo').mouseout(function () {
        $('.photo__modal-edit-photo').removeClass('active-o');
    });

    // $('.img-prod-photo').on('click', function(){
    //     $('.photo__modal-edit-photo').attr('style', 'display: flex;');
    //     $('.photo__modal-edit-photo').trigger('click');
    // });

    $('.zoom-photo-ico').click(function() {
        $('.descr-product-info-display.body-page, .product-characretistic__wrapper, .arend-conditions-display, .comment-user-display, .user-personal-catalog-display').addClass('disable');
        $('footer').addClass('disable');
        $('.page__modal-photo-slider').addClass('modify--blur');
        $('.page__modal-photo-and-info').removeClass('disabled-modal');
    });
    $('.modal__close-ico').click(function() {
        $('.descr-product-info-display.body-page, .product-characretistic__wrapper, .arend-conditions-display, .comment-user-display, .user-personal-catalog-display').removeClass('disable');
        $('footer').removeClass('disable');
        $('.page__modal-photo-slider').removeClass('modify--blur');
        $('.page__modal-photo-and-info').addClass('disabled-modal');
    });
    $('.prod-favour-ico').click(function() {
        $('.active-on-click').toggleClass('test--clicked');
    });

    $('.for-slide-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        // fade: true,
        cssEase: 'linear',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        dotsClass: "slick-dots dots-slider main-photo-dots"
    });


    var ComText = document.getElementsByClassName("comment-card__text");
    var BtnDropText = document.getElementsByClassName("comment-btn");
    var i;

    for (i = 0; i < ComText.length; i++) {  
        var NumLeng = ComText[i].textContent.length;
        valum = Number.parseInt(NumLeng);
        if (valum >= 670) { 
            $('.comment-btn').addClass('active');
        }
        if (valum < 670) {
            var NotEnought = i;
            var FatherElem = $(ComText[NotEnought]).parent('.text-comment-block__container');
            $(FatherElem).children('.comment-btn').addClass('disabled');
        }
        $(BtnDropText[i]).click(function (event) {
            var PlaceClick = event.target;
            var DropTextFath = $(PlaceClick).parent('.text-comment-block__container');
            var DropTextElem = $(DropTextFath).children('.comment-card__text');
            var DropTextElem2 = $(DropTextFath).children('.comment-btn');
            $(DropTextElem).toggleClass('text__drop-text');
            $(DropTextElem2).toggleClass('btn-less');
            var BtnTextCont = $(DropTextElem2).text();
            if (BtnTextCont == 'Подробнее') {
                $(DropTextElem2).text('Скрыть');
            }
            else {
                $(DropTextElem2).text('Подробнее');
            }
        });
    }

    $('.photo-prod--slick-slide-container').slick({
        dots: true,
        infinite: true,
        speed: 500,
        // fade: true,
        cssEase: 'linear',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        dotsClass: "slick-dots dots-slider"
    });


    $('.test1').click(function() {
        $('.test1').toggleClass('test--hover');
    });


    $('.close-ico, .modal__close-ico').click(function() {
        $('.win-prod__bg-container').removeClass('visible');
        $('.container__filter-wrapper').removeClass('active-box-needdel');
        $('.page__modal-filters').removeClass('visible');
        $('.page__modal-filters').removeClass('modify--blur');
    });

    
    $('.page__modal-filters').on('click', function (em) {
        if ( $(em.target).closest('.win-prod__bg-container').length) {
            // клик внутри элемента 
            return;
        }
        // клик снаружи элемента 
        $('.win-prod__bg-container').fadeOut();
        $('.page__modal-filters').fadeOut();
    });

    $('.item__drop-eye, .ready-mate-text-block__title, .ready-made-container__item > img:first-child').on('click', function OpenModal () {
        $('.page__modal-filters').addClass('visible');
        $('.win-prod__bg-container').addClass('visible');
        $('.page__modal-filters').addClass('modify--blur');
        $('.win-prod__bg-container').fadeIn();
        $('.page__modal-filters').fadeIn();
    });


    var CounterDots = $('.main-photo-dots').children('li');
    var ForStartDotsCount = 10;
    var ForEndDotsCount = 10;
    
    $('.photo-slide__btn-right').on('click', function () {
        ForStartDotsCount++;
        if (ForStartDotsCount >= ForEndDotsCount + CounterDots.length) {
            ForStartDotsCount = 10;
        }
        $('#slick-slide-control' + ForStartDotsCount).trigger('click');
    });

    $('.photo-slide__btn-left').on('click', function () {
        ForStartDotsCount--;
        if (ForStartDotsCount <= 9) {
            ForStartDotsCount = ForEndDotsCount - 1 + CounterDots.length;
        }
        $('#slick-slide-control' + ForStartDotsCount).trigger('click');
    });

    $('.full-display-dark-modal').on('click', function (sharker) {
        if ( $(sharker.target).closest('.rend-cond__modal-container').length) {
            return;
        }
        $('.full-display-dark-modal').fadeOut();
    });

    $('.cond-return-ico').on('click', function () {
        $('.full-display-dark-modal').fadeIn();
    });
    $('.agree-btn').on('click', function () {
        $('.full-display-dark-modal').fadeOut();
    });

    $('.close-ico-under1000-modal-cart').on('click', function () {
        $('.modal__close-ico').trigger('click');
    });


    $('.page__modal-photo-and-info').on('click', function (brabra) {
        if ( $(brabra.target).closest('.modal-slider-img__inner').length) {
            return;
        }
        $('.modal__close-ico').trigger('click');
    });
});