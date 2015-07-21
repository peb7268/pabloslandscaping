window.App = {};

function bindEvents(){
	$('#nav li a').on('click', toggleNewPage);
}

function showShade(shade){
	$('#mainContent').append(shade);
}

function hideShade(){
	window.setTimeout(function(){
		$('#mainContent').find('.shade').slideUp(100);
	}, 500);
}

function toggleNewPage(evt){
	evt.preventDefault();
	App.selector = $(evt.target).attr('href');
	
	showShade($('#shade').html());

	$('#mainContent').find('.shade').animate({
		top: '0%'
	}, 100, function(){
		window.location.href = App.selector;
		hideShade();
	});
}

$('document').ready(function(){
	bindEvents();

	var sidebarHeight = $('body > .wrapper').outerHeight();
	$('#sidebar').css('height', sidebarHeight);
});
