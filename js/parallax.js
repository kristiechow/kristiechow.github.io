$(document).ready(function() {

	// INITIATE THE FOOTER
  siteFooter();

	$(window).resize(function() {
		siteFooter();
	});

	function siteFooter() {
		var siteContent = $('.portmanteau2');
		var siteContentHeight = siteContent.height();
		var siteContentWidth = siteContent.width();

		var siteFooter = $('.portmanteau3');
		var siteFooterHeight = siteFooter.height();
		var siteFooterWidth = siteFooter.width();

		siteContent.css({
			"margin-bottom" : siteFooterHeight + 39
		});
	};
});
