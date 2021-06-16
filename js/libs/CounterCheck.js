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
    
});