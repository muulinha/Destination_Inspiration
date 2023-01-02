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








   


    // CONVERT CURRENCY CODE TO VALUES

      var apiKey = "458a98f2a689492e06753a30";
    
    
      // get base to destination conversion
      var baseCurr = localStorage.getItem('currency');
      var destCurr = 'THB';              //NEED DEST CURRENCY FROM WEATHER > COUNTRIES API             //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      var currentCurr = document.querySelector(".conversionRate");
      var lastCurr = document.querySelector(".lastRate");
      var differenceCurr = document.querySelector(".oneMonthChange");
      var upDown = document.querySelector(".upDownChange");
      var nameCurr = document.querySelector(".currencyName");
      var nameCurrShort = document.querySelector(".currencyNameShort");
      var currSymbolID = document.querySelector(".currencySymbol");
      var currFlagUrl = document.querySelector(".currencyName");

      //nameCurr.innerHTML = "Currency Name Here";    // get from weather information
  
      // rate now
      function fetchCurrency() {
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/enriched/${baseCurr}/${destCurr}`)
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        const currentRate = data.conversion_rate;
        const lastUpdate = data.time_last_update_utc;
        const currNameFull = data.target_data.currency_name;
        const currNameShort = data.target_data.currency_name_short;
        const currSymbol = data.target_data.display_symbol;
        const currFlag = data.target_data.flag_url;      

          // country & currency information
          nameCurr.innerHTML = (currNameFull) ;
          document.querySelector(".currencyFlag").src = currFlag;
          nameCurrShort.innerHTML = ("(" + currNameShort + ")");
          
          //nameCurrShort.innerHTML = ("(" + currNameShort + " &#x" + currSymbol + ")") ;
          //nameCurrShort.innerHTML = ("(" + currNameShort +  + ")");
          var splitCurrSymbol = currSymbol.split(",");
          console.log(splitCurrSymbol);

          for (var i = 0; i < splitCurrSymbol.length; i++) { 
            //currText += ("&#x" + splitCurrSymbol[i] + ";");
            var nameCurrShort12 = ("&#x" + splitCurrSymbol[i] + ";");
            console.log(nameCurrShort12);
            }

      


          // rate now - html text
          currentCurr.innerHTML = ("Current Exchange Rate: " +baseCurr + " 1 = " + destCurr + " " + (currentRate).toFixed(4));
          currentCurr = ("Current Exchange Rate: " +baseCurr + " 1 = " + destCurr + " " + (currentRate).toFixed(4));
          

        // set previous month date
        var newDate = dayjs(lastUpdate);
        var newDay = newDate.$D;
        var newMonth = newDate.$M;
        var newYear = newDate.$y;
          
          // if month is January then previous month to December and year to previous year
          if(newMonth === 0) {
            newMonth = 12;
            newYear = newDate.$y-1;
          }
          else {
            newMonth = newMonth+1;
          }
            
          var prevMonthDate = dayjs(`${newMonth}-${newDay}-${newYear}`, "MM-DD-YYYY")
          console.log(prevMonthDate);
        
        // fetch previous months exchange rate
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/history/${baseCurr}/${newYear}/${newMonth}/${newDay}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
          //get destination currency
          var histRate = data.conversion_rates[destCurr];
          console.log(histRate);
          console.log(typeof(histRate));
          
          // historic rate - html text  
          lastCurr = ("Last Month Rate: " + baseCurr + " 1 = " + destCurr + " " + (histRate).toFixed(4));

          // rate difference - html text
          var diff = ((currentRate - histRate)/histRate).toFixed(4) + "%";
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

    // YOUTUBE VIDEO 
    var videoSearch = document.getElementById("video-search");
    var youTubeKey ="AIzaSyBSdv8yJFcPRx4-NrqPkTNNlIWHp4tZFjQ";

    function youTubeAPI(){
      var request=
      "https://youtube.googleapis.com/youtube/v3/search?key=" +
      youTubeKey +
      "&type=video&part=snippet&maxResults=1" +
      "&q=" +
      "10 best things to do" + "rome" //hardcode until we get the user destination
      
      //searchInput.value; user destination
      console.log(request)
  
      fetch(request)   
      .then(function(respose) {
              return respose.json();  
          })
      .then(function(data){
              
          let video =data.items[0].id.videoId;
          console.log(data);
              
          //show youTube video in html:
          videoSearch.innerHTML +=`<iframe width="420" height="315" src="https://www.youtube.com/embed/${video}"></iframe>`
          })
     
      }

    // END YOUTUBE VIDEO 

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
    fetchCurrency();
    youTubeAPI();

    // ADD ADDITIONAL TRIGGER FUNCTIONS ON SEARCH HERE                     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    };

// END INIT

init();