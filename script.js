const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const status = document.getElementById("status");
const emoji = document.getElementById("emoji");
const buttons = document.getElementById("buttons");
const audio = document.getElementById("audioPlayer");

// Google Form
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeph7JrZLczGKc-_od6Wk7WBD3xzN62JCHuak_1gdGubxesrQ/formResponse";
const ENTRY_ID = "entry.1849187121";

function sendResponse(answer) {
  fetch(`${FORM_URL}?${ENTRY_ID}=${answer}`, { method: "POST", mode: "no-cors" });
}

function playSong(file) {
  audio.src = file;
  audio.style.display = "block";
  audio.play();
}

yesBtn.onclick = () => {
  sendResponse("Yes");
  status.innerHTML = "She said YES 💖";
  emoji.innerHTML = "💖";
  buttons.style.display = "none";
  playSong("priya_mithunam.mp3");
};

noBtn.onclick = () => {
  sendResponse("No");
  status.innerHTML = "She said NO 💔";
  emoji.innerHTML = "💔";
  buttons.style.display = "none";
  playSong("na_matuna.mp3");
};
