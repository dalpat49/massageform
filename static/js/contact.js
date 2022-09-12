function validateForm() {

    let name = document.forms["ContactForm"]["name"].value;
    let email = document.forms["ContactForm"]["email"].value;
    let number = document.forms["ContactForm"]["number"].value;
    let company = document.forms["ContactForm"]["company"].value;
    let message = document.forms["ContactForm"]["message"].value;

    if (name == "") {
       let error = "Name shoule be filled";
       alert(error)
      return false;
    }

    if (email == "") {
        let error = "email shoule be filled";
        alert(error)
      return false;
    }
    if (number == "") {
        let error = "Please write your number ";
        alert(error)
      return false;
    }
    if (company == "") {
        let error = "Please provide your company name";
        alert(error)
      return false;
    }
    if (message == "") {
        let error = "Please Type your message";
        alert(error)
      return false;
    }
  }