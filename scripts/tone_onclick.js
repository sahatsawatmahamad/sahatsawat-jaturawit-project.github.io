
var audios = [
  "./sounds/piano_note/note_complete/C3.mp3",
  "./sounds/piano_note/note_complete/D3.mp3",
  "./sounds/piano_note/note_complete/E3.mp3",
  "./sounds/piano_note/note_complete/F3.mp3",
  "./sounds/piano_note/note_complete/G3.mp3",
  "./sounds/piano_note/note_complete/A3.mp3",
  "./sounds/piano_note/note_complete/B3.mp3",
  "./sounds/piano_note/note_complete/C4.mp3",
  "./sounds/piano_note/note_complete/D4.mp3",
  "./sounds/piano_note/note_complete/E4.mp3",
  "./sounds/piano_note/note_complete/F4.mp3",
  "./sounds/piano_note/note_complete/G4.mp3",
  "./sounds/piano_note/note_complete/A4.mp3",
  "./sounds/piano_note/note_complete/B4.mp3",
  "./sounds/piano_note/note_complete/C5.mp3",
];
var specifics = document.querySelectorAll(".note");
// function mouseOver() {
//     soundC1.play();

// }
for (i = 0; i < specifics.length; i++) {
  var specific = specifics[i];

  let audio = document.createElement("audio");
  audio.src = audios[i];
  document.body.appendChild(audio);
  specific.onclick = () => {
    audio.currentTime = 0.225;
    audio.play();
  };
}
const keyList = ["C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2", "F2", "G2", "A2", "B2","C3"];
keyList.forEach((key) => {
  var canvas = document.getElementById(key);
  var ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(key, canvas.width / 2, canvas.height / 2);
});
function setting(){
  document.getElementById("settingform").style.width = "180px";
  document.getElementById("settingform").style.height = "180px";
}