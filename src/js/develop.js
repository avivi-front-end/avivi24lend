
function slideActualInit() {
    var slider = $('.js-slider-reviews');
 //      slider.on('init', function(){
	//  init();
	// });
    slider.on('init', function(slick, currentSlide) {
    	$('.slider__item-content-clone').html('');
	 $('.slider__item-wrap.slick-current').find('.slider__item-content').clone().appendTo('.slider__item-content-clone');
    })
    if(slider.length > 0){
        slider.slick({
            dots: false,
            arrows: true,
    
            infinite: true,
            slidesToShow: 3,
            centerMode: true,
            slidesToScroll: 1,
            slickGoTo: 2,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1116,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    slider.on('afterChange', function(slick, currentSlide) {
    	$('.slider__item-content-clone').html('');
	 $('.slider__item-wrap.slick-current').find('.slider__item-content').clone().appendTo('.slider__item-content-clone');
    })
    // $(document).on('click', '.js-sale-next', function () {
    //         slider.slick('slickNext');
    //     });
    //     $(document).on('click', '.js-sale-prev', function () {
    //         slider.slick('slickPrev');
    //     });
   
}

function slowScroll(id){
    var offset= 0;
    $('html, body').animate ({
        scrollTop: $(id).offset().top - offset
    }, 500);
    return false;
}
$(document).ready(function(){
	 slideActualInit();
	$('.form_input-inner input').on('click, keydown', function(){
		var $this = $(this);
       var val = $this.val();
       if(val.length >= 1){
			 $(this).closest('label').find('.form_input-text').css('display', 'none');
		}else {
		   $(this).closest('label').find('.form_input-text').css('display', 'block');
		  }
  });
});