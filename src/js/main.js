try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    
    require('bootstrap');
} catch (e) {}

// ============================================================================
//	document.ready
//	Will fire immediately when DOM is ready
// ============================================================================
$(document).ready(function () {


	// ==========================================================================
	// AP Header (new header)
	// ==========================================================================
	(function() {

		const navbar = document.querySelector('.main-navbar')
		const navTrigger = document.querySelector('.main-navbar__trigger')
		const menuNav = document.querySelector('.main-navbar__mobile-nav')
		
		// menu-nav click
		if(navTrigger) {
			navTrigger.addEventListener('click', (e) => {
				e.preventDefault()
				e.target.classList.toggle('is-active')
				menuNav.classList.toggle('is-active')
				activeChecker(menuNav)
			})
		}
	})()
	// ==========================================================================


	// ==========================================================================
	// Search
	// ==========================================================================
	// (function () {
	// })();
	// ==========================================================================


}); // end document.ready