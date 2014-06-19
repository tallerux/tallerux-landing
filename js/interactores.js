$( document ).ready(function() {
/*	$(document).scroll(function(event){
		if ($(this).scrollTop() > 350)
       			$('#menu').slideToggle();
      });*/
	$(document).scroll(function(){
        if ($(this).scrollTop() > 350) {
            $('#menu').slideDown(200);}

        else {
            $('#menu').slideUp(200);
        }

/*        if ($(this).scrollTop() < 2000) {
            $('#menu').slideDown(200);}

        else {
            $('#menu').slideUp(200);
        }*/

	});
});