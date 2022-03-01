



$(document).ready(function() {
  // --- our code goes here ---
  console.log('Doc Ready!');

  $('.text-area').on("input", function() {
    const charater = $(this).val().length;
    const max = 140;
    const total = max - charater;
    let counter = $(this).parents('.new-tweet').find('.counter');
    counter.text(total);

    if (total < 0) {
      counter.addClass('red');
    } else {
      counter.removeClass('red');
    }

  });

});




