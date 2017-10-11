var openMenu = document.getElementById("openMenu");
var closeMenu = document.getElementById("closeMenu");

function toggleMenu() {
	var menuWrapper = document.getElementById("menuWrapper");

	if (menuWrapper.style.display = "none") {

		menuWrapper.style.display = "block";
	} else {
		menuWrapper.style.display = "none";
	}
}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);