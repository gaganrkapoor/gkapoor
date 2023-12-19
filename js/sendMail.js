function emailsend()
{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pumpkinhat.ltd@gmail.com",
        Password : "4FF269589ECDD729D79BFCF09A2B4571EEE3",
        To : 'gaganrkapoor@gmail.com',
        From : "pumpkinhat.ltd@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}