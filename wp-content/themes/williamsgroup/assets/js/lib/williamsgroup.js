// hamburger menu`
$(document).ready(function(){
    $("span").click(function(){
        $("body").toggleClass('mobilenav');
    });
});

// hamber icon transform
$(function(){
 var obj = document.querySelectorAll('.nav-icon');
  for(var i = obj.length -1;i>=0;i--){
      var toggle = obj[i];
      toggleactive(toggle);
  }

  function toggleactive(toggle) {
    toggle.addEventListener("click",function() {

      if(this.classList.contains("active") === true) {
        this.classList.remove("active");
      }
      else {
        this.classList.add("active");
      }
    });
  }
});


// On Scroll Nav
$(function() {
    //caches a jQuery object containing the header element
    var header = $(".clearHeader");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200 && $(window).width() > 1024) {
            header.removeClass('clearHeader').addClass("scroll-nav");
        } else {
            header.removeClass("scroll-nav").addClass('clearHeader');
        }
    });
});


// prices accordian

/* Toggle between adding and removing the "active" and "show"
classes when the user clicks on one of the "Section" buttons.
The "active" class is used to add a background color to the
current button when its belonging panel is open. The "show" class
is used to open the specific accordion panel */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

// Fade in up effect on viewpoint

jQuery(document).ready(function() {
	jQuery('.fade-in-up-effect').addClass("hidden-effect").viewportChecker({
	    classToAdd: 'visible-effect animated fadeInUp', // Class to add to the elements when they are visible
	    offset: 100
	   });
});
