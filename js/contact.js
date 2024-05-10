const inputs = document.querySelectorAll(".input");

function focusEvent(){
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurEvent(){
  let parent = this.parentNode;
  if(this.value == "") {
    parent.classList.remove("focus");
  }
  
}


inputs.forEach(input => {
  input.addEventListener("focus", focusEvent);
  input.addEventListener("blur", blurEvent);
})


function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var mess = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;


  error_message.style.padding = "10px";

  if(name.length <5) {
    text = "Please enter valid Name"
    error_message.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if(subject.length < 10) {
    text = "Please Enter Subject";
    error_message.innerHTML = text;
    return false;
  }

  if(mess.length < 25) {
    text = "Please type a message"
    error_message.innerHTML = text;
    return false;
  }


  return true;
}
