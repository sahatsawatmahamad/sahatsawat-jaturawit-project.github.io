function Easy() {
  var hand = document.getElementById("hand").value;
  if (hand == "0") {
    console.log("0");
    const img1 = document.getElementById("img1");
    img1.src = "./handimage/open-hands.png";
    img1.style = "background-color: white;max-width: 300px;opacity:0;";

    const img2 = document.getElementById("img2");
    img2.src = "./handimage/closed-fist.png";
    img2.style = "background-color: white;max-width: 300px;opacity:0;";

    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 20) {
        document.getElementById("img1").style.opacity = "0";
        document.getElementById("img2").style.opacity = "0";
        alertwinEasy();
        window.clearInterval(timer);
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
      if (currentTime >= 10 && currentTime <= 19) {
        document.getElementById("img1").style.opacity = "0";
        document.getElementById("img2").style.opacity = "1";
      } else if (currentTime < 10) {
        document.getElementById("img1").style.opacity = "1";
        document.getElementById("img2").style.opacity = "0";
      }
      console.log(currentTime);
    };
    var timer = window.setInterval(countItDown, 1000);
  } else if (hand == "1") {
    var countdown = document.getElementById("countdown");
    var clip = document.getElementById("clip");
    clip.src = "https://www.youtube.com/embed/AUC-UzcUu6w?autoplay=1&mute=1";
    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 20) {
        alertwinEasy();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-5-animation 10s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-6-animation 10s infinite linear";
  } else if (hand == "2") {
    var countdown = document.getElementById("countdown");
    var clip = document.getElementById("clip");
    clip.src = "https://www.youtube.com/embed/rF2Xtr_1TX0?autoplay=1&mute=1";
    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 20) {
        alertwinEasy();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-7-animation 10s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-8-animation 10s infinite linear";
  } else if (hand == "3") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 20) {
        alertwinEasy();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-9-animation 10s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-10-animation 10s infinite linear";
  } else if (hand == "4") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 20) {
        alertwinEasy();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-11-animation 10s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-12-animation 10s infinite linear";
  }
}
function Normal() {
  var hand = document.getElementById("hand").value;
  if (hand == "0") {
    console.log("0");
    const img1 = document.getElementById("img1");
    img1.src = "./handimage/open-hands.png";
    img1.style = "background-color: white;max-width: 300px;opacity:0;";

    const img2 = document.getElementById("img2");
    img2.src = "./handimage/closed-fist.png";
    img2.style = "background-color: white;max-width: 300px;opacity:0;";
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 40) {
        alertwinNormal();
        window.clearInterval(timer);
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
      if (currentTime >= 10 && currentTime <= 19) {
        document.getElementById("img1").style.opacity = "0";
        document.getElementById("img2").style.opacity = "1";
      } else if (currentTime < 10) {
        document.getElementById("img1").style.opacity = "1";
        document.getElementById("img2").style.opacity = "0";
      } else if (currentTime >= 20 && currentTime <= 29) {
        document.getElementById("img1").style.opacity = "1";
        document.getElementById("img2").style.opacity = "0";
      } else if (currentTime >= 30 && currentTime <= 39) {
        document.getElementById("img1").style.opacity = "0";
        document.getElementById("img2").style.opacity = "1";
      }
      console.log(currentTime);
    };
    var timer = window.setInterval(countItDown, 1000);
  } else if (hand == "1") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 40) {
        alertwinNormal();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-5-animation 6s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-6-animation 6s infinite linear";
  } else if (hand == "2") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 40) {
        alertwinNormal();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-7-animation 6s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-8-animation 6s infinite linear";
  } else if (hand == "3") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 40) {
        alertwinNormal();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-9-animation 6s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-10-animation 6s infinite linear";
  } else if (hand == "4") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 40) {
        alertwinNormal();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-11-animation 6s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-12-animation 6s infinite linear";
  }
}

function Hard() {
  var hand = document.getElementById("hand").value;
  if (hand == "0") {
    console.log("0");
    const img1 = document.getElementById("img1");
    img1.src = "./handimage/open-hands.png";
    img1.style = "background-color: white;max-width: 300px;opacity:0;";

    const img2 = document.getElementById("img2");
    img2.src = "./handimage/closed-fist.png";
    img2.style = "background-color: white;max-width: 300px;opacity:0;";
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 60) {
        alertwinhard();
        window.clearInterval(timer);
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
      if (currentTime >= 10 && currentTime <= 19) {
        document.getElementById("img1").style.opacity = "0";
        document.getElementById("img2").style.opacity = "1";
      } else if (currentTime < 10) {
        document.getElementById("img1").style.opacity = "1";
        document.getElementById("img2").style.opacity = "0";
      } else if (currentTime >= 20 && currentTime <= 29) {
        document.getElementById("img1").style.opacity = "1";
        document.getElementById("img2").style.opacity = "0";
      } else if (currentTime >= 30 && currentTime <= 39) {
        document.getElementById("img1").style.opacity = "0";
        document.getElementById("img2").style.opacity = "1";
      } else if (currentTime >= 40 && currentTime <= 49) {
        document.getElementById("img1").style.opacity = "1";
        document.getElementById("img2").style.opacity = "0";
      } else if (currentTime >= 50 && currentTime <= 59) {
        document.getElementById("img1").style.opacity = "0";
        document.getElementById("img2").style.opacity = "1";
      }
      console.log(currentTime);
    };
    var timer = window.setInterval(countItDown, 1000);
  } else if (hand == "1") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 60) {
        alertwinhard();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-5-animation 3s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-6-animation 3s infinite linear";
    // console.log("1");
  } else if (hand == "2") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 60) {
        alertwinhard();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-7-animation 3s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-8-animation 3s infinite linear";
  } else if (hand == "3") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 60) {
        alertwinhard();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-9-animation 3s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-10-animation 3s infinite linear";
  } else if (hand == "4") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 60) {
        alertwinNormal();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-11-animation 3s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-12-animation 3s infinite linear";
  }
}
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

function alertwinEasy() {
  Swal.fire({
    title: "<i>Good!!</i>",
    html: "You pass level: <b>Easy</b>",
    confirmButtonText: "<u>done</u>",
  });
}
function alertwinNormal() {
  Swal.fire({
    title: "<i>Great!!</i>",
    html: "You pass level: <b>Normal</b>",
    confirmButtonText: "<u>done</u>",
  });
}
function alertwinhard() {
  Swal.fire({
    title: "<i>Excellent!!</i>",
    html: "You pass level: <b>Hard</b>",
    confirmButtonText: "<u>done</u>",
  });
}
