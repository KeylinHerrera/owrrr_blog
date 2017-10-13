var openMenu = document.getElementById("openMenu");
var closeMenu = document.getElementById("closeMenu");
var menuWrapper = document.getElementById("menuWrapper");

function toggleMenu() {

	if (menuWrapper.style.display = "none") {

		menuWrapper.style.display = "block";
	} else {
		menuWrapper.style.display = "none";
	}
}

function toggleMenuClose() {
        menuWrapper.style.display = "none";
}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenuClose);