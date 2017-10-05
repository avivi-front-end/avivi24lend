
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
		slowScroll(videoPlaceHolder);
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
		hideVideo();
	})
}



var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
	  height: '360',
	  width: '640',
	  videoId: 'r54u_O27RAA',
	});
}
function onPlayerReady(event) {
	event.target.playVideo();
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
function stopVideo() {
	player.stopVideo();
}

function hideVideo(){
	$('#videoPlaceHolder').hide();
	stopVideo();
	$('#videoPlaceHolder').removeClass('show');
}

function mobMenu(){
	var btn = $('.js-menuBtn');
	var boxMenu = $('.header__wrap-box-nav');
	var link = $('.header__nav-link');
	btn.on('click', function(){
		$(this).toggleClass('active');
		boxMenu.toggleClass('active');
	})
	link.on('click', function(){
		boxMenu.removeClass('active');
		btn.removeClass('active');
	})
}
$(document).ready(function(){
	mobMenu();
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
