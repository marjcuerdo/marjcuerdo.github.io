document.write('\<link rel="stylesheet" href="css/nav.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\
	<div class="topnav" id="myTopnav">\
		<div class="topbar">\
		<h1>Marjorie Ann Cuerdo<p class="subtitle">UX + Games User Research</p></h1>\
				<a href="javascript:void(0);" id="icon" onclick="myFunction()">\
	    			<i class="fa fa-bars"></i>\
	    		</a>\
	    </div>\
			<ul id="myLinks">\
				<li><a href="index.html">Home</a></li>\
        <li><a href="portfolio.html">Research</a></li>\
        <li><a href="design.html">Design + Development</a></li>\
				<li><a href="resume.html">Résumé</a><li>\
        <li><a href="blog.html">Blog</a><li>\
			</ul>\
    </div>');

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
    x.classList.add("hid");
  } else {
    x.style.display = "inline-block";
  }

}

$(function () {
  var x = document.getElementById("myLinks");
  $(window).bind("resize", function() {
    console.log($(this).width())
    if ( ($(this).width() > 300) && (x.classList.contains('hid')) ){
      x.style.display = "inline-block";
      x.class("background-color","green");
    } else {
      x.class("background-color","red");
    }
  }).trigger('resize');
})