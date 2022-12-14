// Global variables.
let toggleMenuStatus = false;
const getBodyElement = document.body;
const getToggleMenu = document.getElementById("toggle-menu");
const getBtnColors = document.querySelectorAll("#toggle-menu ul li");
const getBtnToggleMenu = document.getElementById("btn-toggle-menu");
const getTextColorName = document.querySelector("#container h1");

// Dropdown mouseover menu.
const menuDown = function() {
    getToggleMenu.style.top = "60px";
    toggleMenuStatus = true;
    getToggleMenu.addEventListener("mouseleave", function(){
        getToggleMenu.style.top = "-116px";
        toggleMenuStatus = false;
    });
};

// Changing color and text
const colorChange = function(colorCode, id, colorName) {
    getBodyElement.style.backgroundColor = colorCode;
    document.getElementById(id).checked = true;
    getTextColorName.innerHTML = colorName;
}

// Change background color with radio & buttons.
const buttonPress = function(e) {
    const clickTarget = e.target;
    const getRadioButtons = document.querySelectorAll("#toggle-menu ul li input");

    switch (clickTarget) {
        case getBtnColors[0]: case getRadioButtons[0]:
            colorChange("#808080", "grey", "Grey");
            break;
        case getBtnColors[1]: case getRadioButtons[1]:
            colorChange("#6495ed", "blue", "Blue");
            break;
        case getBtnColors[2]: case getRadioButtons[2]:
            colorChange("#6b8e23", "green", "Green");
            break;
        case getBtnColors[3]: case getRadioButtons[3]:
            colorChange("#800000", "red", "Red");
            break;
        case getBtnColors[4]: case getRadioButtons[4]:
            colorChange("#f0e68c", "yellow", "Yellow");
    }
    getToggleMenu.style.top = "-112px";
    toggleMenuStatus = false;
};

// Change background color with keys.
const numberPress = function(e) {
    switch (e.key) {
        case "1":
            colorChange("#808080", "grey", "Grey");
            break;
        case "2":
            colorChange("#6495ed", "blue", "Blue");
            break;
        case "3":
            colorChange("#6b8e23", "green", "Green");
            break;
        case "4":
            colorChange("#800000", "red", "Red");
            break;
        case "5":
            colorChange("#f0e68c", "yellow", "Yellow");
    }
};

//Event listeners.
document.getElementById("grey").checked = true;

getBtnToggleMenu.addEventListener("mouseover", menuDown);

getBtnColors.forEach(function(btn) {
    btn.addEventListener("click", buttonPress);
});

getBodyElement.addEventListener("keypress", numberPress);