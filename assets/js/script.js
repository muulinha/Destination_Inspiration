// SETTINGS BUTTON

var settingsOption = document.querySelector("#settingsBtn");

// on click go to settings page
settingsOption.addEventListener("click", function() {
window.location.replace("./settings.html");
});

// END SETTINGS BUTTON


// TRIGGER BUTTON - ALL SEARCHES

  var searchForm = document.querySelector("#search-submit");

  // trigger search if value is not blank
  searchForm.addEventListener("click", function(event) {
    event.preventDefault();

    var searchText = searchInput.value.trim();
      if (searchText === "") {
      return;
      } else {
        
        storeSearch();
        // SHOW RESULTS IN CARD                                                    !!!!!!!!!!!!!!!!!!!
        // SELECT PREFERRED OPTION AND SAVE TO LOCAL STORAGE                       !!!!!!!!!!!!!!!!!!!
      }
    
    var resultCard = document.getElementById("hidden")
    resultCard.setAttribute("ID","show")

  });

// END TRIGGER BUTTON - ALL SEARCHES


// TRIGGER SELECTED OPTION RESULTS

  var resultsp = document.getElementById("resultsPage")
  var selectedCity = "PERTH,AU"
      
  resultsp.addEventListener("click", function(event) {
    localStorage.setItem("selectedCity",selectedCity) 
    window.location.replace("./displaycityresult.html");
          
  // TRIGGER RESULTS  (REPLACE CITY & COUNTRY CARD)                                                       !!!!!!!!!!!!!!!!!!!

  }); 

// END TRIGGER SELECTED OPTION RESULTS


    // LOCAL STORAGE

    var searchInput = document.querySelector("#search-text");  
    var ourSearchHistory = JSON.parse(localStorage.getItem('seachHistory'));
  

    // get input value
    function storeSearch() {
      var new_data = document.getElementById('search-text').value;

      // does array aleady exist
      if(localStorage.getItem('searchHistory') == null) {
        localStorage.setItem('searchHistory', '[]')
      }

      // check if city already exists in local storage
      var old_data = JSON.parse(localStorage.getItem('searchHistory'));
      console.log(old_data.includes(new_data));
      if(old_data.includes(new_data)) {
        return;
      }

      old_data.push(new_data);
      localStorage.setItem('searchHistory', JSON.stringify(old_data));
    }

  // END LOCAL STORAGE ..................................................


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
  };

// END INIT


init();