
//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0px";
    document.getElementById("bup").style.opacity = ".99";
} else {
    document.getElementById("bup").style.opacity = ".0";
    document.getElementById("nav").style.top = "-80px";
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