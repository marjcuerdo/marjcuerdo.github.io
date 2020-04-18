document.write('\<link rel="stylesheet" href="css/nav.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\
	<div class="topnav" id="myTopnav">\
		<div class="topbar">\
		<h1>Marjorie Ann Cuerdo <p class="subtitle">HCI+Games UX</p></h1>\
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

$(document).ready(function(){
   $(window).on('resize' , function(){
            resize('#about' , '#bio');
   });

});

function resize(el1 , el2){
    var $window = $(window);
    if($window.width() <= 600){
         $(el2).insertBefore(el1);
    }else{
         $(el2).insertAfter(el1);
    }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  } else {
    x.style.display = "inline-block";
  }

}