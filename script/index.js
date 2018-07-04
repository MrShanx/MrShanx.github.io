//vanilla js for comptability
var menu_button = document.querySelector(".sidenav-button_container_bars");
var menu = document.getElementById("mySideNav");
var close_button = document.querySelector(".sidenav-close-button_container");
var main = document.getElementById("main");
var document_window = window;
var navbar = document.querySelector(".sidenav-button_container");
var logo = document.querySelector(".App-menu-logo");
var coffee_logo = document.querySelector(".coffee-logo");

close_button.addEventListener("click", closeMenu);
menu_button.addEventListener("click", openMenu);
window.addEventListener("scroll", changeStickyMenu);

function openMenu() {
	//menu
	menu.classList.add("open-nav"); //open-nav

	//close button
	close_button.classList.add("change"); //turns burger icon into close icon

	//menu button - if menu is open, remove sticky menu and logo
	navbar.classList.add("remove-button");
}

function closeMenu() {
	//menu
	menu.classList.remove("open-nav");

	//close button
	close_button.classList.remove("change"); //turns burger icon into close icon

	//menu button - if menu is closed, add sticky menu
	navbar.classList.remove("remove-button");
}

function changeStickyMenu() {
	var window_width = window.innerWidth;
	
	//past image
	if ((document.body.scrollTop > 290 || 
			document.documentElement.scrollTop > 290)) {
		navbar.classList.add("sticky-menu_pastImage");
		if(window_width > 400) {
			coffee_logo.classList.add("show-logo");
		} else {
			coffee_logo.classList.remove("show-logo");
		}
	} else {
		navbar.classList.remove("sticky-menu_pastImage");
		coffee_logo.classList.remove("show-logo");
	}

	//past name
	if ((document.body.scrollTop > 410 || 
			document.documentElement.scrollTop > 410)) {
		logo.classList.add("show-logo");
	} else {
		logo.classList.remove("show-logo");
	}
} 