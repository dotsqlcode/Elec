y = $(".ready-made-container__item").length
var x = document.getElementsByClassName("ready-made-container__item");
if (y <= 2) {
    $('.ready-made__container-grid').addClass('ready-grid__one-item');
}
if (x.length == 3) {
    $('.ready-made__container-grid').addClass('ready-grid__three-item');
    $(x[0]).addClass('big-chiken');
    $(x[1]).addClass('wide-chiken');
    $(x[2]).addClass('wide-chiken-sc');
}
if (x.length == 4) {
    $('.ready-made__container-grid').addClass('ready-grid__three-item');
    $(x[0]).addClass('long-chiken');
    $(x[1]).addClass('long-chiken');
    $(x[2]).addClass('wide-chiken');
    $(x[3]).addClass('wide-chiken-sc');
}
if (x.length == 5) {
    $(x[0]).addClass('long-chiken');
    $(x[1]).addClass('long-chiken');
    $(x[2]).addClass('standart-chicken');
    $(x[3]).addClass('standart-chicken');
    $(x[4]).addClass('wide-chiken-sc');
}