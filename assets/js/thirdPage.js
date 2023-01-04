var select = document.getElementById("selectCurrencyDefault");
var defaultValuesEl = document.querySelector('.defaultValues');


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
      var defaultCurrencyEl = document.createElement('h4');
      
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

        // 
        // 
        // 
        
        var country;
        var currency;
        var flag;
     

// Weather INFORMATION ________________
        var iconPicture = document.querySelector(".icon"); 
        var temperature = document.querySelector("#temperature");
        var weatherDescription = document.querySelector("#weather-description");
        var APIKeyWeather = "794142a626ce62e5a3897b2a34ca54fe";
        
        
        function fetchWeather() {
          fetch("http://api.openweathermap.org/data/2.5/weather?q=" + "porto" + "&limit=99&units=metric&appid=" + this.APIKeyWeather)
        //   http://api.openweathermap.org/data/2.5/weather?q=perth&limit=99&units=metric&appid=794142a626ce62e5a3897b2a34ca54fe
        
          .then((response) => response.json())
          .then((data) => this.displayWeather(data));
        }
        
        function displayWeather (data) {
          const {icon,description} = data.weather[0];
          const {temp} = data.main;

          iconPicture.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
          temperature.textContent = Math.round(temp) + " °C";
          weatherDescription.textContent = description
        };
        
        function flag() {
            id7.src = "https://www.worldometers.info/img/flags/as-flag.gif";
        }

        fetchWeather();
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
    
            console.log(storedTemp);
    
            if (storedTemp === 'celsius') {
            radiobtnC.checked = true;
            //radiobtnF.checked = false;
            } else {
            //radiobtnC.checked = false;
            radiobtnF.checked = true;
            }   
    
      
            console.log(storedTemp);
            console.log(storedCurrency);

            fetchCurrency();
            youTubeAPI();
            

            };
           
          
            // delete search history data only
    
            var delForm = document.querySelector("#delSearchHistory");
    
            delForm.addEventListener("click", function(event) {
                localStorage.removeItem('searchHistory');
                localStorage.removeItem('lastSearch');
            });     
    
        // END HISTORY ..................................................
    
        

        // Display defalut values on the page for a user
        // var savedTemp = localStorage.getItem('temp');
        // console.log(savedTemp)
        // var savedCurrency = localStorage.getItem('currency');
        // console.log(savedCurrency)
        // var defaultValues = document.createElement('p');
        // defaultValues.appendChild(savedTemp);
        // defaultValues.appendChild(savedCurrency);
        // defaultValuesEl.appendChild(defaultValues)

            // CONVERT CURRENCY CODE TO VALUES

      var apiKey = "458a98f2a689492e06753a30";
    
    
      // get base to destination conversion
      var baseCurr = localStorage.getItem('currency');
      var destCountry = localStorage.getItem('selectedCountry')
      var destCurr = localStorage.getItem('destCurrency');  
      var currentCurr = document.querySelector(".conversionRate");
      var lastCurr = document.querySelector(".lastRate");
      var differenceCurr = document.querySelector(".oneMonthChange");
      var upDown = document.querySelector(".upDownChange");
      var nameCurr = document.querySelector(".currencyName");
      var nameCurrShort = document.querySelector(".currencyNameShort");
      var currSymbolID = document.querySelector(".currencySymbol");
      var currFlagUrl = document.querySelector(".currencyName");
      var cityStateCountry = document.querySelector(".chosenCity")
      var userCitySelected = (localStorage.getItem("selectedCity") + ", " + localStorage.getItem("selectedState") + ", " + localStorage.getItem("destCountryName"))



      // chosen city
      cityStateCountry.innerHTML = (" " + userCitySelected);
        
      // rate now
      
    
      function fetchCurrency() {

        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '576a507ee7msh03a8d40416350bbp1e0201jsnbd061cc4d364',
            'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
          }
        };
      
        // //COUNTRY NAME
          
        // fetch('https://countries-cities.p.rapidapi.com/location/country/list', options)
        // .then(response => response.json())
        // .then(response => {
        //   localStorage.setItem('destCountryName', response.countries[destCountry]);
        // });

        // // END COUNTRY NAME



        fetch(`https://countries-cities.p.rapidapi.com/location/country/${destCountry}`, options)
        .then(response => response.json())
        .then(response => { 
          console.log(response.currency.code)
          localStorage.setItem('destCurrency', response.currency.code);
        
        });
          //https://countries-cities.p.rapidapi.com/location/country/${destCountry}/576a507ee7msh03a8d40416350bbp1e0201jsnbd061cc4d364
      
      
        



        
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
          //nameCurrShort.innerHTML = ("(" + currNameShort + ")");
          
          nameCurrShort.innerHTML = ("(" + currNameShort + " &#x" + currSymbol + ")") ;
          //nameCurrShort.innerHTML = ("(" + currNameShort +  + ")");
          var splitCurrSymbol = currSymbol.split(",");
          console.log(splitCurrSymbol);

          // for (var i = 0; i < splitCurrSymbol.length; i++) { 
          //   //currText += ("&#x" + splitCurrSymbol[i] + ";");
          //   var nameCurrShort12 = ("&#x" + splitCurrSymbol[i] + ";");
          //   console.log(nameCurrShort12);
          //   }

      


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
    var videoTitle = document.getElementById("video-title");
    var videoSearch = document.getElementById("video-search");
    var youTubeKey ="AIzaSyBSdv8yJFcPRx4-NrqPkTNNlIWHp4tZFjQ";
    //var youTubeKey ="AIzaSyCy8X1DV3uhVVhtCDYHDppA67-StdHfdVw";
    

    function youTubeAPI(){
      var request=
      "https://youtube.googleapis.com/youtube/v3/search?key=" +
      youTubeKey +
      "&type=video&part=snippet&maxResults=1" +
      "&q=" +
      "10 best things to do" + userCitySelected //hardcode until we get the user destination
      
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
          videoTitle.innerHTML += data.items[0].snippet.title
          videoSearch.innerHTML +=`<iframe width="420" height="315" src="https://www.youtube.com/embed/${video}"></iframe>`
          })
     
      }

      
    // END YOUTUBE VIDEO 

 


    init();

