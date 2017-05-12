//testimonal slider reviewes
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;
var slideInterval = 2000;

function nextSlide() {
	if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
		$('#slidewrapper').css('transform', 'translate(0, 0)');
		slideNow = 1;
	}
	else {
		translateWidth = -$('#viewport').width() * (slideNow);
		$('#slidewrapper').css({
			'transform': 'translate(' + translateWidth + 'px, 0)'
			, '-webkit-transform': 'translate(' + translateWidth + 'px, 0)'
			, '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
		, });
		slideNow++;
	}
}
var switchInterval = setInterval(nextSlide, slideInterval);
$(function () {
	$('#viewport').hover(function () {
		clearInterval(switchInterval);
	}, function () {
		switchInterval = setInterval(nextSlide, slideInterval);
	});
});
var navBtnId = 0;
$('.slide-nav-btn').click(function () {
	navBtnId = $(this).index();
	if (navBtnId + 1 != slideNow) {
		translateWidth = -$('#viewport').width() * (navBtnId);
		$('#slidewrapper').css({
			'transform': 'translate(' + translateWidth + 'px, 0)'
			, '-webkit-transform': 'translate(' + translateWidth + 'px, 0)'
			, '-ms-transform': 'translate(' + translateWidth + 'px, 0)'
		, });
		slideNow = navBtnId + 1;
	}
});
//services menu visited
$(function () {
	$('.services_nav a').click(function () {
		$('.services_nav a').removeClass("service_active");
		$(this).addClass("service_active");
		$(this).css("color", "white");
	});
});
//memberships button more
$(function () {
	var showChar = 100;
	var ellipsestext = "...";
	var moretext = "more>";
	var lesstext = "less";
	$('.more').each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
			var c = content.substr(0, showChar);
			var h = content.substr(showChar, content.length - showChar);
			var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
			$(this).html(html);
		}
	});
	$(".morelink").click(function () {
		if ($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		}
		else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
});