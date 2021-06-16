var ChildRegDate = $('#register-date-ft').find('.col-4');
var ChildLastDate = $('#register-date-sc').find('.col-4');


$(ChildRegDate).on('click', function () {
    var InpRegDate = $(ChildRegDate).find('.form-control');
    $('#register-date-sc .col-4').addClass('hide--datapicker');
    $(InpRegDate).trigger('click');
});

$('body').on('click', function (em) {
    if ( $(em.target).closest(ChildRegDate).length) {
        return;
    }
    if ( $(em.target).closest('.drp-calendar').length) {
        return;
    }
    if ( $(em.target).closest('.next').length) {
        return;
    }
    if ( $(em.target).closest('.prev').length) {
        return;
    }
    if ( $(em.target).closest('.drp-buttons').length) {
        return;
    }
    if ( $(em.target).closest('.daterangepciker').length) {
        return;
    }
    $('#register-date-sc .col-4').removeClass('hide--datapicker');
});