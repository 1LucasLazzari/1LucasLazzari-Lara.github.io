$(document).ready(function () {

  $('#show-or-hide').on('click', function () {
    var $items = $('#lightgallery .item');
    var $button = $(this);
    $button.remove();

    if ($items.hasClass('esconder')) {
            $items.removeClass('esconder');
    }


  });
});
