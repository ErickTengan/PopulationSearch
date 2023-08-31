const searchButton = document.getElementById('button-search');
let countryName, population, countryCommonName;

async function setCountry() {
  countryName = document.getElementById('input-search').value;
  await search(countryName);

  append();
}

function search(country) {
  const endpoint = `https://restcountries.com/v3.1/name/${country}`;

  return fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const countryData = data[0];
      population = countryData.population;
      countryCommonName = countryData.name.common;
    })
    .catch(error => alert("Error: " + error))
  
}

function append() {
  if(population == undefined) {
    document.querySelector('.responseText').innerHTML = `<p> You got an error: check spelling or internet connection. </p>`;
    return;
  }
 document.querySelector('.responseText').innerHTML = `<p> ${countryCommonName} has a population of ${population}. </p>`;
}

searchButton.addEventListener("click", setCountry);