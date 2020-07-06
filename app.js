// Navigation Animations for Mobile
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	// Toggl eNav
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
		// Animate Links
		navLinks.forEach((link, index) =>{
		if (link.style.animation){
			link.style.animation = '';
		}
		else {
			link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + .5}s`;	
		}
	});
		// Burger Animation
		burger.classList.toggle('toggle');
	});
}
navSlide();

// Cache selectors
var lastId,
 topMenu = $(".nav-links"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("nav-item-active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});
