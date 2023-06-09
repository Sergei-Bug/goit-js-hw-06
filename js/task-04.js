const refs = {
  btnDecrementRef: document.querySelector("[data-action=decrement]"),
  btnIncrementRef: document.querySelector("[data-action=increment]"),
  valueRef: document.querySelector("#value"),
};

let counterValue = 0;

refs.btnDecrementRef.addEventListener("click", onClickBtnDecrement);
refs.btnIncrementRef.addEventListener("click", onClickBtnIncrement);

function onClickBtnDecrement() {
  counterValue -= 1;
  refs.valueRef.textContent = counterValue;
}

function onClickBtnIncrement() {
  counterValue += 1;
  refs.valueRef.textContent = counterValue;
}
