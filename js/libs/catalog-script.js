$('document').ready(function() {
    $('.search-filter-title, .search-filter__ico').click(function () {
        $('.page__modal-filters').addClass('visible');
        $('.page__modal-filters').fadeIn();
        $('.main-filter').removeClass('disabled');
        $('.page__modal-filters').removeClass('modify--blur');
    });
    $('.modal__close-ico').click(function () {
        $('.container__filter-wrapper').addClass('disabled');
        $('.page__modal-filters').removeClass('visible');
        $('.main-filter').addClass('disabled');
        $('.page__modal-filters').removeClass('modify--blur');
        $('.win-prod__bg-container').removeClass('visible');
    });
    $('.close-ico').click(function() {
        $('.page__modal-filters').removeClass('visible');
        for (i = 1; i < x.length; i++) {
            $('.container__filter-wrapper').addClass('disabled');
            $('.main-filter').addClass('disabled');
        }
    });
    
    $('.close-area').on('click', function () {
        $('.page__modal-filters').removeClass('visible');
        $('.container__filter-wrapper').addClass('disabled');
        $('.page__modal-filters').removeClass('visible');
        $('.main-filter').addClass('disabled');
        $('.page__modal-filters').removeClass('modify--blur');
        $('.win-prod__bg-container').removeClass('visible');
        for (i = 1; i < x.length; i++) {
            $('.container__filter-wrapper').addClass('disabled');
            $('.main-filter').addClass('disabled');
        }
    });


    var x = document.getElementsByClassName("sort__category");
    var i;
    var countOpenTab = document.getElementsByClassName("container__filter-wrapper");
    
    $('.sort__category').click(function (event) {
        for (i = 0; i < x.length; i++) {
            $('.container__filter-wrapper').addClass('disabled');
        }
        $('.main-filter').addClass('disabled');
        var clickId = event.target.value;
        $(countOpenTab[clickId]).removeClass('disabled');
    });

    $('.back-arrow-ico').click(function (event) {
        var backAr = event.target.id;
        $(countOpenTab[backAr - 1]).addClass('disabled');
        $('.main-filter').removeClass('disabled');
    });
    $('.test1').click(function() {
        $('.test1').toggleClass('test--hover');
    });


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


    $(function() {
        $('#pagination').pagination({
            items: 100,
            itemsOnPage: 3,
            edges: 1,
        });
    });


    $('.page__modal-filters').on('click', function (em) {
        if ( $(em.target).closest('.win-prod__bg-container').length) {
            // клик внутри элемента 
            return;
        }
        if ( $(em.target).closest('.main-filter, .container__filter-wrapper').length) {
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
        $('.main-filter').addClass('disabled');
        $('.win-prod__bg-container').fadeIn();
        $('.page__modal-filters').fadeIn();
    });
});
$('.big-heart-under1000-fav-ico').on('click', function (latura) {
    var ThisHeart = latura.target;
    var TakeSrcHeart = $(ThisHeart).attr('src');
    var SrcWhiteHeart = '../icons/big-heart-prod-mini-card-under1000.svg';
    var SrcRedHeart = '../icons/choosen-heart-read.svg';
    if (TakeSrcHeart == SrcWhiteHeart) {
        $(ThisHeart).attr('src', SrcRedHeart);
    }
    else {
        $(ThisHeart).attr('src', SrcWhiteHeart);
    }
});