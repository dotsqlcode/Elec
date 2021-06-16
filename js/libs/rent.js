$('document').ready(function() {
    $('.add-prod__prev-stage-btn').click(function() {
        $('.rent-modal-window').removeClass('disable');
        $('.modal-comment__window-wrapper').removeClass('hidden');
    });
    $('.modal__close-ico').click(function() {
        $('.rent-modal-window').addClass('disable');
        $('.modal-comment__window-wrapper').addClass('hidden');
    });
    $('.rent-modal-window').on('click', function (sharker) {
        if ( $(sharker.target).closest('.modal-comment__window-wrapper').length) {
            return;
        }
        $('.rent-modal-window').addClass('disable');
        $('.modal-comment__window-wrapper').addClass('hidden');
    });
});