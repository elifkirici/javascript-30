const inputDOM=document.getElementById("input")
const countryDom = document.querySelector(".country");
const capitalDom = document.querySelector(".capital");
const continentDom = document.querySelector(".continent");
const populationDom = document.querySelector(".population");
const currencyDom = document.querySelector(".currency");
const commonLangDom = document.querySelector(".commonLang");
const imgCountryDOM=document.getElementById("imgCountry")


function getCountry(){
  let name =inputDOM.value
  let url =`https://restcountries.com/v3.1/name/${name}?fullText=true`
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)     
        countryDom.innerText =`${responseJson[0].name.common}`
        imgCountryDOM.src = `${responseJson[0].flags.png}`;
        imgCountryDOM.classList.remove("d-none")
        capitalDom.innerText=`Capital: ${responseJson[0].capital[0]}`
        continentDom.innerText=`Continent: ${responseJson[0].continents[0]}`
        populationDom.innerText=`Population: ${responseJson[0].population}` 
      currencyDom.innerText =`Currency: ${Object.keys(responseJson[0].currencies)[0]}`
      commonLangDom.innerText = `Common Language: ${Object.values(responseJson[0].languages)[0]}`
    });
}



