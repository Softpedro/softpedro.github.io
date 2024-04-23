(function($) {
  $.fn.customSlider = function(options) {
      var settings = $.extend({
          slidesToShow: 1,
          autoplay: false,
          autoplaySpeed: 3000
      }, options);

      return this.each(function() {
          var $this = $(this);
          var $slides = $this.find('.slides');
          var numSlides = $slides.find('.slide').length;
          var slideWidth = $this.outerWidth() / settings.slidesToShow;
          var currentIndex = 0;

          $this.find('.next').on('click', function() {
              moveSlide(currentIndex + settings.slidesToShow);
          });

          $this.find('.prev').on('click', function() {
              moveSlide(currentIndex - settings.slidesToShow);
          });

          function moveSlide(newIndex) {
              if (newIndex < 0) {
                  newIndex = 0;
              } else if (newIndex + settings.slidesToShow > numSlides) {
                  newIndex = numSlides - settings.slidesToShow;
              }
              $slides.css('transform', 'translateX(' + (-newIndex * slideWidth) + 'px)');
              currentIndex = newIndex;
          }
      });
  };
}(jQuery));