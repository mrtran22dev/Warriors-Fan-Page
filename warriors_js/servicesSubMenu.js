function services() {                                               // show SERVICES drop-down menu for Main/Side menus
    var m = document.getElementsByClassName("drop-content");
    m[0].classList.toggle("show");
}

function servicesSide() {
    var m = document.getElementsByClassName("side-content");
    m[0].classList.toggle("show");
}