const refs = {
  containerForm: document.querySelector(".login-form"),
  buttonSubmit: document.querySelector('button[type="submit"]'),
  emailInput: document.querySelector("input[type='email']"),
  passwordInput: document.querySelector("input[type='password']"),
};

refs.containerForm.addEventListener("submit", onContainerForm);

function onContainerForm(event) {
  event.preventDefault();
  if (refs.emailInput.value === "" || refs.passwordInput.value === "") {
    return alert("Please fill in all fields");
  }

  const formElements = event.currentTarget.elements;

  const userFillForm = {
    email: formElements.email.value,
    password: formElements.password.value,
  };
  console.log(userFillForm);
  // const formData = new FormData(event.currentTarget);
  refs.containerForm.reset();
}
