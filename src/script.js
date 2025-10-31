let searchBar=document.querySelector("#search-form")
searchBar.addEventListener('submit', findingPoem)

function findingPoem (event) {
event.preventDefault()
let poemSection=document.querySelector("#poem-section")
poemSection.innerHTML= "From time to time, one needs a rhyme, and if you're bright, you use this website"
}