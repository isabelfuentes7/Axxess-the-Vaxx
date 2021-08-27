// $("#button-addon2").on('click', function(){
//   console.log("button click");
//   var userMovie = $("#userInput").val();
//   console.log(userMovie)
// };

fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
		"x-rapidapi-key": "c35fca3284msh8cc0fd284e64a91p13fa14jsn516c9b52b38b"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});



  var requestUrl = "https://www.vaccinespotter.org/api/v0/states/MA.json";
  
  // https://api.covidactnow.org/v2/county/{fips}.json?apiKey=YOUR_KEY_HERE
  // https://api.covidactnow.org/v2/cbsa/{cbsa_code}.json?apiKey=YOUR_KEY_HERE"
  console.log(requestUrl);

  fetch(requestUrl)
  .then(function (response){
  console.log(response)
  return response.json();
  })
  .then(function (data){
      console.log(data)

      // $("#vaccinePharmacy").text(data.name)

      // $("#movieLanguage").text(data.Language)
  });





// https://developer.walgreens.com/user/me/apps/add

// https://api.covidactnow.org/v2/state/{state}.json?apiKey=01070f0a67e04e779ca27d3bc65eb29c


// https://www.vaccinespotter.org/api/v0/states/MA.json"
























// // import axios from 'axios'
// var repoList = document.querySelector('ul');
// var fetchButton = document.getElementById('fetch-button');

// // function getApi(){
// //  var requestUrl ='https://cors-anywhere.herokuapp.com/https://api.covidtracking.com/v1/states/ca/current.json'; 
// // //  axios.get(requestUrl).then(response=>{console.log(response.data)})

// //   fetch(requestUrl)
// //   .then(function (response){
// //    console.log(response)
// //    return response.json();
// //   })
// //   .then(function (data){

  

//     //console.log(data)
//     //document.getElementById("state").innerText = data.state;
//     // for (var i =0; 1 < data.length: i++) {
//     //   var listItem.textContent = data[i] .html_url;
//     //   repoList.appendChild(listItem);
//     // }
  
// function getApi (){
//  var requestUrl ='https://www.vaccinespotter.org/api/v0/states/MA.json';

//   fetch(requestUrl)
//   .then(function (response){
//    console.log(response)
//    return response.json();
//   })
//   .then(function(data){

//   })
// }


// // let map;

// // function initMap() {
// //   map = new google.maps.Map(document.getElementById("map"), {
// //     center: { lat: -34.397, lng: 150.644 },
// //     zoom: 8,
// //   });
// // }
// getApi()

// fetchButton.addEventListener('click', getApi);
