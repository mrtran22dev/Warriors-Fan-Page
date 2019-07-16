var pic = document.getElementsByClassName("image");
var dot = document.getElementsByClassName("dot");

function autoNext() {                                   // AUTO slide gallery every 3 seconds
    next(1);
}
setInterval(autoNext, 3000);

function prev(n) {                                      // PREV arrow for slide gallery
    j = j + n;
    if (j < 0) {
        j = pic.length - 1;
    }

    for (i = 0; i < pic.length; i++) {                    // pic.length same as dot.length
        pic[i].classList.remove("show");
        dot[i].classList.remove("active-dot");
    }

    pic[j].classList.add("show");
    dot[j].className += " active-dot";
}

function next(n) {                                         // NEXT arrow for slide gallery
    j = j + n;
    if (j > pic.length - 1) {
        j = 0;
    }

    for (i = 0; i < pic.length; i++) {                    // pic.length same as dot.length
        pic[i].classList.remove("show");
        dot[i].classList.remove("active-dot");
    }
    pic[j].classList.add("show");
    dot[j].className += " active-dot";
}

function slide(n) {                                         // slide gallery using dot selection
    var pic = document.getElementsByClassName("image");
    var dot = document.getElementsByClassName("dot");
    var i;

    for (i = 0; i < pic.length; i++) {                    // pic.length same as dot.length
        pic[i].classList.remove("show");
        dot[i].classList.remove("active-dot");
    }

    pic[n].classList.add("show");
    dot[n].className += " active-dot";
    j = n;
}