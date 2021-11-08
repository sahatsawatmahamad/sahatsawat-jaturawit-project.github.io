document.addEventListener("keydown", function (e) {
  if (e.keyCode == 81) {
    var soundC1 = new Audio((src = "./sounds/piano_note/Music_Note/C.wav"));
    document.getElementById("C1").style.opacity = 1;
    document.getElementById("C1").classList.add("tran");
    soundC1.play();
  } else if (e.keyCode == 87) {
    var soundD1 = new Audio((src = "./sounds/piano_note/Music_Note/D.wav"));
    document.getElementById("D1").style.opacity = 1;
    document.getElementById("D1").classList.add("tran");
    soundD1.play();
  } else if (e.keyCode == 69) {
    var soundE1 = new Audio((src = "./sounds/piano_note/Music_Note/E.wav"));
    document.getElementById("E1").style.opacity = 1;
    document.getElementById("E1").classList.add("tran");
    soundE1.play();
  } else if (e.keyCode == 82) {
    var soundF1 = new Audio((src = "./sounds/piano_note/Music_Note/F.wav"));
    document.getElementById("F1").style.opacity = 1;
    document.getElementById("F1").classList.add("tran");
    soundF1.play();
  } else if (e.keyCode == 84) {
    var soundG1 = new Audio((src = "./sounds/piano_note/Music_Note/G.wav"));
    document.getElementById("G1").style.opacity = 1;
    document.getElementById("G1").classList.add("tran");
    soundG1.play();
  } else if (e.keyCode == 89) {
    var soundA1 = new Audio((src = "./sounds/piano_note/Music_Note/A.wav"));
    document.getElementById("A1").style.opacity = 1;
    document.getElementById("A1").classList.add("tran");
    soundA1.play();
  } else if (e.keyCode == 85) {
    var soundB1 = new Audio((src = "./sounds/piano_note/Music_Note/B.wav"));
    document.getElementById("B1").style.opacity = 1;
    document.getElementById("B1").classList.add("tran");
    soundB1.play();
  } else if (e.keyCode == 73) {
    var soundC2 = new Audio((src = "./sounds/piano_note/Music_Note/C1.wav"));
    document.getElementById("C2").style.opacity = 1;
    document.getElementById("C2").classList.add("tran");
    soundC2.play();
  } else if (e.keyCode == 79) {
    var soundD2 = new Audio((src = "./sounds/piano_note/Music_Note/D1.wav"));
    document.getElementById("D2").style.opacity = 1;
    document.getElementById("D2").classList.add("tran");
    soundD2.play();
  } else if (e.keyCode == 80) {
    var soundE2 = new Audio((src = "./sounds/piano_note/Music_Note/E1.wav"));
    document.getElementById("E2").style.opacity = 1;
    document.getElementById("E2").classList.add("tran");
    soundE2.play();
  }
});
document.addEventListener("keyup", function (e) {
  if (e.keyCode == 81) {
    document.getElementById("C1").style.opacity = 0.6;
    document.getElementById("C1").classList.remove("tran");
  } else if (e.keyCode == 87) {
    document.getElementById("D1").style.opacity = 0.6;
    document.getElementById("D1").classList.remove("tran");
  } else if (e.keyCode == 69) {
    document.getElementById("E1").style.opacity = 0.6;
    document.getElementById("E1").classList.remove("tran");
  } else if (e.keyCode == 82) {
    document.getElementById("F1").style.opacity = 0.6;
    document.getElementById("F1").classList.remove("tran");
  } else if (e.keyCode == 84) {
    document.getElementById("G1").style.opacity = 0.6;
    document.getElementById("G1").classList.remove("tran");
  } else if (e.keyCode == 89) {
    document.getElementById("A1").style.opacity = 0.6;
    document.getElementById("A1").classList.remove("tran");
  } else if (e.keyCode == 85) {
    document.getElementById("B1").style.opacity = 0.6;
    document.getElementById("B1").classList.remove("tran");
  } else if (e.keyCode == 73) {
    document.getElementById("C2").style.opacity = 0.6;
    document.getElementById("C2").classList.remove("tran");
  } else if (e.keyCode == 79) {
    document.getElementById("D2").style.opacity = 0.6;
    document.getElementById("D2").classList.remove("tran");
  } else if (e.keyCode == 80) {
    document.getElementById("E2").style.opacity = 0.6;
    document.getElementById("E2").classList.remove("tran");
  }
});
const keyList = ["C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2"];
keyList.forEach((key) => {
  var canvas = document.getElementById(key);
  var ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(key, canvas.width / 2, canvas.height / 2);
});
const keyCode = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
keyCode.forEach((keytype) => {
  var canvastype = document.getElementById(keytype);
  var ctxtype = canvastype.getContext("2d");
  ctxtype.font = "30px Arial";
  ctxtype.fillStyle = "white";
  ctxtype.textAlign = "center";
  ctxtype.fillText(keytype, canvastype.width / 2, canvastype.height / 2);
});
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
