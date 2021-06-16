$('document').ready(function() {
    $('.modal-slider-img__inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        // fade: true,
        cssEase: 'linear',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        dotsClass: "slick-dots dots-slider"
    });
});