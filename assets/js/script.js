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

AOS.init(
    		{
    			 offset: 60,
    			 easing: 'ease',
    		});


 on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

 /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }
