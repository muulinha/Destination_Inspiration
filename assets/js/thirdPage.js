var select = document.getElementById("selectCurrencyDefault");
var showDefaultCurrency = document.querySelector('.showDefaultCurrency');
var saveBtn = document.querySelector(".saveBtn");

var currencySelection = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"];

for (var i = 0; i < currencySelection.length; i++) {
  var opt = currencySelection[i];
  var el = document.createElement("a");
  el.setAttribute("class", "dropdown-item");
  el.setAttribute('id', 'currencyOptions')
  el.textContent = opt;
  select.appendChild(el);
}
// on change update default currency
            
var selector = document.querySelectorAll("#currencyOptions"); 

Array.from(selector).forEach((element) => {
    element.addEventListener('click', (event) => {
      localStorage.setItem('currency',`${event.target.innerText}`);
      var appendCurrency = `${event.target.innerText}`;
      var showCurrencyEl = document.createElement('p');
      setTimeout (function () {
      showCurrencyEl.innerHTML = "You have selected " + appendCurrency + " as your default currency!";
      showDefaultCurrency.appendChild(showCurrencyEl);
      }, 100);
      setTimeout (function () {
      showDefaultCurrency.removeChild(showCurrencyEl);
      }, 1100);
    });
  });

var tempForm = document.getElementById("tempDefault");

        // when client clicked on select element 
        tempForm.addEventListener("click", () => {
        // if default value is changed
        tempForm.addEventListener("change", () => {
            // if value switched by client
                localStorage.setItem("temp",tempForm.elements["temp"].value);
            });
        });
        

        // delete search history data only

        var delForm = document.querySelector("#delSearchHistory");

        delForm.addEventListener("click", function(event) {
            localStorage.removeItem('searchHistory');
            localStorage.removeItem('lastSearch');
        });     

        // HISTORY
        
        var country;
        var currency;
        var flag;
        var lat = localStorage.getItem("selectedLat");
        var lon = localStorage.getItem("selectedLon");
        var lat = localStorage.getItem("selectedLat");
        var lon = localStorage.getItem("selectedLon");
     

// Weather INFORMATION ________________
        var iconPicture = document.querySelector(".icon"); 
        var temperature = document.querySelector("#temperature");
        var feelsLike = document.querySelector("#feels-like");
        var tempMin = document.querySelector("#temp-min");
        var tempMax = document.querySelector("#temp-max");
        var humid = document.querySelector("#humidity");
        var windSpeed = document.querySelector("#wind-speed");
        var weatherDescription = document.querySelector("#weather-description");
        var APIKeyWeather = "794142a626ce62e5a3897b2a34ca54fe";

        var weatherDeg = "";
        var tempType = "";
        var weatherDeg = "";
        var tempType = "";

        if (localStorage.getItem("temp") === "celsius") {
          weatherDeg = "°C"
          tempType = "metric"
          speedType = "m/s"
        } else {
          weatherDeg = "°F"
          tempType = "imperial"
          speedType = "mph"
        }
        
        
        function fetchWeather() {
        
          fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&units=" + tempType + "&lon=" + lon + "&appid=" + this.APIKeyWeather)

        
          fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&units=" + tempType + "&lon=" + lon + "&appid=" + this.APIKeyWeather)

          .then((response) => response.json())
          .then((data) => this.displayWeather(data));

          
          

          
          
        }
        
        function displayWeather (data) {
          const {icon,description} = data.weather[0];
          const {temp,feels_like,temp_min,temp_max,humidity} = data.main;
          const {lon,lat} = data.coord;
          const {speed} = data.wind;
          
          
        
          iconPicture.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
          temperature.textContent = (Math.round(temp) + weatherDeg);
          weatherDescription.textContent = description
          feelsLike.textContent = "Feels Like: " + (Math.round(feels_like) + weatherDeg);
          tempMin.textContent = "Temp Min: " +  (Math.round(temp_min) + weatherDeg);
          tempMax.textContent = "Temp Max: " +  (Math.round(temp_max) + weatherDeg);
          humid.textContent = "Humidity: " +  humidity + "%";
          windSpeed.textContent = "Wind Speed: " +  speed + " " + speedType;


          console.log(temp,icon,description,lon,lat);


          console.log(temp,icon,description,lon,lat);
        };
        
        function flag() {
            id7.src = "https://www.worldometers.info/img/flags/as-flag.gif";
        }



