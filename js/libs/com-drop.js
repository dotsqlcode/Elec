$('document').ready(function() {
    var ComText = document.getElementsByClassName("comment-card__text");
    var BtnDropText = document.getElementsByClassName("comment-btn");
    var i;

    for (i = 0; i < ComText.length; i++) {  
        var NumLeng = ComText[i].textContent.length;
        valum = Number.parseInt(NumLeng);
        if (valum >= 670) { 
            $('.comment-btn').addClass('active');
        }
        if (valum < 670) {
            var NotEnought = i;
            var FatherElem = $(ComText[NotEnought]).parent('.text-comment-block__container');
            $(FatherElem).children('.comment-btn').addClass('disabled-t');
        }
        $(BtnDropText[i]).click(function (event) {
            var PlaceClick = event.target;
            var DropTextFath = $(PlaceClick).parent('.text-comment-block__container');
            var DropTextElem = $(DropTextFath).children('.comment-card__text');
            var DropTextElem2 = $(DropTextFath).children('.comment-btn');
            $(DropTextElem).toggleClass('text__drop-text');
            $(DropTextElem2).toggleClass('btn-less');
            var BtnTextCont = $(DropTextElem2).text();
            if (BtnTextCont == 'Подробнее') {
                $(DropTextElem2).text('Скрыть');
            }
            else {
                $(DropTextElem2).text('Подробнее');
            }
        });
    }
}); 