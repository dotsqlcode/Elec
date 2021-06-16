$('.dratute').on('click', function () {
    $('.dratute-info-block, .smth-triangle').attr('style', 'display: block;');
});
$('body').on('click', function (sharnir) {
    if ( $(sharnir.target).closest('.dratute-info-block').length) {
        return;
    }
    if ( $(sharnir.target).closest('.dratute').length) {
        return;
    }
    $('.dratute-info-block, .smth-triangle').attr('style', 'display: none;');
});