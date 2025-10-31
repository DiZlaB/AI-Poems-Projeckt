function findingPoem(event) {
  event.preventDefault();
  let topic = document.querySelector("#topic-instructions");
  let apiKey = "f815539f536231076tb0a5349fo37e92";
  let prompt = `Generate a funny poem about ${topic.value}.`;
  let context =
    "Act like a poet. The poem has to rhyme. Don't make it longer than 15 rows. Take this as an example: From time to time, one needs a rhyme, and if you are bright, you use this website.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showPoem);
}

function showPoem(response) {
  let poemText = response.data.answer;
  let poemSection = document.querySelector("#poem-section");
  poemSection.innerHTML = "";
  new Typewriter("#poem-section", {
    strings: [poemText],
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}
let searchBar = document.querySelector("#search-form");
searchBar.addEventListener("submit", findingPoem);
