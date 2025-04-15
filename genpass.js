const pass = document.getElementById("password");

function genPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz_-()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = document.getElementById("passwordLength").value;

    let password = "";
 for (let i = 0; i < passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars[randomNumber];
  }
        document.getElementById("password").value = password;
 }

 function copyPassword() {
    const copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
  }