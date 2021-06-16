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
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
            panel.style.display = "block";
            }
        });
    }
    $('.question__title').click(function(event){
        $(this).removeClass('quest__arrow--down').addClass('question--turn-arrow');
        // event.preventDefault();
    });
    let inputs = document.querySelectorAll('.file-input--modify');
    Array.prototype.forEach.call(inputs, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.choose-file').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.choose-file').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.choose-file').innerText = labelVal;
      });
    });


    var Ahtung = document.getElementsByClassName('drop-content');
    for (mur = 0; mur < Ahtung.length; mur++) {
      $(Ahtung[mur]).removeClass('disabled');
    }
    var Ahtungg = document.getElementsByClassName('textarea-quest-tb');
    for (mur = 0; mur < Ahtungg.length; mur++) {
      $(Ahtungg[mur]).addClass('disabled');
    }

    $('.edit-question-ico').on('click', function (ClickPlace) {
      var ClickElement = ClickPlace.target;
      var TitleText = $(ClickElement).next('.question__title').text();
      var TextDescr = $(ClickElement).siblings('.question__text-block').find('.drop-content').text();
      $(ClickElement).siblings('.edit-title-of-quest').toggleClass('disabled');
      $(ClickElement).siblings('.edit-title-of-quest').attr('value', TitleText);
      $(ClickElement).siblings('.edit-title-of-quest').focus();
      $(ClickElement).siblings('.drop-descr-textarea').toggleClass('disabled');
      $(ClickElement).siblings('.drop-descr-textarea').text(TextDescr);
      $(ClickElement).siblings('h3').toggleClass('disabled active');
      $(ClickElement).toggleClass('ico-edit--pos');
      $(ClickElement).siblings('.question__text-block').toggleClass('disabled');
      var DropBlockText = $(ClickElement).siblings('.question__text-block');
      $(DropBlockText).attr('style', 'display:none');
    });

    $('.rull-edit-ico').on('click', function (smth) {
      var SmthWasClick = smth.target;
      var SmthBlockText = $(SmthWasClick).parent('.title-container').siblings('.rules-using__text-box').find('.drop-content').text();
      $(SmthWasClick).parent('.title-container').siblings('.drop-descr-textarea').toggleClass('disabled');
      $(SmthWasClick).parent('.title-container').siblings('.drop-descr-textarea').text(SmthBlockText).focus();
      $(SmthWasClick).parent('.title-container').siblings('.rules-using__text-box').find('.drop-content').toggleClass('disabled');
    });

    $('.drop-all-text-rules-under375').on('click', function () {
      $('.drop-content').toggleClass('text__drop-text');
      $('.drop-all-text-rules-under375').toggleClass('arrow--rotate');
    });
}); 