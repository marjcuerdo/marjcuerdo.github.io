document.write('\<link rel="stylesheet" href="css/nav.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\
	<div class="topnav" id="myTopnav">\
		<div class="topbar">\
		<a class="home_link" href="index.html"><h1>Marj Cuerdo<p class="subtitle">Researcher & Project/Product Manager</p></h1></a>\
				<a href="javascript:void(0);" id="icon" onclick="myFunction()">\
	    			<i class="fa fa-bars"></i>\
	    		</a>\
	    </div>\
			<ul id="myLinks">\
				<li><a href="index.html">Home</a></li>\
        <li><a href="research-ux.html">UX Research</a></li>\
        <li><a href="research-acad.html">PhD Research</a></li>\
        <li><a href="design.html">Games+</a></li>\
				<li><a href="cv.html">Résumé</a><li>\
			</ul>\
    </div>');

window.addEventListener("resize", function(event) {
    //console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
    var x = document.getElementById("myLinks");
    if ((document.documentElement.clientWidth > 1002) && (x.classList.contains("hid"))) {
      x.style.display = "inline-block";
    } else if ((document.documentElement.clientWidth < 1002) && (x.classList.contains("hid"))) {
      x.style.display = "none";
    } 
})

function myFunction() {
  var y = document.getElementById("myLinks");
  if (y.style.display === "inline-block") {
    y.style.display = "none";
    y.classList.add("hid");
  } else {
    y.style.display = "inline-block";
    y.classList.remove("hid");
  }

}