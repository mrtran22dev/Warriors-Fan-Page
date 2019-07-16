function openSide() {
    var sidebar = document.getElementById("sidebar");
    var background = document.getElementById("wrapper");
    background.classList.add("background-hide");
    sidebar.classList.toggle("show");
}

function closeSide() {
    var sidebar = document.getElementById("sidebar");
    var background = document.getElementById("wrapper");
    sidebar.classList.toggle("show");
    background.classList.remove("background-hide");

}