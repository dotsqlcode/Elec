$('document').ready(function() {    
    let NoCont = "../icons/form--unfilled-ico.svg";
    let ContConf =  "../icons/check-verif-prof.svg";
    var num = 0;


    function CounterChecker() {
        $('#count-num').val(num);
        if (num < 1) {
            $('#CounterCheck').attr('src', NoCont);
        }
        if (num >= 1) {
            $('#CounterCheck').attr('src', ContConf);
        }
    }


    $('#count-num').on("input", function() {
        num = $('#count-num').val();
        if (num < 0) {
            num = 0;
        }
        CounterChecker();
    });

    $('.counter-plus-ico').click(function () {
        CounterChecker();
        $('#count-num').val(num++);
    });

    $('.counter-minus-ico').click(function () {
        num--;
        if (num < 0) {
            num = 0;
        }
        $('#count-num').val(num);
        CounterChecker();
    });
    
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


    $('.sel-opt__new').click(function (ev) {
        let LengOp = $(ev.target).text().length;
        let OptPar = $(ev.target).parents('.select__new-style');
        let ParNeighImg = $(OptPar).next('img');
        if (LengOp > 0) {
            $(ParNeighImg).attr('src', ContConf);
        }
        return OptPar;
    });


    InputAcceptIcoChange('.name-profile__input');
    InputAcceptIcoChange('.write-place--fill');

    $('.counter-ico').on('click', function (e) {
        var ContCounter = $('.counter-number').text();
        if (ContCounter > 0) {
            $('img.check-ico').attr('src', ContConf);
        }
        else {
            $('img.check-ico').attr('src', NoCont);
        }
    });
});