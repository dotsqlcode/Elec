$('document').ready(function() {

    clickForAddFav.onclick = function scaling(event) {
        let target = event.target; // где был клик?
        if (target.className != 'add-favorites-icon') return; // не на TD? тогда не интересует
    
        changeIco(target);
    };
    function changeIco(td) {
            var x = td.getAttribute('src');
            var y = '../icons/add-favorites-icon.svg';
            var z = '../icons/added-fav-icon-red.svg';
            if ( x == y ) {
                td.src = z;
            }
            else {
                td.src = y;
            }
    }


    $('.add-to-fav-pr-p-heart--under375').on('click', function (HrtInf) {
        chosingHeart = HrtInf.target;
        var HeartInfo = chosingHeart.getAttribute('src');
        var HeartActive = '../icons/prod-p-fav-red-header--under375.svg';
        var HeartPassive = '../icons/prod-p-fav-empty-header--under375.svg';
        
        if (HeartInfo == HeartPassive) {
            chosingHeart.src = HeartActive;
        }
        else {
            chosingHeart.src = HeartPassive;
        }
    });
}); 
