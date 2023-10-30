const inputs = document.querySelectorAll(".input");
const form = document.querySelector(".formulario");
let inputsValidated = false;

inputs.forEach((element) => {
  element.addEventListener("input", (event) => {
    validateInput(event);
  });
});

form.addEventListener("submit", () => {
  submitForm();
});

function validateInput(event) {
  if (event.target.value.length <= 3) {
    event.target.nextElementSibling.innerHTML = `O campo ${event.target.name} deve ter pelo menos 3 caracteres.`;
    event.target.nextElementSibling.style = "color: red;";
    inputsValidated = false;
  } else {
    event.target.nextElementSibling.innerHTML = "";
    inputsValidated = true;
  }
  console.log(inputsValidated);
}

function submitForm() {
  if (inputsValidated) alert("Mensagem enviada com sucesso");
  else alert("Favor preencher os campos corretamente");
}
