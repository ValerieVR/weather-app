(() => {
    "use strict";

    let extraCityBttn = document.getElementById("extra-city-button");
    let extraCity = document.getElementById("outer-container-3");

    let searchCity2 = document.getElementById("search-input-2");
    let searchCity2Bttn = document.getElementById("search-button-2");

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

    let getWeatherData_City2 = async (city2) => {
        try {
            let response = await fetch("https://api.weatherbit.io/v2.0/current?city="+city2+"&key=85f3c391448f45a4a7c0387acc9baedf");
            let weatherData = await response.json();
            displayWeather_City2(weatherData);
        } catch (error) {
            alert("Can't display weather. Something went wrong.")
        }
    }

    let displayWeather_City2 = (data) => {

    }

    

    extraCityBttn.addEventListener("click", () => {
        changePlusMinus();
        add_remove_newCity();
    });

    searchCity2Bttn.addEventListener("click", (e) => {
        e.preventDefault();
        getWeatherData_City2(searchCity2.value);
    });














})();