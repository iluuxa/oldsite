$(function (){
    let headerImage = document.getElementById("header-image");
    let logo = document.createElement("img");
    logo.className="header-image-logo";
    logo.src="/poems/book-5-128x128.png";
    let headerImageText = document.createElement("div");
    headerImageText.className="header-image-text";
    headerImageText.textContent="Сборник стихотворений";
    headerImage.className="header-image";
    headerImage.append(logo,headerImageText);

    let headerText = document.getElementById("header-text");
    let headerTextDiv = document.createElement("div");
    headerTextDiv.className="header-text";
    headerTextDiv.id="header-text-content";
    headerText.append(headerTextDiv);

});