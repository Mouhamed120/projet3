const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const author = document.querySelector(".author span");
const sound = document.querySelector(".sound");
const copy = document.querySelector(".copy");

const randoquote = () => {
  quoteBtn.innerText = "chargement ...";
  quoteBtn.classList.add("load");
  // on passe l'adresse du ficher
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((result) => {
      quoteText.textContent = result.content;
      author.textContent = "__" + result.author;
      quoteBtn.innerText = "Nouvelle citation";
      quoteBtn.classList.remove("load");
    });
};

window.addEventListener("load", randoquote);

quoteBtn.addEventListener("click", randoquote);
sound.addEventListener("click", () => {
  var utterThis = new SpeechSynthesisUtterance(quoteText.textContent);
  speechSynthesis.speak(utterThis);
  //   alert(utterThis);
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.textContent);
});
