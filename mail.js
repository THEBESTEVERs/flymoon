function sendMail() {
   let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      message : document.getElementById("message").value,
   }
   emailjs.send("service_79kpjfi","template_7lk62i7", parms).then(document.querySelector('.mail-sended').classList.add('show2'));
}


