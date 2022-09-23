const textDom = document.getElementById("text");
const authorDom = document.getElementById("author")
const randomTextDOM = document.querySelector("#randomText");
randomTextDOM.addEventListener("click", change);
let quotes = [];

function getQuotes() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((responseJson) => {
        quotes= responseJson;
        change();      
    });
}

function change() {
    const randomtext = Math.floor(Math.random() * quotes.length);
    const item = quotes[randomtext];
    textDom.innerHTML = item.text 
   authorDom.innerHTML= item.author;
}

function shareTwitter(){
    window.location.href='https://twitter.com/intent/tweet?text='
    +encodeURIComponent('"'+textDom.innerText+'"');
}

window.addEventListener("load",getQuotes())