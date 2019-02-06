document.write('\<link rel="stylesheet" href="css/nav.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\
	<div class="topnav" id="myTopnav">\
		<h1>Marjorie Ann Cuerdo</h1>\
				<a href="javascript:void(0);" id="icon" onclick="myFunction()">\
	    			<i class="fa fa-bars"></i>\
	    		</a>\
			<div id="myLinks">\
				<a href="index.html">HOME</a>\
				<a href="projects.html">PROJECTS</a>\
				<a href="resume.html">RESUME</a>\
				<a href="blog.html">BLOG</a>\
			</div>\
    </div>\
		<section id="about" name="about">\
			<div class="about">\
				<div class="container">\
					<div class="row">\
							<div class="col-lg-6">\
								<p><img src="images/cuerdo.jpg" alt="Picture of Marjorie" height="75%" width="75%" ></p>\
								<p>M.S Human-Computer Interaction<br>DePaul University</p>\
							</div>\
							<div class="col-lg-6">\
								<p>Email: <a href="mailto:mcuerdo@mail.depaul.edu">mcuerdo@mail.depaul.edu</a><br></p>\
							</div>\
							<div id="links">\
								<a href="https://www.linkedin.com/in/marjorie-ann-cuerdo-12979277/" target="_blank"><img src="images/linkedin.png" ></a>\
								<a href="https://twitter.com/marj_cuerdo" target="_blank"><img src="images/twitter.png"></a>\
								<a href="https://github.com/marjcuerdo" target="_blank"><img src="images/github.svg"></a>\
							</div>\
						</div>\
					</div>\
				</div>\
				<a class="twitter-timeline" href="https://twitter.com/marj_cuerdo?ref_src=twsrc%5Etfw">Tweets by marj_cuerdo</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\
			</div>\
		</section>');



function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  } else {
    x.style.display = "inline-block";
  }

}