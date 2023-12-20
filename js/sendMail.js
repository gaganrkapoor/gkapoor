function emailsend()
{
    var varuserName =document.getElementById('gkname').value;
    var varemail = document.getElementById('gkemail').value;
    var varsubject = document.getElementById('gksubject').value;
    var varmessage = document.getElementById('gkmessage').value;
    var varmessagebody = "Name:  " + varuserName +
    "<br/> Email: " + varemail +
    "<br/> Message: " + varmessage;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pumpkinhat.ltd@gmail.com",
        Password : "4FF269589ECDD729D79BFCF09A2B4571EEE3",
        To : 'pumpkinhat.ltd@gmail.com',
        From : "pumpkinhat.ltd@gmail.com",
        Subject : varsubject,
        Body : varmessagebody
    }).then(
      message => {
       if (message == 'OK') {
        swal("Good job!", "Your message has been sent!", "success");
       }
       else {swal("Oops!", "There was an internal error, please try again later !", "error");}
      }
    );
}