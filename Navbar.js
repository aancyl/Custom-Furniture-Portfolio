function toggleMenu() {
    var overlay = document.getElementById("overlay");
    if (overlay.style.height === "100%") {
        overlay.style.height = "0%";
    } else {
        overlay.style.height = "100%";
    }
}