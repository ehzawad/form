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

var about = document.getElementById('about');
var span_about = document.getElementById('span_about');

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

function isOptionChecked(element)
{
    const radios = document.getElementsByName(element);
    let value = false;

    for (let i = 0; i < radios.length; i++)
    {
        if (radios[i].checked)
        {
            value = true;
            break;
        }
    }
    return value;
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
  emptyCheck(about, span_about);

  if (isOptionChecked('sex') == false)
  {
    window.alert('Please fill in your Sex!!');
    return false;
  }

  if (isOptionChecked('user_language') == false)
  {
    window.alert('Please select at least one language option!!');
    return false;
  }

}, false);


