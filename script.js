
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
video = document.getElementById("video1")
stop_vid = document.getElementById("p1")
play_vid = document.getElementById("p2")
function vidFunction() {
    if (video.paused) {
        video.play();
        play_vid.style.display = "none";
        stop_vid.style.display = "block";

    }
    else {
        video.pause();
        stop_vid.style.display = "none";
        play_vid.style.display = "block";
    }
}