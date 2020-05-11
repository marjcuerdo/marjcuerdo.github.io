window.addEventListener("resize", function(event) {
    console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
    var x = document.getElementById("myLinks");
    if (document.body.clientWidth > 500) {
    	x.style.display = "inline-block";
    }
})