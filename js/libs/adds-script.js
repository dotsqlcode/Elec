$('document').ready(function() {
    $('.my-adds__nav-link').on('click', function (event) {
        let CenterNavClick = event.target;
        let InnerPgAr = document.getElementsByClassName('ready-made__container-grid');
        let NumPgAr;
        for (NumPgAr = 0; InnerPgAr.length > NumPgAr; NumPgAr++) {
            $(InnerPgAr[NumPgAr]).addClass('disabled');
        }
        let value = $(CenterNavClick).attr('value');
        $(InnerPgAr[value]).removeClass('disabled');
    });
    $('select').styler();
}); 