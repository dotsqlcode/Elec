// const { on } = require("gulp");

$('document').ready(function() {
    $('select').styler();
    $('#nxt-st-btn').click(function () {
        $('.second-stage').addClass('stage-confirm');
        $('.first-stage__display-container').addClass('disabled');
        $('.second-stage__display-container').removeClass('disabled');
    });
    $('#nxt-st-btn2').click(function () {
        $('.third-stage').addClass('stage-confirm');
        $('.second-stage__display-container').addClass('disabled');
        $('.third-stage__display-container').removeClass('disabled');
    });
    $('#prv-st-btn2').click(function () {
        $('.second-stage').removeClass('stage-confirm');
        $('.first-stage__display-container').removeClass('disabled');
        $('.second-stage__display-container').addClass('disabled');
    });
    $('#prv-st-btn3').click(function () {
        $('.third-stage').removeClass('stage-confirm');
        $('.second-stage__display-container').removeClass('disabled');
        $('.third-stage__display-container').addClass('disabled');
    });

    let CounterItem = document.getElementsByClassName('counter-numbers');
    let Num;


    $('#add-p').on('change', function(){
        let NumChoseCount = this.files.length;
        for(Num = 0; Num < NumChoseCount; Num++) {
            $(CounterItem[Num]).addClass('selected-count');
        }
        if (NumChoseCount >= 1) {
            $('#del-photo-ico').removeClass('disable');
        }
    });
    $('#add-v').on('change', function(){
        let NumChoseCountVideo = this.files.length;
        if (NumChoseCountVideo >= 1) {
            $('#del-video-ico').removeClass('disable');
        }
    });

    let NoCont = "../icons/form--unfilled-ico.svg";
    let ContConf =  "../icons/check-verif-prof.svg";

    function InputAcceptIcoChange (element) {
        $(element).on("input", function(event) {
            let ThisInp = event.target,
            Neighbor = $(ThisInp).next('img'),
            NeighborLink = $(Neighbor).attr('src');
            if (NeighborLink == NoCont) {
                $(Neighbor).attr('src', ContConf);
            }
            if ($(ThisInp).val().length < 1) {
                $(Neighbor).attr('src', NoCont);
            }
        });
    }

    InputAcceptIcoChange('.name-profile__input');
    InputAcceptIcoChange('.write-place--fill');
    
    
    $('.sel-opt__new').click(function (ev) {
        let LengOp = $(ev.target).text().length;
        let OptPar = $(ev.target).parents('.select__new-style');
        let ParNeighImg = $(OptPar).next('img');
        if (LengOp > 0) {
            $(ParNeighImg).attr('src', ContConf);
        }
        return OptPar;
    });

    $('.tarif-card-wrapper--under375').on('click', function (NumOfCard) {
        $('.tarif-card-wrapper--under375').removeClass('ShadowAdd');
        var PlaceWasClicked = NumOfCard.target;
        var CardWasClicked = $(PlaceWasClicked).parents('.tarif-card-wrapper--under375');
        var SmeshBla = $(PlaceWasClicked).hasClass('tarif-card-wrapper--under375');
        $(CardWasClicked).addClass('ShadowAdd');
        if (SmeshBla === true) {
            $(PlaceWasClicked).addClass('ShadowAdd');
        }
    });

    // var MorozISolnce = $('.third-stage__tarifs-container--under375').html();

    // $('.add-product__tarifs-title').on('click', function () {
    //     $('.third-stage__tarifs-container--under375').append(MorozISolnce);
    //     $('select').styler();
    // });
    // $(window).resize(function() {
    //     var DocWidthInfo = $(window).width();
    //     var ContentCardTarif;
    //     if (DocWidthInfo <= 376) {
    //         ContentCardTarif = $('.third-stage__tarifs-grid-container').html();
    //     }
    //     alert(ContentCardTarif);
    // });
    //     // вызовем событие resize
    // $(window).resize();
});

// let InputChanges = ($(event.target).val());