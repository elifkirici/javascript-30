const imgFilmDom =document.getElementById("imgFilm")
const watchLaterDom =document.getElementById("watchLater")
const FilmDom =document.querySelector(".Film")
const contentDom =document.querySelector(".content")
const inputDOM = document.querySelector("#input")


const addToLocalStorage= (filmImg,filmTitle)=>{

const filmLocalStorage = localStorage.getItem("films");
if(filmLocalStorage)
{
    if(!filmLocalStorage.includes(filmTitle))
{
localStorage.setItem("films",JSON.stringify([...JSON.parse(filmLocalStorage),{filmImg,filmTitle}]))
}
}
else localStorage.setItem("films",JSON.stringify([{filmImg,filmTitle}]))
}


const searchDOM = document.querySelector("#search")
searchDOM.addEventListener("click",()=>{
    filmName= inputDOM.value
    fetch(`https://www.omdbapi.com/?t=${filmName}&apiKey=796a098c`)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        contentDom.classList.remove("d-none")
      imgFilmDom.src=`${responseJson.Poster}`
      FilmDom.innerText= `${responseJson.Title}`
      watchLaterDom.addEventListener("click",() => {
        addToLocalStorage(responseJson.Poster,responseJson.Title)
      })
      
})
})

