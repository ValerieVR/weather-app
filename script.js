(() => {
    "use strict";


    let extraCityBttn = document.getElementById("extra-city-button");
    let extraCity = document.getElementById("outer-container-3");

    let searchCity1 = document.getElementById("search-input-1");
    let searchCity1Bttn = document.getElementById("search-button-1");

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

    let getWeatherCity1 = async (city1) => {
        try {
            let response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city1+"&units=metric&appid=2ef359fbac037127dbef3b700cdb7730");
            let weatherData = await response.json();

            let i = 1;
            for (let j = 0; j < weatherData.list.length; j += 8) {

                let day = document.getElementById("day-" + i);
                let date_str_day = new Date(weatherData.list[j].dt_txt);
                if (j === 0) {
                    let day_long = longDays[date_str_day.getDay()];
                    day.innerHTML = day_long;
                } else {
                    let day_short = shortDays[date_str_day.getDay()];
                    day.innerHTML = day_short;
                }

                let temp = document.getElementById("temp-" + i);
                let temperature = Math.round(weatherData.list[j].main.temp);
                temp.innerHTML = temperature;

                let image = document.getElementById("weather-icon-" + i);
                let code = weatherData.list[j].weather[0].id;

                if (code >= 200 && code < 300) {
                    image.src = "./images/thunderstorm.svg";
                } else if (code >= 300 && code < 500) {
                    image.src = "./images/drizzle.svg"
                } else if (code >= 500 && code < 600) {
                    image.src = "./images/rain.svg"
                } else if (code >= 600 && code <= 700) {
                    image.src = "./images/snow.svg"
                } else if (code > 700 && code < 800) {
                    image.src = "./images/foggy.svg"
                } else if (code == 800) {
                    let time = date_str_day.getHours();
                    if (time > 5) {
                        image.src = "./images/sun.svg";
                    } else {
                        image.src = "./images/moon.svg";
                    }
                } else {
                    image.src = "./images/clouds.svg";
                }
        
                i++;
            }

            let date_str_month = new Date(weatherData.list[0].dt_txt);
            
            let month = document.getElementById("month-short-1");
            let month_short = shortMonths[date_str_month.getMonth()];
            month.innerHTML = month_short;

            let dayDate = document.getElementById("date-day-1");
            let dayNum = date_str_month.getDate();
            dayDate.innerHTML = dayNum;

            let clim = document.getElementById("climate-1");
            let climate = weatherData.list[0].weather[0].description;
            clim.innerHTML = climate;

        } catch (error) {
            console.log(error);
            alert("Can't display weather, try again!")
        }
    }

    

 

   

    

    extraCityBttn.addEventListener("click", () => {
        changePlusMinus();
        add_remove_newCity();
    });

    searchCity1Bttn.addEventListener("click", (e) => {
        e.preventDefault();
        getWeatherCity1(searchCity1.value);
    })

    searchCity2Bttn.addEventListener("click", (e) => {
        e.preventDefault();
    });














})();