const pass = document.getElementById("password");

function genPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz_-()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = document.getElementById("passwordLength").value;

    let password = "";
 for (let i = 0; i < passwordLength; i++) {
   let randomNumber = Math.floor(Math.random() * chars.length);
   password += chars[randomNumber];
  }
  if (passwordLength > 20){
    alert("Error! Max characters:20")
    return
   }
   else if(passwordLength < 6){
    alert("Error! Min characters:6")
    return
   }
        document.getElementById("password").value = password;
 }

 function copyPassword() {
    const copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
  }