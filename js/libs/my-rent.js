$('document').ready(function() {
    $('.drop-date-choose__btn').on('click', function (event) {
        var DrDtChBtn = event.target;
        var BtnOverPar = $(DrDtChBtn).parents('.rent-item-mini-card').toggleClass('disabled');
        $(BtnOverPar).siblings('.rent__item-card-wrapper').toggleClass('disabled');
    });
    $('.close-card-btn').on('click', function (clicked) {
        var ClickCloseArea = clicked.target;
        var ClickClosePar = $(ClickCloseArea).parents('.rent__item-card-wrapper').toggleClass('disabled');
        $(ClickClosePar).siblings('.rent-item-mini-card').toggleClass('disabled');
    });
});