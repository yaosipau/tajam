$('.header-menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('header-menu-btn_active');
    $('.header-nav').toggleClass('header-nav_active',2000);
});
$(document).ready(function(){
    $('.hero-container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });
});
$(document).ready(function(){
    $('.testimonials-container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true
  });
});
$(function () {
  var len = $('.slick-dots li button').length;
  for (var i = 0; i < len; i++){
     $('.testimonials-container .slick-dots li button')[i].style.backgroundImage = "url(pic/test"+(i+1)+".png)";   
  };
}); 

new Vue({
	el: '#works',  
	data() {
		return {
	    	pictures: [
				{picRef: 'http://lorempixel.com/220/165?1', workRef: 'http://lorempixel.com/220/165?1'},
		      	{picRef: 'http://lorempixel.com/220/165?2', workRef: 'http://lorempixel.com/220/165?2'},
		      	{picRef: 'http://lorempixel.com/220/165?3', workRef: 'http://lorempixel.com/220/165?3'},
		      	{picRef: 'http://lorempixel.com/220/165?4', workRef: 'http://lorempixel.com/220/165?4'},
		      	{picRef: 'http://lorempixel.com/220/165?5', workRef: 'http://lorempixel.com/220/165?5'},
		      	{picRef: 'http://lorempixel.com/220/165?6', workRef: 'http://lorempixel.com/220/165?6'},
		      	{picRef: 'http://lorempixel.com/220/165?7', workRef: 'http://lorempixel.com/220/165?7'},
		      	{picRef: 'http://lorempixel.com/220/165?8', workRef: 'http://lorempixel.com/220/165?8'},
		      	{picRef: 'http://lorempixel.com/220/165?9', workRef: 'http://lorempixel.com/220/165?9'},
		      	{picRef: 'http://lorempixel.com/220/165?10', workRef: 'http://lorempixel.com/220/165?10'},
		      	{picRef: 'http://lorempixel.com/220/165?11', workRef: 'http://lorempixel.com/220/165?11'},
		      	{picRef: 'http://lorempixel.com/220/165?12', workRef: 'http://lorempixel.com/220/165?12'},
		      	{picRef: 'http://lorempixel.com/220/165?13', workRef: 'http://lorempixel.com/220/165?13'},
		      	{picRef: 'http://lorempixel.com/220/165?14', workRef: 'http://lorempixel.com/220/165?14'},
		      	{picRef: 'http://lorempixel.com/220/165?15', workRef: 'http://lorempixel.com/220/165?15'},
		      	{picRef: 'http://lorempixel.com/220/165?16', workRef: 'http://lorempixel.com/220/165?16'},
		      	{picRef: 'http://lorempixel.com/220/165?17', workRef: 'http://lorempixel.com/220/165?17'},
		      	{picRef: 'http://lorempixel.com/220/165?18', workRef: 'http://lorempixel.com/220/165?18'}
	    	],
	    	picturesToShow: 3
	    };
	}
});