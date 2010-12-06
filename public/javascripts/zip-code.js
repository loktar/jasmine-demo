(function($) {
  $.fn.extend({
    zipCode: function() {
      $('#overlay').css('display', 'none');
      var overlay = $(this).overlay({api: true});

      $('.message').text('Your ZIP Code is ' + $.cookie('zip'));

      $('#overlay button').click(function() {
        $.cookie('zip', $('input').val());
        overlay.close();
      });

      return this;
    }
  });
})(jQuery);