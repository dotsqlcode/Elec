$('document').ready(function() {

    $('.search-filter-title, .search-filter__ico').click(function () {
        $('.page__modal-filters').removeClass('disabled');
        $('.main-filter').removeClass('disabled');
    });
    $('.close-ico').click(function() {
        $('.page__modal-filters').addClass('disabled');
        for (i = 1; i < x.length; i++) {
            $('.container__filter-wrapper').addClass('disabled');
        }
    });

    var x = document.getElementsByClassName("sort__category");
    var i;
    var countOpenTab = document.getElementsByClassName("container__filter-wrapper");
    
    $('.sort__category').click(function (event) {
        for (i = 1; i < x.length; i++) {
            $('.container__filter-wrapper').addClass('disabled');
        }
        var clickId = event.target.value;
        $(countOpenTab[clickId]).removeClass('disabled');
    });

    $('.back-arrow-ico').click(function (event) {
        var backAr = event.target.id;
        $(countOpenTab[backAr - 1]).addClass('disabled');
    });

    $(function() {
        $('#pagination').pagination({
            items: 100,
            itemsOnPage: 3,
            edges: 1,
        });
    });

    $('.page__modal-filters').on('click', function (em) {
        if ( $(em.target).closest('.filters-modal-window__container').length) {
            // клик внутри элемента 
            return;
        }
        // клик снаружи элемента 
        $('.page__modal-filters').fadeOut();
        $('.filters-modal-window__container').fadeOut();
    });
    $('.search-filter-title, .search-filter__ico').on('click', function OpenModal () {
        $('.filters-modal-window__container').fadeIn();
        $('.page__modal-filters').fadeIn();
    });


    var CountPageMSection = document.getElementsByClassName('page__modal-filters');
    if (CountPageMSection.length >= 1) {
        $('.daterangepicker').attr('style', 'z-index: 1999 !important;');
    }
});