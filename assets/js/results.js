// HOME AND SETTINGS BUTTON

    var hmOptionDisp = document.querySelector("#homeBtnDisp");
    var seOptionDisp = document.querySelector("#settingsBtnDisp");

    // on click go to home page
    hmOptionDisp.addEventListener("click", function(event) {
    window.location.replace("./index.html");
    }); 

    // on click go to settings page
    seOptionDisp.addEventListener("click", function(event) {
    window.location.replace("./settings.html");
    }); 

// END HOME AND SETTINGS BUTTON
          

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


    // COUNTRIES LIST

      fetch('https://countries-cities.p.rapidapi.com/location/country/list', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
 
        // get list of names in dropdown


    // END COUNTRIES LIST








    // HISTORY

      // get previous searches and create dropdown
      $(function () {
        var dropdownHistory = JSON.parse(localStorage.getItem('searchHistory'));
        $('#search-text').autocomplete({
          source: dropdownHistory,
          minLength: 0,
        });
      }); 

    // END HISTORY ..................................................


    // CONVERT CURRENCY CODE TO VALUES

      var apiKey = "458a98f2a689492e06753a30";
    
    
      // get base to destination conversion
      var baseCurr = localStorage.getItem('currency');
      var destCurr = "GBP";
      var nameCurr = document.querySelector(".currencyName");        // get name from weather country information
      var currentCurr = document.querySelector(".conversionRate");
      var lastCurr = document.querySelector(".lastRate");
      var differenceCurr = document.querySelector(".oneMonthChange");
      var upDown = document.querySelector(".upDownChange");

      //nameCurr.innerHTML = "Currency Name Here";    // get from weather information
  
      // rate now
      function fetchCurrency() {
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurr}/${destCurr}`)
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        const currentRate = data.conversion_rate;
        const lastUpdate = data.time_last_update_utc;
        
          // rate now - html text
          currentCurr.innerHTML = ("Current Exchange Rate: " +baseCurr + " 1 = " + destCurr + " " + (currentRate).toFixed(4));
          currentCurr = ("Current Exchange Rate: " +baseCurr + " 1 = " + destCurr + " " + (currentRate).toFixed(4));

        // set previous month date
        var newDate = dayjs(lastUpdate);
        var newDay = newDate.$D;
        var newMonth = newDate.$M;
        var newYear = newDate.$y;
          
          // if month is January then previous month to December and year to previous year
          if(newMonth === 1) {
            newMonth = 12;
          }
          else {
            newMonth = newMonth;
          }

          if(newMonth === 1) {
            newYear = newDate.$y-1;
          }
            
          var prevMonthDate = dayjs(`${newMonth}-${newDay}-${newYear}`, "MM-DD-YYYY")
          console.log(prevMonthDate);
        
        // fetch previous months exchange rate
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/history/${baseCurr}/${newYear}/${newMonth}/${newDay}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
          //const histRate = `data.conversion_rates.${destCurr}`    // WHY IS THIS NOT WORKING, ARG!!
          const histRate = data.conversion_rates.GBP ;            // dest currency should be here, why is it not working!!!!!!!!!!!!!!!!!!!
          console.log(histRate);
          console.log(typeof(histRate));
          
          // historic rate - html text  
          lastCurr = ("Last Month Rate: " + baseCurr + " 1 = " + destCurr + " " + (histRate).toFixed(4));

          // rate difference - html text
          var diff = ((currentRate - histRate)*100).toFixed(2) + "%";
          differenceCurr.innerHTML = "One Month Change: " + diff;

          if (currentRate === histRate) {
            document.getElementById("currIndicator").src = "./assets/images/curr-steady.png";
          }
          if (currentRate > histRate) {
            document.getElementById("currIndicator").src = "./assets/images/curr-up.png";
          } else
          {
            document.getElementById("currIndicator").src = "./assets/images/curr-down.png";
          };

          // tooltip
          
          var monthlyChange = (lastCurr);    //("this month: " + currentCurr + "\n" + "last month: " + lastCurr);
          
          document.getElementById("myTooltip").title = monthlyChange;

          })

      })}

    // END CONVERT CURRENCY CODE TO VALUES .................................................. 


    // INIT

  function init() {

    // set default temp to celsius
    if(localStorage.getItem('temp') == null) {
    localStorage.setItem('temp', 'celsius')
    }
    // set default currency to AUD
    if(localStorage.getItem('currency') == null) {
    localStorage.setItem('currency', 'AUD')
    }
    // does array aleady exist
    if(localStorage.getItem('selectedCity') == null) {
    localStorage.setItem('selectedCity', 'Perth,AU')
    }    
    fetchCurrency()
    // ADD ADDITIONAL TRIGGER FUNCTIONS ON SEARCH HERE                     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    };

// END INIT

init();