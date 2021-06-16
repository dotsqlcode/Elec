$('document').ready(function() {
    var x = document.getElementsByClassName("tabs-menu__link");
    var i;
    var countOpenTab = document.getElementsByClassName("mail-filter__wrapper");
    $('.tabs-menu__link').click(function (event) {
        for (i = 0; i < x.length; i++) {
            $('.mail-filter__wrapper').addClass('disabled');
        }
        var clickId = event.target.value;
        var VasIsDas = $(event.target).text();
        $(countOpenTab[clickId]).removeClass('disabled');
        $('.mailing-filter__grid').removeClass('filter-grid-before-first-click');
        $('.info-ab-choosen-tab').text(VasIsDas);
        $('.info-ab-choosen-tab').attr('style', 'font-weight: 500;');
    });

    $('.close-ico').on('click', function (el) {
        var CloseIndTab = el.target;
        $(CloseIndTab).parents('.mail-filter__wrapper').addClass('disabled');
        $('.mailing-filter__grid').addClass('filter-grid-before-first-click');
        $('.info-ab-choosen-tab').text('Выберите вкладку');
        $('.info-ab-choosen-tab').attr('style', 'font-weight: 600;');
    });
});

    var CatTabLink = document.getElementsByClassName("title__first-stage-fb");
    var CountTab;
    for (CountTab = 0; CountTab < CatTabLink.length; CountTab++) {
        $(CatTabLink[CountTab]).click(function (event) {
            var PlaceClick = event.target;
            $(PlaceClick).toggleClass('DropTab');
        });
    };
