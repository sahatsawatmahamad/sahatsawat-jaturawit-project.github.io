const jingleBell = [
  "E1",
  "E1",
  "E1",
  "E1",
  "E1",
  "E1",
  "E1",
  "G1",
  "C1",
  "D1",
  "E1",
  "F1",
  "F1",
  "F1",
  "F1",
  "E1",
  "E1",
  "E1",
  "D1",
  "D1",
  "E1",
  "D1",
  "G1",
];
console.log(jingleBell.length);

test(0);
function test(index) {
  if (index >= jingleBell.length) {
    console.log("win");
    return;
  } else {
    var noteElement = document.getElementById(jingleBell[index]);
    // let note_jing = jingleBell[k]
    // console.log(noteElement);
    noteElement.classList.add("tran");
    noteElement.style.opacity= "1"
    noteElement.addEventListener("click", function () {
      // console.log(jingleBell[index]);
      // console.log(noteElement.id);
      if (noteElement.id == jingleBell[index]) {
        noteElement.classList.remove("tran");
        noteElement.style.opacity= "0.6"
        console.log("match");
        test(++index);
      } else {
        console.log(jingleBell[index]);
        console.log(noteElement.id);
        console.log("no");
      }
      
    });
  }
}
