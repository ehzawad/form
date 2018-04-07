var email = document.getElementById('mail');
var submitButton = document.getElementById('myButton');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    error.innerHTML = "";
    error.className = "error";
    event.preventDefault();
  }
}, false);

submitButton.addEventListener("click", function (event) {
  if (!email.validity.valid) {
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";
    event.preventDefault();
  }
}, false);
