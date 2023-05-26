const API_KEY ="689689d8cb4ba1ed8f9d7c3bdd87a186"
const makeIconURL = (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`
const getFormattedweatherData =async(city, units = 'metric')=>{

    const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
        .then((res) => res.json())
        .then((data) =>data);
    const {weather, main:{temp, temp_min ,temp_max ,  feels_like, pressure , humidity },
    wind:{speed},
    sys: {country},
    name,
} =data;
const{ description ,icon } = weather[0];

return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    temp_min,
    temp_max,
    feels_like,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};
export{getFormattedweatherData };