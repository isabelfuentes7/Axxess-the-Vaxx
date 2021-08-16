var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi(){
  var requestUrl ='https://cors-anywhere.herokuapp.com/https://api.covidtracking.com/v1/states/ca/current.json'; 

  fetch(requestUrl)
  .then(function (response){
    return response.json();
  })
  .then(function (data){

  

    //console.log(data)
    //document.getElementById("state").innerText = data.state;
    // for (var i =0; 1 < data.length: i++) {
    //   var listItem.textContent = data[i] .html_url;
    //   repoList.appendChild(listItem);
    // }
  })
}
function getApi (){
  var requestUrl ='https://www.vaccinespotter.org/api/v0/states/MA.json';

  fetch(requestUrl)
  .then(function (response){
    return response.json();
  })
  .then(function(data){
    
  })
}


// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }
getAPi()

fetchButton.addEventListener('click', getAPi);
