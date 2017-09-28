$(document).ready(function(){
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
