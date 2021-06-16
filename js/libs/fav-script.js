$('document').ready(function() {
    $('.add-favorites-icon').on('click', function(AreaCl){
        var ChangeHeart = AreaCl.target;
        var LinkHeart = $(ChangeHeart).attr('src');
        var y = '../icons/add-favorites-icon.svg';
        var z = '../icons/added-fav-icon-red.svg';
        var k = '../icons/prod-favour-ico.svg';
        if (LinkHeart == y ) {
            $(ChangeHeart).attr('src', z);
        }
        if (LinkHeart == z ) {
            $(ChangeHeart).attr('src', y);
        }
        if (LinkHeart == k ) {
            $(ChangeHeart).attr('src', z);
        }
    });
}); 