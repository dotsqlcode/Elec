$('document').ready(function() {
    //modal window //
    $('select').styler();
    $('.close-ico-window').click(function () {
        $('.modal-window').addClass('disabled');
        $('.win-adm-app--active').addClass('disabled');
    });
    $('#adm-recovery').click(function () {
        $('.modal-window').removeClass('disabled');
        $('.win-adm-app--active').removeClass('disabled');
    });

    $('.arrow-drop-dialog, .drop-dialgs-area').click(function (event) {
        let OnClickDial = event.target;
        let ClickDialParent = $(OnClickDial).parents('.for-drop-dial-class');
        $(ClickDialParent).toggleClass('DialogDropActive');
        $(OnClickDial).toggleClass('window--rotate');
    });

    let ChatTrain = document.getElementsByClassName('descr-el-chat__pop-up-window');
    let TrainNum = 0;

    function ChatTrainFunc () {
        let ElemCount;
        for (ElemCount = 0; ElemCount < ChatTrain.length; ElemCount++) {
            $('.descr-el-chat__pop-up-window').addClass('disabled');
        }
        $(ChatTrain[TrainNum]).removeClass('disabled');
    }

    function ChangeWindow () {
        let a = event.target;
        let b = $(a).parents('.descr-el-chat__pop-up-window');
        $(b).addClass('disabled');
    };

    ChatTrainFunc();

    $('.descr-info__next-btn').click(function (event) {
        ChangeWindow();
        TrainNum++;
        $(ChatTrain[TrainNum]).removeClass('disabled');
    });
    $('.descr-info__prev-btn').click(function (event) {
        ChangeWindow();
        TrainNum--;
        $(ChatTrain[TrainNum]).removeClass('disabled');
    });


    $('.call-adm-ico').click(function() {
        $('.call-adm-modal-functional-window').addClass('active');
    });
    $('.function__call-adm').click(function() {
        $(this).addClass('function__call-adm-click');
    });
    $('.call-adm-modal-functional-window, .send-message-textarea__wrapper, .window-msg__only-text-block').click(function() {
        $('.call-adm-modal-functional-window').removeClass('active');
        $('.function__call-adm').removeClass('function__call-adm-click');
    });

    $('#resolved').on('click', function () {
        prompt('Подтвердите решение проблемы, написав "Подтверждаю".');
    });

    $('.modal-window').on('click', function (sharker) {
        if ( $(sharker.target).closest('.modal-w__inner-container').length) {
            return;
        }
        $('.modal-window').fadeOut();
    });

    $('#adm-recovery').on('click', function () {
        $('.modal-window').fadeIn();
    });

    $('.chat').on('click', function (sharker) {
        if ( $(sharker.target).closest('.call-adm-modal-functional-window').length) {
            return;
        }
        if ( $(sharker.target).closest('.call-adm-ico').length) {
            return;
        }
        $('.call-adm-modal-functional-window').fadeOut();
    });

    $('.call-adm-ico').on('click', function () {
        $('.call-adm-modal-functional-window').fadeIn();
    });
    

    $('.full-disp-ico').on('click', function () {
        $('.chat').toggleClass('chat-large');
    });

    $('.discuss-prod__tab').on('click', function (ProdToChat) {
        var SpecToChatArea = ProdToChat.target;
        /* Дописать, чтобы по клику на определенный продукт для него открывался свой чат */ 
        $('.chat-box__wrapper').addClass('ProdToChat');
        var CheckClass = $('.chat-box__wrapper').hasClass('ProdToChat');
        if (CheckClass === true) {
            $('.dialogs-page__title, .name-of-product').addClass('active-box'); 
            $('.chat-page__title').addClass('disabled');
            $('.chat-title-container').addClass('chat-page-on');
            $('.chat-exit__btn-link').removeClass('disabled'); 
        }
    });
    
    $('.chat-exit__btn-link').on('click', function () {
       $('.chat-box__wrapper').removeClass('ProdToChat');
       var CheckClassExit = $('.chat-box__wrapper').hasClass('ProdToChat');
        if (CheckClassExit === false) {
            $('.dialogs-page__title, .name-of-product').removeClass('active-box'); 
            $('.chat-page__title').removeClass('disabled');
            $('.chat-title-container').removeClass('chat-page-on');
            $('.chat-exit__btn-link').addClass('disabled'); 
        }
    });
    // $(window).scroll(function (e) {
    //     var ScrollingInfo = window.pageYOffset;
    //     if (ScrollingInfo >= 200 && ScrollingInfo <= 320) {
    //         var link = $('.for-chat-anchor')[0];
    //         var linkEvent = document.createEvent('MouseEvents');
    //         linkEvent.initEvent('click', true, true);
    //         link.dispatchEvent(linkEvent);
    //         e.preventDefault();
    //     }
    // });
    // $('.info-ico').on('click', function () {
    //     var scrollInfo = $(window).scrollTop();
    // });

    // $(window).resize(function() {
    //     $("#width").text($(window).width());
    //     var widthWindow = $('#width').text();
    //     var NumToScroll = 300 / 1920;
    //     var NumToScrollEnd = widthWindow * NumToScroll;
    //     $('#ForHeightScroll').text(NumToScrollEnd);
    // });
    
    // // вызовем событие resize
    // $(window).resize();

    // $(window).scroll(function (el) {
    //     var NumToScrollEnd = $('#ForHeightScroll').text();
    //     var ScrollingInfo = window.pageYOffset;
    //     // var ChatWin = document.getElementsByClassName('chat-box__wrapper');
    //     // $('.messages-window__header-title').text(ScrollingInfo);
    //     if (ScrollingInfo > (NumToScrollEnd + 20)) {
    //         return;
    //     }
    //     if (ScrollingInfo >= (NumToScrollEnd - 100) && ScrollingInfo <= (NumToScrollEnd + 20)) {
    //         $(window).scrollTop(NumToScrollEnd);
    //         // $('.for-chat-anchor')[0].click();
    //         // var speed = 159;
    //         // var top = $('.chat-box__wrapper').offset().top;
	// 	    // $('html, body').animate({scrollTop: top}, speed);
    //     }
    // });
}); 
// (ScrollingInfo >= 200 && ScrollingInfo <= 320)
// var link = $('.for-chat-anchor')[0];
// var linkEvent = document.createEvent('MouseEvents');
// linkEvent.initEvent('click', true, true);
// link.dispatchEvent(linkEvent);
// e.preventDefault();