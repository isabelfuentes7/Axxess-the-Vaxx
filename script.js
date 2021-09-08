

$("#button-addon2").on('click', function(){
  var div
  // Getting state from the dropdown menu
      
  console.log("button click");
  var userMovie = $("#userInput").val();
  console.log(userMovie)

  var states = $("#userInput").val()




  //Pharmacy Store


  var requestUrl = "https://www.vaccinespotter.org/api/v0/states/"+ states +".json";
  
  console.log(requestUrl);

  fetch(requestUrl)
  .then(function (response){
  console.log(response)
  return response.json();
  })
  .then(function (data){
      console.log(data)
//Displaying pharmacy locations on html pg

//For loop used to store into temporary array
      var temp=[]
      for(i=0; i < 50; i++){ 
        var div=document.createElement("div")
        temp.push({'storeName':String((data.features[i].properties.city)).charAt(0).toUpperCase()+String((data.features[i].properties.city)).slice(1).toLowerCase(),"address": data.features[i].properties.name})
      }

      console.log(temp)

      document.getElementById("vaccinePharmacy").textContent=''
//For loop display all the temp array data onto html pg
      for(i=0; i < temp.length; i++){
        div=document.createElement("div")   
        div.innerHTML= "Town: " + temp[i].storeName+', Store: '+ temp[i].address
        document.getElementById("vaccinePharmacy").appendChild(div)
      }
 });


  //Covid Case Numbers
  var requestUrlForTotalCase ="https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=2021-09-05T00:00:00.000&state="+states
  //Fetching case numbers from api
  fetch(requestUrlForTotalCase)
  .then(function (response){
    console.log(response)
    return response.json();
    })
  .then(function(data) {
console.log(data,data[0].pnew_case,data[0].new_death,data[0].tot_cases)
var div_new_case,div_total_case,div_death_rate

//New Case Numbers
//Create new div tag on html pg
div_new_case=document.createElement("div")   
//Store the new case number into the new html
div_new_case.innerHTML=Number(data[0].new_case)
//Remove the old(previous state data) case number 
document.getElementById("new_case").textContent=''
//Display new case number(new state)
document.getElementById("new_case").appendChild(div_new_case)

//Total Case Numbers
div_total_case=document.createElement("div")   
div_total_case.innerHTML=Number(data[0].tot_cases)
document.getElementById("total_case").textContent=''
document.getElementById("total_case").appendChild(div_total_case)


//Death Rates
div_death_rate=document.createElement("div")   
div_death_rate.innerHTML=Number(data[0].new_death)
document.getElementById("death_rates").textContent=''
document.getElementById("death_rates").appendChild(div_death_rate)
    })
//Above
  })
  



function removeTag(){
  
}

































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

// fetchButton.addEventListener('click', getApi)
// fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
// 		"x-rapidapi-key": "c35fca3284msh8cc0fd284e64a91p13fa14jsn516c9b52b38b"
// 	}
// })
// .then(response => {
// 	console.log(response);
//   return response.json();
// })
// .then(function(data){
//   console.log(data);
// })