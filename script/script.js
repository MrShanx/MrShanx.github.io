/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    //different initialization for about.html & contact.html
    function initPage() {
        //window scroller bot to top
        this.window.onscroll = function() {scrollFunction();};
    }

    //different initialization for Portfolio.html
    function initPortPage() {
        
        // When the user scrolls the page, execute myFunction
        // for sticky portfolio menu images
        window.onscroll = function() {myFunction();};
        
        //shows webapp slideshow as default project in portfolio page
        showSlides('webSlideshow');
    }
    
/*** JSCRIPTS *****************************************************************/
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    scrollFunction();
    
    //get coming soon <p> from portfolio page
    var comingSoon = document.getElementById('coming_soon');
    
    // Get the position of an element we want sticky from
    var stickyElementPosition = document.getElementById("div_mid_title");

    // Get the offset position of that element
    var sticky = stickyElementPosition.offsetTop + 60;

    //get menu bar id
    var navbar = document.getElementById("leftMenu");
    
    if (window.pageYOffset >= sticky) {
        //sticky on
        navbar.classList.add("sticky");
        //remove coming soon sign when user scrolls
        comingSoon.style.display = "none";
    } else {
        //sticky off
        navbar.classList.remove("sticky");
        //coming soon on
        comingSoon.style.display = "block";
    }
} 

/*** JSCRIPTS END *************************************************************/

/*** DROPDOWN MENU JSCRIPT ****************************************************/
function dropdownFunction() {
    //show menu items
    document.getElementById("myDropdown").classList.toggle("show");   
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if ((!event.target.matches('.dropBtn')) ) {
            resetDropMenu();

            //re-show menu button when user clicks outside menu item list
            var x = document.getElementById("dropBtn");
            if(x.style.display === "none") {
                x.style.display = "block";
            }    
        }
    }    
}
function resetDropMenu() {
    //drpBtn
    document.getElementById('dropBtn').style.display = "none";
    //drpMenu
    var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
    }
}
/*** DROPDOWN MENU JSCRIPT ****************************************************/

/*** SCROLLER JSCRIPT *********************************************************/
//window scroll sensor
function scrollFunction() {
    if((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
        document.getElementById("topBtn").style.display = "block";
        document.getElementById("dropBtn").style.display= "block";        
    }
    else {
        resetDropMenu();
        document.getElementById("topBtn").style.display = "none";
    }
}
//window scroll to top function
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function topFunction(num) {
    document.body.scrollTop = num;
    document.documentElement.scrollTop = num;
}
/*** SCROLLER JSCRIPT *********************************************************/

/*** SLIDESHOW JSCRIPT ********************************************************/
function showSlides(className) {
    var width1 = window.innerWidth;
    var width2 = document.documentElement.clientWidth;
    var width3 = document.body.clientWidth;

    if(width1 < 401 || width2 < 401 || width3 < 401) {
        topFunction(500);
    }
    else if(width1 < 751 || width2 < 751 || width < 751) {
        topFunction(260);
    } 
    //go back top first
    else {topFunction(200);}
    
    //show slideshow with className
    var closeSlides = document.getElementsByClassName('slideShow');
    var i;
    for(i = 0; i < closeSlides.length; i++) {
    	closeSlides[i].style.display = "none";
    }
  	var slideShow = document.getElementById(className);
  	slideShow.style.display = "block"; 
}
/*** SLIDESHOW JSCRIPT ********************************************************/

