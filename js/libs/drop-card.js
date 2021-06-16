$('document').ready(function() {
    $('.drop-date-choose__btn').on('click', function (event) {
        var DrDtChBtn = event.target;
        var DrBtnPar = $(DrDtChBtn).parents('.photo-and-descr__wrapper');
        var ParNeigh = $(DrBtnPar).siblings('.arend-time-and-warning__wrapper');
        $(DrDtChBtn).parents('.rent__item-card-wrapper').toggleClass('padding-change');
        $(DrBtnPar).toggleClass('padding-change2');
        $(ParNeigh).siblings('.second-stage__btns-container').toggleClass('disabled');
        $(DrDtChBtn).toggleClass('disabled');
        $(ParNeigh).toggleClass('disabled');
        $(DrBtnPar).find('.drop-costs-container').toggleClass('disabled');
    });
});
