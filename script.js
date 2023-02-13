
//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0px";
    document.getElementById("bup").style.opacity = ".99";
    document.getElementById("up").style.cursor = "pointer";
} else {
    document.getElementById("bup").style.opacity = ".0";
    document.getElementById("nav").style.top = "-80px";
    document.getElementById("up").style.cursor = "default";
}
}

//
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

function topFunction() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

var vid = document.getElementById("video1");
vid.onmouseover = function(){
vid.play();
}
vid.onmouseup = function(){
vid.stop();
}