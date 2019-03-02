var nav = document.querySelector(".nav");
var nav_toggle = document.querySelector(".nav__toggle");
var page_toggle = document.querySelector(".page-header__toggle");

nav.classList.add("nav--close");


page_toggle.addEventListener("click", function(e){
	e.preventDefault();
	nav.classList.toggle("nav--close");
});

nav_toggle.addEventListener("click", function(e){
	e.preventDefault();
	nav.classList.add("nav--close");
});