$(function() {
	var pull 		= $('#pull');
	menu 		= $('nav ul');
	menuHeight	= menu.height();
    $(pull).on('click', function(e) {
	    e.preventDefault();
	    menu.slideToggle();
    });
    $(window).resize(function(){
    		var w = $(window).width();
    		if(w > 320 && menu.is(':hidden')) {
    			menu.removeAttr('style');
    		}
  	});
});

// TEXTO 

function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 75;
var h3 = document.querySelector('h3');
var delay = h3.innerHTML.length * speed + speed;


// type affect to body
setTimeout(function(){
  h3.style.display = "inline-block";
  typeEffect(h3, speed);
}, delay);