// Weather INFORMATION ________________






        // get stored information
        function init() {
          

          
          var storedTemp = localStorage.getItem('temp');
          var storedCurrency = localStorage.getItem('currency');
    
            radiobtnC = document.getElementById("tempC");
            radiobtnF = document.getElementById("tempF");
    
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
    
            if (storedTemp === 'celsius') {
            radiobtnC.checked = true;
            //radiobtnF.checked = false;
            } else {
            //radiobtnC.checked = false;
            radiobtnF.checked = true;
            } 
            

            // youTubeAPI(); 
            // paused the call temporarily to avoid running out of daily quotes


            fetchWeather();
            chosenCity()
            fetchCurrency();

            };
           
          
            // delete search history data only
    
            var delForm = document.querySelector("#delSearchHistory");
    
            delForm.addEventListener("click", function(event) {
                localStorage.removeItem('searchHistory');
                localStorage.removeItem('lastSearch');
            });     
    
        // END HISTORY ..................................................
    
              
              

            // CONVERT CURRENCY CODE TO VALUES

      var apiKey = "458a98f2a689492e06753a30";
    
    
      // get base to destination conversion
      var baseCurr = localStorage.getItem('currency');
      var destCountry = localStorage.getItem('selectedCountry')
      var destCurr = localStorage.getItem('destCurrency');  
      var currentCurr = document.querySelector(".conversionRate");
      var lastConversionRate = document.querySelector(".lastConversionRate");
      var lastCurr = document.querySelector(".lastRate");

      var differenceCurr = document.querySelector(".oneMonthChange");
      var upDown = document.querySelector(".upDownChange");
      var nameCurr = document.querySelector(".currencyName");
      var nameCurrShort = document.querySelector(".currencyNameShort");
      var currSymbolID = document.querySelector(".currencySymbol");
      var currFlagUrl = document.querySelector(".currencyName");
      var cityStateCountry = document.querySelector(".chosenCity");
         
      var city = localStorage.getItem("selectedCity")
      var state = localStorage.getItem("selectedState");
      var country = localStorage.getItem("selectedCountry")

      var userCitySelected = ""



      // chosen city
      
      function chosenCity() {      
      
      if (state === "undefined") {
        userCitySelected = (localStorage.getItem("selectedCity") + ", " + localStorage.getItem("destCountryName"))
        console.log(userCitySelected);
      } else {
        userCitySelected = (localStorage.getItem("selectedCity") + ", " + state + ", " + localStorage.getItem("destCountryName"))
        console.log(userCitySelected);
      }  
      
 
      
         cityStateCountry.innerHTML = (" " + userCitySelected);        
      //location.reload()
      
    };
    
    
    // rate now

      function fetchCurrency() {

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '576a507ee7msh03a8d40416350bbp1e0201jsnbd061cc4d364',
            'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
          }
        };
      
          //COUNTRY NAME
        
          fetch('https://countries-cities.p.rapidapi.com/location/country/list', options)
          .then(response => response.json())
          .then(response => {
            localStorage.setItem('destCountryName', response.countries[destCountry]);
          });
          // END COUNTRY NAME



        fetch(`https://countries-cities.p.rapidapi.com/location/country/${destCountry}`, options)
        .then(response => response.json())
        .then(response => { 
          //console.log(response.currency.code)
          localStorage.setItem('destCurrency', response.currency.code);
        
        });
          //https://countries-cities.p.rapidapi.com/location/country/${destCountry}/576a507ee7msh03a8d40416350bbp1e0201jsnbd061cc4d364
        
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/enriched/${baseCurr}/${destCurr}`)
        .then((res) => res.json())
        .then((data) => {
        //console.log(data);
        const currentRate = data.conversion_rate;
        const lastUpdate = data.time_last_update_utc;
        const currNameFull = data.target_data.currency_name;
        const currNameShort = data.target_data.currency_name_short;
        const currSymbol = data.target_data.display_symbol;
        const currSymbolLenght = data.target_data.display_symbol.length
        const currFlag = data.target_data.flag_url;      

          // country & currency information
          nameCurr.innerHTML = (currNameFull) ;
          document.querySelector(".currencyFlag").src = currFlag;
                    
                    
          var splitCurrSymbol = currSymbol.split(",");
          // console.log(splitCurrSymbol);

          if (currSymbolLenght === 0) {
            nameCurrShort.innerHTML = ("(" + currNameShort + ")") ;
          } else if (currSymbolLenght === 4) {
            nameCurrShort.innerHTML = ("(" + currNameShort + " - &#x" + data.target_data.display_symbol + ")") ;
          } else if (currSymbolLenght === 9) {

           for (var i = 0; i < splitCurrSymbol.length; i++) { 
           var currText1 = ("&#x" + splitCurrSymbol[0] + ";");
           var currText2 = ("&#x" + splitCurrSymbol[1] + ";");
           var str = currText1.concat(currText2);
           console.log(str)  
             }
          nameCurrShort.innerHTML = ("(" + currNameShort + " - " + str + ")") ;
        } else {
          for (var i = 0; i < splitCurrSymbol.length; i++) { 
            var currText1 = ("&#x" + splitCurrSymbol[0] + ";");
            var currText2 = ("&#x" + splitCurrSymbol[1] + ";");
            var currText3 = ("&#x" + splitCurrSymbol[2] + ";");
            var str = currText1.concat(currText2,currText3);
            console.log(str)  
              }
           nameCurrShort.innerHTML = ("(" + currNameShort + " - " + str + ")") ;
        }

          // rate now - html text
          currentCurr.innerHTML = ("Current Exchange Rate: " + baseCurr + " 1 = " + destCurr + " " + (currentRate).toFixed(4));
          currentCurr = ("Current Exchange Rate: " + baseCurr + " 1 = " + destCurr + " " + (currentRate).toFixed(4));
          

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


        
        // fetch previous months exchange rate
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/history/${baseCurr}/${newYear}/${newMonth}/${newDay}`)
        .then((res) => res.json())
        .then((data) => {
          
          //get destination currency
          var histRate = data.conversion_rates[destCurr];
          
          // historic rate - html text  
          lastCurr = ("Last Month Rate: " + baseCurr + " 1 = " + destCurr + " " + (histRate).toFixed(4));
          lastConversionRate.innerHTML = ("Last Month Rate: " + baseCurr + " 1 = " + destCurr + " " + (histRate).toFixed(4));
          console.log(lastCurr)
          
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
var videoTitle1 = document.getElementById("video-title1");
var videoSearch1 = document.getElementById("video-search1");
var videoTitle2 = document.getElementById("video-title2");
var videoSearch2 = document.getElementById("video-search2");
var youTubeKey ="AIzaSyBSdv8yJFcPRx4-NrqPkTNNlIWHp4tZFjQ";
// var youTubeKey ="AIzaSyCy8X1DV3uhVVhtCDYHDppA67-StdHfdVw";
var youTubeSearchTerm = city + " " + country;
var maxResults = 2;
console.log(youTubeSearchTerm);


function youTubeAPI(){
  var request=
  "https://youtube.googleapis.com/youtube/v3/search?key=" +
  youTubeKey +
  "&type=video&part=snippet&maxResults=" +
  maxResults +
  "&q=" +
  "10 best things to do in " + youTubeSearchTerm;
  
  console.log(request)

  fetch(request)   
  .then(function(respose) {
          return respose.json();  
      })
  .then(function(data){
          
      let video1 =data.items[0].id.videoId;
      let video2 =data.items[1].id.videoId;
      console.log(data);
          
      // show youTube video and video title in html:
      // videoTitle1.innerHTML += data.items[0].snippet.title
      videoSearch1.innerHTML +=`<iframe width="420" height="315" src="https://www.youtube.com/embed/${video1}"></iframe>`
      // videoTitle2.innerHTML += data.items[1].snippet.title
      videoSearch2.innerHTML +=`<iframe width="420" height="315" src="https://www.youtube.com/embed/${video2}"></iframe>`
      }
      )
 };

      
    // END YOUTUBE VIDEO 

    window.onload = function() {
      if(!window.location.hash) {
          window.location = window.location + '#loaded';
          window.location.reload();
      }
  } 

    init();
    
