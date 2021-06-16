$('document').ready(function() {
    $('select').styler();
    $('.check-style, .title-checkbox').click(function() {
        $('.company-name__input').toggleClass('inactive-input');
        var x = $('.company-name__input').attr('id');
        if (x == 'company-name') {
            $('.company-name__input').removeAttr('readonly');
            $('.company-name__input').removeAttr('id');
        }
        else {
            $('.company-name__input').attr('id', 'company-name');
            $('.company-name__input').attr('readonly', true);
        }
        $('.company-name__input').val("");
    });
    $("#email-width-warn").focus(function() {
        $(".warning-info").addClass('nonactive');
    });

    $('.ed-ph-loa').on('click', function() {
        $('.btn-load').trigger('click');
    });
});
