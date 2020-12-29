(() => {
    "use strict";

    let extraCityBttn = document.getElementById("extra-city-button");
    let extraCity = document.getElementById("outer-container-3");

    let changePlusMinus = () => {
        if (extraCityBttn.innerHTML === "+") {
            extraCityBttn.classList.add("minus-js");
        } else {
            extraCityBttn.classList.remove("minus-js");
        }
    }

    let add_remove_newCity = () => {
        if (extraCityBttn.innerHTML === "+") {
            extraCityBttn.innerHTML = "-";
            extraCity.classList.remove("hide-card-js");
        } else {       
            extraCityBttn.innerHTML = "+";
            extraCity.classList.add("hide-card-js");
        }
    }

    extraCityBttn.addEventListener("click", () => {
        changePlusMinus();
        add_remove_newCity();
    });












})();