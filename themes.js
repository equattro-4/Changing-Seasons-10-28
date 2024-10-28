const textElement = document.getElementById("themeText");
const button = document.getElementById("changeThemeButton");
const themeImage = document.getElementById("themeImage");

button.addEventListener("click", function() {
    textElement.className = "";
    themeImage.style.display = "none";  //hide the image at first before button clicked

    // see wat month is selected and then put out the  theme and pic for it
    if (document.getElementById("september").checked) {
        textElement.classList.add("september-theme");
        themeImage.src = "https://media.thv11.com/assets/WTIC/images/c1adf01e-1db8-439b-bdc3-891934f4d383/c1adf01e-1db8-439b-bdc3-891934f4d383_750x422.jpg";  // Fall image
    } else if (document.getElementById("october").checked) {
        textElement.classList.add("october-theme");
        themeImage.src = "https://media.thv11.com/assets/WTIC/images/c1adf01e-1db8-439b-bdc3-891934f4d383/c1adf01e-1db8-439b-bdc3-891934f4d383_750x422.jpg";  // Fall 
    } else if (document.getElementById("november").checked) {
        textElement.classList.add("november-theme");
        themeImage.src = "https://media.thv11.com/assets/WTIC/images/c1adf01e-1db8-439b-bdc3-891934f4d383/c1adf01e-1db8-439b-bdc3-891934f4d383_750x422.jpg";  // Fall 
    } else if (document.getElementById("december").checked) {
        textElement.classList.add("december-theme");
        themeImage.src = "https://hips.hearstapps.com/hmg-prod/images/interior-christmas-magic-glowing-tree-fireplace-royalty-free-image-1628537941.jpg?crop=1xw:0.91898xh;center,top";  // Christmas 
    }

    // put out the image when month for it selected
    themeImage.style.display = "block";
    themeImage.style.opacity = "1";
});
