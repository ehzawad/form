var userid = document.getElementById('userid');
var span_userid = document.getElementById('span_userid');

var password = document.getElementById('password');
var span_password = document.getElementById('span_password');

var uname = document.getElementById('user_name');
var span_uname = document.getElementById('span_name');

var address = document.getElementById('address');
var span_username = document.getElementById('span_address');

var zip = document.getElementById('zip');
var span_zip = document.getElementById('span_zip');

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

function emptyCheck(NodeId, NodeSpan) {
  if (NodeId.value === "") {
   NodeSpan.innerHTML = `Your ${NodeId.name} is empty`;
    event.preventDefault();
  }
}

submitButton.addEventListener("click", function (event) {
  if (!email.validity.valid) {
    error.innerHTML = "I expect an email, darling!";
    error.className = "error active";
    event.preventDefault();
  }

  emptyCheck(userid, span_userid);
  emptyCheck(password, span_password);
  emptyCheck(uname, span_uname);
  emptyCheck(address, span_address);
  emptyCheck(zip, span_zip);

  // if (userid.value === "") {
  //  span_userid.innerHTML = `Your ${userid.name} is empty`;
  //   event.preventDefault();
  // }
  //
  // if (password.value === "") {
  //  span_password.innerHTML = "Your password is empty";
  //   event.preventDefault();
  // }

}, false);

