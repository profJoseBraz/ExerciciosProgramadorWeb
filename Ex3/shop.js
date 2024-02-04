function nextButtonClick(){
    var fastOptionsContainer = document.querySelector(".caroussel");

    fastOptionsContainer.style.transition = "transform 0.5s ease";
    fastOptionsContainer.style.transform = "translateX(-20%)"; 
}

function prevButtonClick(){
    var fastOptionsContainer = document.querySelector(".caroussel");

    fastOptionsContainer.style.transition = "transform 0.5s ease";
    fastOptionsContainer.style.transform = "translateX(0px)";
}