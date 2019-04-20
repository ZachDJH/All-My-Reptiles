function mobileMenu(mobileButton) {
	let menuFlag = 0; //Tells program to open menu if zero or close if 1
	if (menuFlag === 0) {
	  mobileButton.addEventListener("click", menuOpen, true);
    }
	function menuOpen() {
		menuFlag = 1;
		let menu = document.querySelector("ul.is-hidden");
		console.log(document.querySelector("ul.is-hidden"));
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