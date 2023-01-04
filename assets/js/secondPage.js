// Declare variables
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var searchInputVal = document.querySelector('#search-input');
var searchSubmitEl = document.querySelector("#search-submit");
var rapidAPI = "794142a626ce62e5a3897b2a34ca54fe";
var flag;
var country;

var userLastSearch = localStorage.getItem("lastSearch");
searchInputVal.setAttribute('value', userLastSearch);

searchSubmitEl.addEventListener('click', searchApi);

// _________________________________________________________________________________
function printResults(resultObj) {
    console.log(resultObj);
    // set up `<div>` to hold result content
    var resultCard = document.createElement('div');
    var resultBody = document.createElement('a');
    resultBody.classList.add('btn', 'btn-light', 'inline');
    resultBody.setAttribute('href', "./thirdPage.html")
    // needs to direct it to the results page with the country/city input
    resultCard.append(resultBody);
    var titleEl = document.createElement('h3');
    titleEl.textContent = resultObj.name + ", " + resultObj.state + ", " + resultObj.country;
    var imgCountry = document.createElement('img');
    imgCountry.src = flag;
    // add country flag
    country = resultObj.country;
    console.log(country);
    resultBody.append(titleEl, imgCountry);
    resultContentEl.append(resultCard);
  }
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
        // write query to page so user knows what they are viewing
        console.log(data);
        if (!data.length) {
          console.log('No results found!');
          resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
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
  // _________________________________________________________________________________
  searchFormEl.addEventListener('submit', handleSearchFormSubmit);
  // Fetch from Country-cities API _____________________________
  async function fetchCountryFlag (){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '576a507ee7msh03a8d40416350bbp1e0201jsnbd061cc4d364',
            'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
        }
    };
    // https://rapidapi.com/natkapral/api/countries-cities
    await fetch('https://countries-cities.p.rapidapi.com/location/country/' + "AU", options)
        .then(response => response.json())
        .then(response => {
            flag = response.flag.file;
            
    });
  };
  // End _________________________________________________________







      // store city state and country in local storage
      localStorage.setItem('selectedCity', "Miami")   // Lucus to store city name here!!
      localStorage.setItem('selectedState', "Florida")   // Lucus to store state name here!!
      localStorage.setItem('selectedCountry', "US")   // Lucus to store country code here!!