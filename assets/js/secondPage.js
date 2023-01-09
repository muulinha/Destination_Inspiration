var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var searchInputVal = document.querySelector('#search-input');
var searchSubmitEl = document.querySelector("#search-submit");
var rapidAPI = "794142a626ce62e5a3897b2a34ca54fe";
var flag;

var country;
var city;
var state;

var userLastSearch = localStorage.getItem("lastSearch");
searchInputVal.setAttribute('value', userLastSearch);

// Allow a user to search again for another city
searchSubmitEl.addEventListener('click', function (event){
  searchApi();
  const userSearch = searchInputVal.value
  localStorage.setItem('lastSearch', userSearch);
  if(localStorage.getItem('searchHistory') == null) {
    localStorage.setItem('searchHistory', '[]')
  }

  var old_data = JSON.parse(localStorage.getItem('searchHistory'));
  if(old_data.includes(userSearch)) {
    return;
  }

  old_data.push(userSearch);
  localStorage.setItem('searchHistory', JSON.stringify(old_data));
  
});
searchFormEl.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    event.preventDefault();
    searchSubmitEl.click();
  }
})



// _________________________________________________________________________________
function printResults(resultObj) {
  
  var resultCard = document.createElement('div');
  var resultBody = document.createElement('a');
  

  resultBody.classList.add('btn', 'btn-light', 'inline');
  resultBody.setAttribute('href', "./thirdPage.html")
  resultCard.append(resultBody);
  var titleEl = document.createElement('h3');

  var stateInput = resultObj.state;
  var stateValidation;
  if(stateInput == null){
    stateValidation = ""
   } else {
    stateValidation = ", " + stateInput
   }

  titleEl.textContent = resultObj.name + stateValidation + ", " + resultObj.country;
  var imgCountry = document.createElement('img');

  resultBody.append(titleEl, imgCountry);
  resultContentEl.append(resultCard);

// ________________________________________________________________________________
    resultBody.addEventListener("click", function(event) {
      var element = event.target;
    
      console.log(element);
    
      country = resultObj.country; 
      city = resultObj.name;
      state = resultObj.state;
      lat = resultObj.lat;
      lon = resultObj.lon;

      localStorage.setItem('selectedCity', city);   
      localStorage.setItem('selectedState', state) ;  
      localStorage.setItem('selectedCountry', country);   
      localStorage.setItem('selectedLat', lat);   
      localStorage.setItem('selectedLon', lon);   
    
      console.log(country,city,state,lat,lon);

      localStorage.setItem('destCountryName', "");

    })};
  // _________________________________________________________________________________



  function searchApi() {
    var locQueryUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + searchInputVal.value + '&limit=10&appid=' + rapidAPI;
     fetch(locQueryUrl)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
        return response.json();
      })
      .then(function (data) {
        if (!data.length) {
          console.log('No results found!');
          resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';

          let historySearch = JSON.parse(localStorage.getItem("searchHistory"));
          historySearch.pop();
          localStorage.setItem('searchHistory', JSON.stringify(historySearch)); 
          searchButtons.remove("data-name", searchInputVal.value)
        } else {
          resultContentEl.textContent = '';
          for (var i = 0; i < data.length; i++) {
            printResults(data[i]);
          }
        }
      })
      .catch(function (error) {
      });
  }
  // _________________________________________________________________________________

    searchApi();
  
  
  
  
  // _________________________________________________________________________________
  function handleSearchFormSubmit(event) {
    event.preventDefault();
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
    searchApi(searchInputVal);
  }
  // _________________________________________________________________________________


  searchFormEl.addEventListener('submit', handleSearchFormSubmit);

  function fetchCountry() {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '576a507ee7msh03a8d40416350bbp1e0201jsnbd061cc4d364',
        'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
      }
    };
  
    //COUNTRY NAME
        var destCountry = localStorage.getItem('selectedCountry')

    fetch('https://countries-cities.p.rapidapi.com/location/country/list', options)
    .then(response => response.json())
    .then(response => {
      localStorage.setItem('destCountryName', response.countries[destCountry]);
    });
    // END COUNTRY NAME
  };
 
      fetchCountry();