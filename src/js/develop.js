
function slideActualInit() {
    var slider = $('.js-slider-reviews');
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
}

function slowScroll(id){
    var offset= 0;
    $('html, body').animate ({
        scrollTop: $(id).offset().top - offset
    }, 500);
    return false;
}
function slowVideo(){
    $('.js-open-video').on('click', function(e){
        e.preventDefault();
        $('.section-report__img-wrap').addClass('open');
        setTimeout(function(){ 
            $('.section-report__img-wrap').removeClass('open'); 
        },2000)
        setTimeout(function(){ 
         $('#videoPlaceHolder').show();
            setTimeout(function(){
                $('#videoPlaceHolder').addClass('show');
            },80)
        },800)
    })
    $('.js-close-video').on('click', function(){
        $('#videoPlaceHolder').hide();
        $('#videoPlaceHolder').removeClass('show');
    })
}
$(document).ready(function(){
    slowVideo();
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