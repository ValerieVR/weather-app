(() => {
    "use strict";


    let extraCityBttn = document.getElementById("extra-city-button");
    let extraCity = document.getElementById("outer-container-3");

    let searchCity2 = document.getElementById("search-input-2");
    let searchCity2Bttn = document.getElementById("search-button-2");

    let searchCity1 = document.getElementById("search-input-1");
    let searchCity1Bttn = document.getElementById("search-button-1");


    let longDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    let shortDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    let shortMonths = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    

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

    searchCity1Bttn.addEventListener("click", (e) => {
        e.preventDefault();
    })

    searchCity2Bttn.addEventListener("click", (e) => {
        e.preventDefault();
    });














})();