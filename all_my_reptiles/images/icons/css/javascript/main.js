function mobileMenu(mobileButton) {
	let menuFlag = 0; //Tells program to open menu if zero or close if 1
	if (menuFlag === 0) {
	  mobileButton.addEventListener("click", menuOpen, true);
    }
	function menuOpen() {
		menuFlag = 1;
		let menu = document.querySelector("ul.is-hidden");
		menu.setAttribute("class", "is-visible");
		if (menuFlag === 1) {
			mobileButton.addEventListener("click", menuClose, true);
			function menuClose() {
				if (menuFlag === 1) {
				  menu.setAttribute("class", "is-hidden");
				  menuFlag = 0;
				  mobileMenu(document.getElementById("mobile-bar-button"));
			  }
		   }
	    }
	}
}
mobileMenu(document.getElementById("mobile-bar-button"));

function imgZoom() {
	let img = document.getElementsByClassName("img-item");
	for (let i = 0; i < img.length; i++) {
		img[i].addEventListener("mouseover", zoomIn, true);
		img[i].addEventListener("mouseout", zoomOut, true);
	
	function zoomIn() {
		img[i].setAttribute("class", "img-item has-shadow img-zoom") - 1;
	}
	function zoomOut() {
		img[i].setAttribute("class", "img-item has-shadow img-zoomout") - 1;
	}
  }
}
imgZoom();