
var audios = [
  "./sounds/piano_note/Music_Note/C.wav",
  "./sounds/piano_note/Music_Note/D.wav",
  "./sounds/piano_note/Music_Note/E.wav",
  "./sounds/piano_note/Music_Note/F.wav",
  "./sounds/piano_note/Music_Note/G.wav",
  "./sounds/piano_note/Music_Note/A.wav",
  "./sounds/piano_note/Music_Note/B.wav",
  "./sounds/piano_note/Music_Note/C1.wav",
  "./sounds/piano_note/Music_Note/D1.wav",
  "./sounds/piano_note/Music_Note/E1.wav",
];
var specifics = document.querySelectorAll(".note");
// function mouseOver() {
//     soundC1.play();

// }
for (i = 0; i < specifics.length; i++) {
  let specific = specifics[i];

  let audio = document.createElement("audio");
  audio.src = audios[i];
  document.body.appendChild(audio);

  specific.onmouseover = () => {
    audio.currentTime = 0.225;
    audio.play();
  };
  specific.onmouseout = () => {
    audio.pause();
    audio.currentTime = 0;
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
const keyCode = ["Q", "W", "E", "R", "T", "Y", "U", "D", "F", "G","H","J","K","L","M"];
keyCode.forEach((keytype) => {
  var canvastype = document.getElementById(keytype);
  var ctxtype = canvastype.getContext("2d");
  ctxtype.font = "30px Arial";
  ctxtype.fillStyle = "white";
  ctxtype.textAlign = "center";
  ctxtype.fillText(keytype, canvastype.width / 2, canvastype.height / 2);
});
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "180px";
  document.getElementById("main").style.marginLeft = "180px";
  // const synth = new Tone.Synth().toDestination();
  // synth.triggerAttackRelease("C4", "8n");
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


