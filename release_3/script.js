let countriesdata;

fetch("https://restcountries-v1.p.rapidapi.com/all", {                                //api url
	"method": "GET",                                                                  // method GET
	"headers": {                                                                      //headers
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "01258247famshaa6ce33401a5efep15b8c4jsn4bd81ac3ca7b"
	}
})
.then(response => response.json())                                                    //returning response.json file
.then(data => start(data))                                                            //calling the start funciton to display data
.catch(err => console.log(err));                                                      // catching the error

function start(apiData)                                                               //start function
{
	countriesdata = apiData;                                                          //country data 
	let options = "";
	for(var i=0 ; i<countriesdata.length ; i++)
	{
		options = options + `<option value = "${countriesdata[i].name}">${countriesdata[i].name}</option>`;   //getting all the countries into options
	}	
	document.getElementById("countries").innerHTML = options;                                       //giving the options to select tag
	document.getElementById("countries").addEventListener("change" , countrySelection);             //adding the event listener
}


function countrySelection(event)                                        //function countryselection
{
	displayCountryInfo(event.target.value);                             //caling another function displaycountry funciton
}

function displayCountryInfo(name)                                           //display country info function
{
	var countryname = countriesdata.find(country => country.name === name);     //checking the parameter with the api data
	document.getElementById("name").innerHTML = countryname.name;               //country name
	document.getElementById("region").innerHTML = countryname.region;           //country region
	document.getElementById("subregion").innerHTML = countryname.subregion;     //country subregion
	document.getElementById("capital").innerHTML = countryname.capital;         //country captial
	document.getElementById("population").innerHTML = countryname.population;   //country population
	document.getElementById("countrycode").innerHTML = countryname.alpha3Code;  //country countrycode
	document.getElementById("timezone").innerHTML = countryname.timezones[0];   //country timezone
	document.getElementById("currencies").innerHTML = countryname.currencies[0];//country currency
}