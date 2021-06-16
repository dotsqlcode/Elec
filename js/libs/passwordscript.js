$(document).ready(function() {

    var pswd;
    var pswdRepl;

    $('#PassNew').keyup(function() {
        pswd = $(this).val();
        if (pswd.length >= 8 && pswd.match(/[A-z]/) && pswd.match(/[A-Z]/) && pswd.match(/[0-9]/)) {
            $('.new-password').addClass('hide-error-msg');
        } 
        else {
            $('.new-password').removeClass('hide-error-msg');
        };
    })

    $('#PasNewRep').keyup(function() {
        pswd = $('#PassNew').val();
        pswdRepl = $('#PasNewRep').val();
        if (pswdRepl == pswd) {
            $('.replay-password').addClass('hide-error-msg');
        }
        else {
            $('.replay-password').removeClass('hide-error-msg');
        };
    });
});