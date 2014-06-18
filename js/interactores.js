$( document ).ready(function() {
	$(document).scroll(function() {
       $('#menu').toggle($(this).scrollTop() > 200);
      });
});