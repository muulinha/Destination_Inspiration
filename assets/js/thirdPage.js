// The settings will be on the final page (full search display for a particular city)
// HOME AND SETTINGS BUTTON

var hmOptionDisp = document.querySelector("#homeBtn");
var setOptionDisp = document.querySelector("#settingsBtn");

setOptionDisp.addEventListener('click', function (){
    window.location.replace("./settings.html")
})
hmOptionDisp.addEventListener('click', function(){
    window.location.replace("./thirdPage.html")
})
// END HOME AND SETTINGS BUTTON