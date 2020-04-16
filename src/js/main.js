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

		const navTrigger = document.querySelector('.main-navbar__trigger')
		const menuNav = document.querySelector('.main-navbar__mobile-nav')
		
		// menu-nav click
		if(navTrigger) {
			navTrigger.addEventListener('click', (e) => {
				e.preventDefault()
				e.target.classList.toggle('is-active')
				menuNav.classList.toggle('is-active')
			})
		}
	})();
	// ==========================================================================

	// ==========================================================================
	// Color Picker
	// ==========================================================================
	(function () {
		const colorTrigger = document.querySelector('.color-config__trigger')
		const colorGear = document.querySelector('.color-config__trigger-link')
		const colorOption = document.querySelector('.color-config__content')

		if(colorGear) {
			colorGear.addEventListener('click', (e) => {
				e.preventDefault()
				e.target.classList.toggle('is-active')
				colorTrigger.classList.toggle('is-active')
				colorOption.classList.toggle('is-active')
				activeChecker(colorTrigger, colorOption)
			})
		}
	})();
	// ==========================================================================

	// ==========================================================================
	// Back-to-top Button
	// ==========================================================================
	(function () {
		$('body').append('<a class="scroll-up"></a>');
		var btn = $('.scroll-up');

		$(window).scroll(function () {
			if ($(window).scrollTop() > 400) {
				btn.addClass('show');
			} else {
				btn.removeClass('show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, '300');
		});
	})();
	// ==========================================================================


	// ==========================================================================
	// 
	// ==========================================================================
	// (function () {
		
	// })();
	// ==========================================================================


}); // end document.ready