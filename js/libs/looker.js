$('.mini-photo-visible').on('click', function (everest) {
    $('.looker-mini-photo').removeClass('looker--active-ph');
    var Teftelky = everest.target;
    $(Teftelky).parents('.looker-mini-photo').addClass('looker--active-ph');
    var TefteSrc = $(Teftelky).attr('src');
    $('.big-photo-visible').attr('src', TefteSrc);
});


$('body').on('click', function (state) {
    if ( $(state.target).closest('.looker__wrapper-main').length) {
        return;
    }
    if ( $(state.target).closest('.added-photo-choose').length) {
        return;
    }
    $('.looker-img').fadeOut();
});


$('.added-photo-choose').on('click', function () {
    $('.looker-img').fadeIn();
});