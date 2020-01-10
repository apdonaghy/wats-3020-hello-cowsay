 document.addEventListener('DOMContentLoaded', function (event) {
   let processInput = document.getElementById("process-input");
   let displayOutput = document.getElementById("display-output");


   processInput.addEventListener('click', function (event) {
     event.preventDefault();
     // ask the user for input text
     let message = document.getElementById('message');
     if (message.value != null) {
       console.log("user entered: " + message.value);
      displayOutput.innerHTML = "Moo, " + message.value;
     }
     
   });
 });