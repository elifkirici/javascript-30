const cityDom = document.querySelector(".city");
const tempDom = document.querySelector(".temp");
const descDom = document.querySelector(".desc");
const minmaxDom = document.querySelector(".minmax");
const url = "https://api.openweathermap.org/data/2.5/";
const key = "56e2ce44e0657a477022304efda632a6";

let cityWeather = [];
const SetQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(SearchBarDom.value);
  }
};
const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&lon=${cityName}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
    .then((Response) => {
      return Response.json();
    })
    .then(ResponseJson);
};
const ResponseJson = (result) => {
  cityDom.innerText = `${result.name}`;
  tempDom.innerText = `${Math.round(result.main.temp)}°C`;
  minmaxDom.innerText = `${Math.floor(result.main.temp_min)}°C / ${Math.ceil(
    result.main.temp_max
  )}°C`;
  descDom.innerText = `${result.weather[0].description}`;
};
const SearchBarDom = document.getElementById("searchBar");
SearchBarDom.addEventListener("keypress", SetQuery);
