const dropdown1 = document.getElementById("navbar-dropdown1-services");
const dropdown2 = document.getElementById("navbar-dropdown2-organization-services");
function navbarDropdownToggleActive(drpdwn){
	if (drpdwn === 1) {
		if (dropdown2.classList.contains("is-active"))
			dropdown2.classList.toggle("is-active");
		dropdown1.classList.toggle("is-active");
	} else if (drpdwn === 2) {
		if (dropdown1.classList.contains("is-active"))
			dropdown1.classList.toggle("is-active");
		dropdown2.classList.toggle("is-active");
	}
}


$(document).ready(function() {
	// Burger Menu
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");
  });

	/* Close dropdwon when click outside
	* Anything that gets to the document
	* will hide the dropdown
	*/
	$(document).click(function(){
		$("#navbar-dropdown1-services").removeClass('is-active');
		$("#navbar-dropdown2-organization-services").removeClass('is-active');
	});

	/* Clicks within the dropdown won't make
	* it past the dropdown itself
	*/
	$("#navbar-dropdown1-services").click(function(e){
		e.stopPropagation();
	});
	$("#navbar-dropdown2-organization-services").click(function(e){
		e.stopPropagation();
	});
});