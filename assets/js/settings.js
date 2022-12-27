    // HOME

    var homeOption = document.querySelector("#homeBtn");
        
    // on click go to home page
    homeOption.addEventListener("click", function(event) {
      window.location.replace("./index.html");
    });  


    // SELECT DEFAULT TEMP
    
        var tempForm = document.getElementById("tempDefault");

        // when client clicked on select element 
        tempForm.addEventListener("click", () => {
        // if default value is changed
        tempForm.addEventListener("change", () => {
            // if value switched by client
                localStorage.setItem("temp",tempForm.elements["temp"].value);
            });
        });

    

    // SELECT DEFAULT CURRENCY

        var select = document.getElementById("selectCurrencyDefault");
        var currencySelection = ["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","FOK","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KID","KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SOS","SRD","SSP","STN","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VES","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"];

            for(var i = 0; i < currencySelection.length; i++) {
                var opt = currencySelection[i];
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            }

            // on change update default currency
            
                let selector = document.getElementById("selectCurrencyDefault"); 
                let result = document.getElementById("result"); 
                
                // when client clicked on select element 
                selector.addEventListener("click", () => {
                // if default value is changed
                selector.addEventListener("change", () => {
                // if value switched by client
                    localStorage.setItem("currency",selector.value);
                    
                });
                });


    // HISTORY

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

        };

      
        // delete search history data only

        var delForm = document.querySelector("#delSearchHistory");

        delForm.addEventListener("click", function(event) {
            localStorage.removeItem('searchHistory');
        });     

    // END HISTORY ..................................................


    init();