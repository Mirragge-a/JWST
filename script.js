const mediaDesctop = window.matchMedia('(min-width: 768px)')
const mediaMobile = window.matchMedia('(max-width: 720px)')


if (mediaDesctop.matches) {
  
    // navigation bar + button up
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

    // button scroll up
    function topFunction() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    //video pause/play
    video = document.getElementById("video1")

    function vidFunction() {
        if (video.paused) {
            video.play();

        }
        else {
            video.pause();
        }
    }


    //gallery js
    var modal = document.getElementById('myModal');               
    var modalImg = document.getElementById("modalct");
    var captionText = document.getElementById("caption");
    var gallery_div = document.getElementById('div_g');
    var gallery_h1 = document.getElementById('gallery_h1');
    var ImgArray = document.getElementsByClassName("myImg");

    document.addEventListener("click", function(e) {
        if (e.target.className=="myImg") {
            modal.style.display = "block";
            modalImg.src = e.target.src;
            captionText.innerHTML = e.target.alt;
            // captionText.appendChild(gallery_div);
            var div = document.createElement("div");
            div.setAttribute("class", "element");
            div.textContent = "Element";
            //console.log(ImgArray)
            captionText.insertAdjacentElement("beforeend", gallery_div);
            // Array1 = ImgArray.filter(item => item.id == e.targer.id);
            Array.from(ImgArray).forEach(element => {
                element.style.width = "150px";
            });
            document.body.style.overflow = "hidden";
            gallery_div.style.margin = "50px";
        }
    });

    var span = document.getElementsByClassName("modal")[0];

    span.onclick = function() { 
        modal.style.display = "none";
        gallery_h1.insertAdjacentElement("beforeend", gallery_div)
        Array.from(ImgArray).forEach(element => {
            element.style.width = "350px";
        });
        document.body.style.overflow = "visible";
        gallery_div.style.margin = "0px";

    }
}
if (mediaMobile.matches) {
    function mobile_click() {
        if (document.getElementById("nav").style.left != "100%") {
                document.getElementById("nav").style.left = "100%";
        } else {
                document.getElementById("nav").style.left = "0%";
            }
        }
    //video pause/play
    video = document.getElementById("video1")

    function vidFunction() {
        if (video.paused) {
            video.play();

        }
        else {
            video.pause();
        }
    }

    }