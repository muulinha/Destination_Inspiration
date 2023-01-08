// Declare variables
var searchForm = document.querySelector("#search-submit");
var searchInput = document.querySelector("#search-text");
var ourSearchHistory = JSON.parse(localStorage.getItem('seachHistory'));
var trashBtn = document.querySelector('.fa-trash');

// Add an Event Listener to the trash button to remove the history of searches
// trashBtn.addEventListener('click', function (){
//   localStorage.removeItem('searchHistory')
//   searchButtons.remove();
// })

// Enable search with an Enter key
searchInput.addEventListener("keyup", function(event){
  if (event.keyCode === 13){
    event.preventDefault();
    searchForm.click()
  }
})

// Add Event Listener to the search sumit button that stores the past searches and redirect to a search result page
searchForm.addEventListener("click", searchForCity);

  function searchForCity (event) {
    event.preventDefault();

    // If the value is empty break the function
    var searchText = searchInput.value.trim();
      if (searchText === "") {
      return;
      } else {
    // otherwise store the search value into local storage
        storeSearch();
    }
    // redirect to a new page
    window.location.href = "./secondPage.html";
  };
  

//   This functions stores all past searched into local storage
  function storeSearch () {
    var new_data = document.getElementById('search-text').value;
    localStorage.setItem('lastSearch', new_data);

    if(localStorage.getItem('searchHistory') == null) {
        localStorage.setItem('searchHistory', '[]')
      }

      var old_data = JSON.parse(localStorage.getItem('searchHistory'));
      if(old_data.includes(new_data)) {
        return;
      }

      old_data.push(new_data);
      localStorage.setItem('searchHistory', JSON.stringify(old_data));
      
  }

//   This function shows past searches once user types in the first letter and its a match with any of the past cities
  $(function () {
    var dropdownHistory = JSON.parse(localStorage.getItem('searchHistory'));
    $('#search-text').autocomplete({
      source: dropdownHistory,
      minLength: 0,
    });
  }); 

// Dynamically create buttons for previous searches
var searchButtons = document.querySelector('.search-buttons');
var searchHeader = document.createElement('h3');
var trash = document.createElement('button');
createButtons();
function createButtons (){
  var dropdownHistory = JSON.parse(localStorage.getItem('searchHistory'));
  if (dropdownHistory == null){
    searchButtons.remove();
    return;
  }
    searchHeader.textContent = 'Search History';
    searchButtons.appendChild(searchHeader);
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    searchHeader.appendChild(trash);
  for (var i = 0; i < dropdownHistory.length; i++){
    var searchButton = document.createElement('button');
    searchButton.textContent = dropdownHistory[i];
    searchButtons.appendChild(searchButton);
    searchButton.setAttribute('data-name', dropdownHistory[i]);
    searchButton.classList.add('data-name-btn'); 
    searchButton.addEventListener('click', clickListenerFor(searchButton));
    }
  }
  
// Append a click event listener for each search button created in the previous function
    function clickListenerFor(button){
      return function (e){
      var citySearchName = button.dataset.name;
      console.log(citySearchName);
      localStorage.setItem('lastSearch', citySearchName);
      window.location.href = "./secondPage.html";
    }
  }


