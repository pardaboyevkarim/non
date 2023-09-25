let elInputOne = document.querySelector(".form-input");
let elResult = document.querySelector(".result");
let elResultt = document.querySelector(".resultt");
let elbtrest = document.querySelector(".resett");
let elSelect = document.querySelector(".select");

function getFetch() {
  let x = +elSelect.value;
  let a = +elInputOne.value;
  let b = a / x;

  if (x == 12500) {
    elResultt.textContent = a + ": SO'M";
    elResult.textContent = b.toFixed(2) + ": EN ";
  } else if (x == 13050) {
    elResultt.textContent = a + ": SO'M";
    elResult.textContent = b.toFixed(2) + ": YEV ";
  } else if (x == 170) {
    elResultt.textContent = a + ": SO'M";
    elResult.textContent = b.toFixed(2) + ": RU ";
  }
}

elInputOne.addEventListener("keyup", getFetch);
elSelect.addEventListener("change", getFetch);

elbtrest.addEventListener("click", function () {
  elResult.textContent = 0;
  elResultt.textContent = 0;
});
