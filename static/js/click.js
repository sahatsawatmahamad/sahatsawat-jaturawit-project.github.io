// const song = document.getElementById("song").value;

// console.log(song);

function song() {
  while (true) {
    var g = document.getElementById("song").value;
    
    // console.log(g);
    if (g == "jinglebell") {
      
      var jingleBell = [
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
          noteElement.style.opacity = "1";
          noteElement.addEventListener("click", function () {
            // console.log(jingleBell[index]);
            // console.log(noteElement.id);
            if (noteElement.id == jingleBell[index]) {
              noteElement.classList.remove("tran");
              noteElement.style.opacity = "0.6";
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
      // console.log(jingleBell);
      
      break;

    } else if (g == "HBD") {
      
      var jingleBell = [
        "C1",
        "D1",
        "E1",
        "F1",
        "G1",
        "A1",
        "B1",
        "C2",
        "D2",
        "E2",
      ];
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
          noteElement.style.opacity = "1";
          noteElement.addEventListener("click", function () {
            // console.log(jingleBell[index]);
            // console.log(noteElement.id);
            if (noteElement.id == jingleBell[index]) {
              noteElement.classList.remove("tran");
              noteElement.style.opacity = "0.6";
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
      // console.log(jingleBell);
      break;
    } else {
      break;
    }
  }

  // return jingleBell;
  // console.log(jingleBell);
  // console.log(jingleBell);
}

// song();
// test(0);
// function test(index) {
//   if (index >= jingleBell.length) {
//     console.log("win");
//     return;
//   } else {
//     var noteElement = document.getElementById(jingleBell[index]);
//     // let note_jing = jingleBell[k]
//     // console.log(noteElement);
//     noteElement.classList.add("tran");
//     noteElement.style.opacity = "1";
//     noteElement.addEventListener("click", function () {
//       // console.log(jingleBell[index]);
//       // console.log(noteElement.id);
//       if (noteElement.id == jingleBell[index]) {
//         noteElement.classList.remove("tran");
//         noteElement.style.opacity = "0.6";
//         console.log("match");
//         test(++index);
//       } else {
//         console.log(jingleBell[index]);
//         console.log(noteElement.id);
//         console.log("no");
//       }
//     });
//   }
// }
// console.log(jingleBell.length);

function setting() {
  document.getElementById("settingform").style.width = "180px";
  document.getElementById("settingform").style.height = "180px";
}
