const iconMenu = document.querySelector(".menu__icon");
iconMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("_active");
  document.querySelector(".header__title").classList.toggle("_active");
  document.querySelector(".menu__body").classList.toggle("_active");
  document.body.classList.toggle("_lock");
});

let xValid = false,
  yValid = false,
  rValid = false;

// X input field validation
let selectedXRadio;
const xRadioInputs = document.querySelectorAll(".form__x-col input");
xRadioInputs.forEach((radio) => {
  radio.addEventListener("input", () => {
    selectedXRadio = radio;
    xValid = true;
    toggleSubmitBtn();
  });
});

// Y input field validation
const yInput = document.querySelector('input[name="y"]');
yInput.addEventListener("input", () => {
  const validityState = yInput.validity;
  yValid = false;
  if (validityState.valueMissing) {
    yInput.setCustomValidity("Поле не может быть пустым.");
  } else if (validityState.rangeUnderflow || validityState.rangeOverflow) {
    yInput.setCustomValidity(
      "Значение должно находиться в отрезке [-3 ... 3]."
    );
  } else {
    yValid = true;
    yInput.setCustomValidity("");
  }
  yInput.reportValidity();
  toggleSubmitBtn();
});

// R input
let selectedRBtn;
const rBtns = document.querySelectorAll(".form__r-btn");
rBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (selectedRBtn !== btn) {
      if (selectedRBtn !== undefined) {
        selectedRBtn.classList.remove("selected-btn");
      }
      btn.classList.toggle("selected-btn");
      selectedRBtn = btn;
    }
    rValid = true;
    redrawGraph(selectedRBtn.value);
    toggleSubmitBtn();
  });
});

const submitBtn = document.querySelector('.form__big-btn[type="submit"]');
function toggleSubmitBtn() {
  // check X, Y, R validity
  submitBtn.disabled = !(xValid && yValid && rValid);
}

function formatParams(params) {
  return (
    "?" +
    Object.keys(params)
      .map(function (key) {
        return key + "=" + encodeURIComponent(params[key]);
      })
      .join("&")
  );
}

const tbody = document.querySelector(".main__table tbody");

// Submit form
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent submitting

  let params = {
    x: selectedXRadio.value,
    y: yInput.value,
    r: selectedRBtn.value,
  };
  const target = "php/submit.php" + formatParams(params);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", target);

  xhr.onloadend = () => {
    if (xhr.status === 200) {
      tbody.innerHTML = xhr.response;
      let isHit = document
        .querySelector("tbody tr:last-child td:last-child span")
        .classList.contains("hit");
      printDotOnGraph(selectedXRadio.value, yInput.value, isHit);
    } else
      console.log(
        "status: ",
        xhr.status,
        "X: ", selectedXRadio.value,
        "Y: ", yInput.value,
        "R: ", selectedRBtn.value
      );
  };

  xhr.send();
});

// Clear all table data
const clearBtn = document.querySelector('.form__big-btn[type="reset"]');
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let xhr = new XMLHttpRequest();
  xhr.onloadend = () => {
    if (xhr.status === 200) {
      tbody.innerHTML = "";
    } else console.log("status: ", xhr.status);
  };
  xhr.open("POST", "php/clear.php");
  xhr.send();
});

// Get previous table data while loading page
window.onload = () => {
  let xhr = new XMLHttpRequest();
  xhr.onloadend = () => {
    if (xhr.status === 200) {
      const tbody = document.querySelector(".main__table tbody");
      tbody.innerHTML = xhr.response;
    } else console.log("status: ", xhr.status);
  };
  xhr.open("GET", "php/init.php");
  xhr.send();
};

function playSound() {
  const audio = new Audio(
    "https://www.myinstants.com/media/sounds/spasibo-kloun.mp3"
  );
  audio.play();
}
