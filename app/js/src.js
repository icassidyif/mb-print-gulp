var $ = require("jquery");
var search = $('.search');
var btnSlide = $('.search > button');
var btnSubm = $('.search button');
btnSlide.on('click', function(){
  search.addClass('is-active');
});
$(window).click(function(){
  search.removeClass('is-active');
});
search.click(function(event){
  event.stopPropagation();
});