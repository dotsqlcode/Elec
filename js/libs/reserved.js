$('document').ready(function() {
    $('#cancel-reser').click(function () {
        $('.rent-modal-window').removeClass('disabled');
    });
    $('#modal-win-btn1').click(function () {
        $('.rent-modal-window').addClass('disabled');
    });
    $('#modal-win-btn2').click(function () {
        $('.rent-modal-window').addClass('disabled');
    });

    
    $('.rent-modal-window').on('click', function (em) {
        if ( $(em.target).closest('.modal-comment__window-wrapper').length) {
            // клик внутри элемента 
            return;
        }
        // клик снаружи элемента 
        $('.modal-comment__window-wrapper').fadeOut();
        $('.rent-modal-window').fadeOut();
    });
    $('#cancel-reser').on('click', function OpenModal () {
        $('.modal-comment__window-wrapper').fadeIn();
        $('.rent-modal-window').fadeIn();
    });
    $('#modal-win-btn2').on('click', function () {
        $('.modal-comment__window-wrapper').fadeOut();
        $('.rent-modal-window').fadeOut();
    });
});