$(function () {
    $("#header-image").load("/header_image.html");
    $("#header-text").load("/header_text.html");
    $("#menu").load("/menu.html");
    let container = document.getElementById("main-container");
    container.style.height=window.innerHeight.toString();
});