document.addEventListener("DOMContentLoaded", function () {
    console.log("Страница загружена");
    
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "yellow";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "white";
        });
    });
    
    const overlayText = document.querySelector(".overlay h1");
    overlayText.style.opacity = 0;
    setTimeout(() => {
        overlayText.style.transition = "opacity 2s";
        overlayText.style.opacity = 1;
    }, 500);
});
