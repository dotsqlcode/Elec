$('document').ready(function() {

    var acc = document.getElementsByClassName("question__title");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "grid") {
            panel.style.display = "none";
            } else {
            panel.style.display = "grid";
            }
        });
    }
    $('.question__title').click(function(event){
        $(this).removeClass('quest__arrow--down').addClass('question--turn-arrow');
        // event.preventDefault();
    });

    
    $('.decor-circle__block, .decor-circle').on('click', function(CirclEl) {
        var CircleElArea = CirclEl.target;
        $(CircleElArea).parents('.user-prev-card__wrapper').find('.onclick__function-block').attr('style', 'display: block;');
        if ($(CircleElArea).parents('.user-prev-card__wrapper').find('.us-name__title').hasClass('blocked')) {
            $(CircleElArea).parents('.user-prev-card__wrapper').find('.bloker-btn').addClass('disabled'); 
            $(CircleElArea).parents('.user-prev-card__wrapper').find('.unblocker-btn').removeClass('disabled'); 
        }
        else {
            $(CircleElArea).parents('.user-prev-card__wrapper').find('.unblocker-btn').addClass('disabled');
            $(CircleElArea).parents('.user-prev-card__wrapper').find('.bloker-btn').removeClass('disabled'); 
        }
    });


    $('body').on('click', function (em) {
        if ( $(em.target).closest('.onclick__function-block').length) {
            return;
        }
        if ( $(em.target).closest('.decor-circle__block').length) {
            return;
        }
        $('.onclick__function-block').fadeOut();
    });


    $('.funct__link').on('click', function () {
        $('.onclick__function-block').fadeOut();
    });


    $('.bloker-btn').on('click', function (blockBtn) {
        var BlockBtnClicked = blockBtn.target;
        $(BlockBtnClicked).parents('.user-prev-card__wrapper').find('.us-name__title').addClass('blocked');       
    });
    
    $('.unblocker-btn').on('click', function (UnBlockBtn) {
        var UnBlockBtnClicked = UnBlockBtn.target;
        $(UnBlockBtnClicked).parents('.user-prev-card__wrapper').find('.us-name__title').removeClass('blocked');
    });
});