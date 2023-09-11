const audioHit = new Audio("./sound/2945.mp3");
const audioMiss = new Audio("./sound/39774.mp3");
const audioMiss2 = new Audio("./sound/2946.mp3");
const audioRicochet = new Audio("./sound/2837.mp3");
const audioBoom = new Audio("./sound/2343.mp3");
const audioMainTheme = new Audio("./sound/39750.mp3");
const audioDestroyed = new Audio("./sound/999.mp3");
const audioThank = new Audio("./sound/spasibo-kloun.mp3");
const audioAnvil = new Audio("./sound/anvil_land.mp3");
const audioClick = new Audio("./sound/click.mp3");

var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "./images/povestka.jpeg";
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

const button = document.getElementById("start-anim");
const box = document.querySelector("body");

button.addEventListener("click", function () {
  box.classList.add("animated");
  document.querySelector(".anarchy").classList.remove("anarchy");
  audioMainTheme.play();

  const form = document.querySelector(".form");

  // Define a function to send the XMLHttpRequest with random values
  function sendRequest() {
    let params = {
      x: Math.floor(Math.random() * (3 - -5 + 1)) + -5, // random int between -5 and 3
      y: Math.floor(Math.random() * (5 - -3 + 1)) + -3, // random int between -3 and 5
      r: Math.floor(Math.random() * 5) + 1, // random int from 1 to 5
    };
    const target = "php/submit.php" + formatParams(params);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", target);

    xhr.onloadend = () => {
      if (xhr.status === 200) {
        tbody.innerHTML = xhr.response;
        let isHit = document;
        document.querySelectorAll("tbody tr:last-child td:last-child span")[1]
          .className;
        if (
          isHit.querySelectorAll("tbody tr:last-child td:last-child span")[1]
            .className == "hit"
        ) {
          playHit();
        } else if (
          isHit.querySelectorAll("tbody tr:last-child td:last-child span")[1]
            .className == "miss"
        ) {
          playMiss();
        }
        printDotOnGraph(
          params.x,
          params.y,
          isHit.querySelectorAll("tbody tr:last-child td:last-child span")[1]
            .className
        );
      } else
        console.log(
          "status: ",
          xhr.status,
          "X: ",
          params.x,
          "Y: ",
          params.y,
          "R: ",
          params.r
        );
    };

    xhr.send();
  }

  // Call the sendRequest function every 0.8s
  setInterval(sendRequest, 800);
});

function playSpasibo() {
  audio.play();
}

function playHit() {
  if (Math.random > 0.6) {
    audioDestroyed.play();
  } else {
    audioThank.play();
    audioHit.play();
  }
}

function playMiss() {
  if (Math.random() > 0.2) {
    audioMiss.play();
  } else if (Math.random() > 0.4) {
    audioMiss2.play();
  } else {
    audioRicochet.play();
  }
}

function playBoom() {
  audioBoom.play();
}

function playMainTheme() {
  audioMainTheme.play();
}

function playAnvil() {
  audioAnvil.play();
}

function playClick() {
  audioClick.play();
}
