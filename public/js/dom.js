const errorMsg = document.getElementById("error");
const player = document.getElementById("player");
const summary = document.getElementById("summary");
const gallery = document.getElementById("gallery");
const btnEnglish = document.getElementById("btn-english");
const masp = document.getElementById("masp");
const trianon = document.getElementById("trianon");

masp.addEventListener("click", function() {
  window.location = `wiki.html?placeName=${"Museu_de_Arte_de_São_Paulo"}`;
});

trianon.addEventListener("click", function() {
  window.location = `wiki.html?placeName=${"Parque_Trianon"}`;
});

