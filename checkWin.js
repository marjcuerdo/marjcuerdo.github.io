/*function checkSize() {
  var winWidth = 0;
  var x = document.getElementById("myLinks");
  $(window).resize(function() {
    winWidth = $(window).width();
    if ((x.classList.contains("hid")) && (winWidth < 500)) {
      x.style.display = "inline-block";
  }
}*/

$(function () {
	var x = document.getElementById("myLinks");
	$(window).bind("resize", function() {
		console.log($(this).width())
		if ( ($(this).width() > 500) && (x.classList.contains('hid')) ){
			x.style.display = "inline-block";
		} 
	}).trigger('resize');
})