/*Created for @nfrette */

$( document ).ready(function() {
	$(document).scroll(function(event){
    var boton = $('.partners').offset().top;
    var boton2 = $('footer').offset().top + 150;

		if ($(this).scrollTop() >= boton && $(document).scrollTop() < boton2) {
       			$('#menu .button').hide();
            $('#menu').css("text-align","center");}
          else {
            $('#menu .button').show();
            $('#menu').css("text-align","left");
          }
      });
	
  $(document).scroll(function(){
        if ($(this).scrollTop() > 350) {
            $('#menu').slideDown(200);}

        else {
            $('#menu').slideUp(200);
        }
	});
});