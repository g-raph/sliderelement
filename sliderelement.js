// responsive tables function
(function( $ ){
   $.fn.sliderelement = function() {
      
      if (!$(this).parent().hasClass('sliderbox')) {
        $(this).wrap('<div class="sliderbox">');
      }
      if (!$(this).parent().prev().hasClass('sliderbutton')) {
        $('<div class="sliderbutton">Click this button!</div>').insertBefore($(this).parent());
      }
      var sliderButton = $(this).parent('.sliderbox').prev('.sliderbutton');
      var sliderBox = $(this).parent('.sliderbox');
      sliderBox.hide();
      sliderButton.click(function(event){
        event.preventDefault();
        $(this).toggleClass('open');
        sliderBox.slideToggle('fast');
      });

   };
})( jQuery );