$('document').ready(function() {
    $('.full-display-dark-modal').on('click', function (sharker) {
        if ( $(sharker.target).closest('.rend-cond__modal-container').length) {
            return;
        }
        $('.full-display-dark-modal').fadeOut();
    });

    $('#forgPassBtn').on('click', function () {
        $('.full-display-dark-modal').fadeIn();
    });
    $('.go-back-btn').on('click', function () {
        $('.full-display-dark-modal').fadeOut();
    });

      
      
});