// Homework: Complete Remaining Tasks and submit via github by Monday before 10PM.

/*
    x Task 1: Put Countries in select
    x Task 2: Print flag when country is selected
    x Task 3: Change the select to show flags and countries together
    x Task 4: Change select to show only flags and print the country when selected.
    x Task 5: Change the select to show only countries and print flag and code together when selected.
    xTask 6: Accept input of a country and select the proper option in the select.
    xTask 7: Capitalize first letter of input
    xTask 8: Test input if it is country or code.
    Task 9: Select shows only flags and the change listener should be removed.
    Task 10: Test typed input of country against currently selected flag. Print correct if they match.
*/

'use strict';
//GLOBALS
document.addEventListener("DOMContentLoaded", () => {  
    
    let country_data = undefined;
    
    
    
    document.getElementById('submit').addEventListener('click', () => {
        const cSelector = document.getElementById('countries');
        let userInput = document.getElementById('name').value;
        userInput= userInput[0].toUpperCase() + userInput.substring(1); 
        //userInput=console.log(code)
        if(userInput.length == 2){
            console.log("code",userInput)
        }else{
            console.log("name",userInput)
        }

        //this should be looked up from submit button and input field in your homework    
        cSelector.value = userInput;
    });
    
    const cSelector = document.getElementById('countries');
          cSelector.addEventListener("change", (event)=> {
              //console.log(event.target.selectedIndex);
              //console.log(Object.keys(country_data)[event.target.selectedIndex]);
              
              const clicked_value = event.target.value
              const keys = Object.keys(country_data);
              const idx = event.target.selectedIndex;
              console.log(country_data[clicked_value])
              const {flag, code} = country_data[clicked_value];
              
              document.getElementById('message').innerHTML = flag + code;
          });
    
    const load_country_data = (data) => {
        //console.log(data);
        const cSelector = document.getElementById('countries');
        for(const [country, mObj] of data) {
            const opt = document.createElement('option');
            opt.innerHTML = country;
            cSelector.appendChild(opt);
        }
    }
    
    
    ///// BEGIN Load external .json file /////
    
    const xhr = new XMLHttpRequest(),
    method = "GET",
    url = 'docs/countries.json';

    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
    // In local files, status is 0 upon success in Mozilla Firefox
        if(xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                country_data = JSON.parse(xhr.responseText);
                //look at json file instead //console.log(country_data);
                //const conv_data = Object.keys(country_data);
                const conv_data = Object.entries(country_data);                
                //const conv_data = Object.values(country_data);
                load_country_data(conv_data);    
            } else {
                // Oh no! There has been an error with the request!
                console.log(status);
            }
        }
    };
    xhr.send();
    ///// END Load external .json file /////
 
    
});




