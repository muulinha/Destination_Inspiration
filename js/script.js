

var cityName = document.querySelector(".city-name");
var countryName = document.querySelector(".country-name");


var rapidAPI = "794142a626ce62e5a3897b2a34ca54fe";

function fetchWeather(city) {
    // fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&limit=99&units=metric&appid=" + this.APIKey)
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + "perth" + '&limit=99&appid=' + this.rapidAPI)
  
    // http://api.openweathermap.org/geo/1.0/direct?q=perth&limit=99&appid=794142a626ce62e5a3897b2a34ca54fe

    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      const city = data[0].name;
      const country = data[0].country;

      cityName.innerHTML = city;
      countryName.innerHTML = country;
      console.log(country);
})}



 
  fetchWeather();
// COUNTRY CODE OUTPUT




const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '576a507ee7msh03a8d40416350bbp1e0201jsnbd061cc4d364',
		'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
	}
};

fetch('https://countries-cities.p.rapidapi.com/location/country/GB', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    // CURRENCY CODE OUTPUT

    // https://countries-cities.p.rapidapi.com/location/country/GB/576a507ee7msh03a8d40416350bbp1e0201jsnbd061cc4d364