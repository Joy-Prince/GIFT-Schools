

/*----------go to top----------------*/
var mybutton = document.getElementById("myBtn");
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
  		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    		mybutton.style.display = "block";
  		} else {
    		mybutton.style.display = "none";
  		}
	}
	function topFunction() {
  		document.body.scrollTop = 0;
  		document.documentElement.scrollTop = 0;
	}



/*--------------animation--------------*/
AOS.init({
    			 offset: 60,
    			 easing: 'ease',
});



/* Code for changing active link on clicking */
var btns = $("#navigation .navbar-nav .nav-link");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");

          current[0].className = current[0].className.replace(" active", "");

          this.className += " active";
    });
}



/* Code for changing active link on Scrolling */
$(window).scroll(function () {

    var distance = $(window).scrollTop();

    $('.page-section').each(function (i) {

          if ($(this).position().top <= distance + 200) {
            
            $('.navbar-nav a.active')
              .removeClass('active');

            $('.navbar-nav a').eq(i)
              .addClass('active');
        }
    });
}).scroll();