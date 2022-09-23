$(function () {
        var title = document.getElementById("prepare-script").getAttribute("data-title");
        console.log(typeof title);
        if (typeof title != "string") {
            title = "Стихотворение";
        }
        $("#header-image").load("/header_image.html");
        $("#header-text").load("/header_text.html", function () {
            document.getElementById("upper-text").textContent = title;
        });
        $("#menu").load("/menu.html");
        let container = document.getElementById("main-container");
        container.style.height = window.innerHeight.toString()+"px";
    }
);