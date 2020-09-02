//Form Validation for the page

function validate() {
    var x = document.forms["myForm"]["email"].value;
    var errorText = document.getElementById('error-id');
    var message;

    if (x == 0 || x.indexOf('@') == -1 || x.length == 6) {
      message = 'Enter A valid Email Address'
      errorText.innerHTML = message

      return false;
    }

   message = "Your Email was received successfully for our future updates"
   errorText.innerHTML = message

    return true
  }

  function validateForm() {
    var x = document.forms["mobForm"]["mobEmail"].value;
    var errorText = document.getElementById('error-Id');
    var message;

    if (x == 0 || x.indexOf('@') == -1 || x.length == 6) {
      message = 'Enter A valid Email Address'
      errorText.innerHTML = message

      return false;
    }

   message = "Your Email was received successfully for our future updates"
   errorText.innerHTML = message

    return true
  }