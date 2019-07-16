
function topScroll() {                                                    // Event listener to detect scroll event >/< vertical breakpoint
    var banner = document.getElementById("banner");                       // function loaded with window.onload
    var navbar = document.getElementsByClassName("menu one");
    var box = document.getElementById("box-menu");
    var breakpoint = banner.clientHeight + navbar[0].clientHeight;

    window.addEventListener("scroll", function () {
        var height = document.body.parentNode.scrollTop;
        var height2 = document.body.scrollTop;							// this line needed for Microsoft Edge browser
        if (height > breakpoint || height2 > breakpoint) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
