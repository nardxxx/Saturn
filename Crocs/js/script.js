$(function () {
	//MENU BURGER
	$('.wrapper').addClass('loaded');
	$('.icon-menu').click(function (event) {
		$(this).toggleClass('active');
		$('.menu-header__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//MENU BURGER
});
