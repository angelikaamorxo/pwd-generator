// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePasswword() {
  
  // Variable declaration 
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numChar = "0123456789";
    let specialChar = "!@#$%^&*()_-=+][}{|;:'<>/.,";
    let chosenChar = "";
    let finalPwd = "";

    // Begins the password generator
    // Asks user for password length between 8-128 characters
    let pwdLength = window.prompt("How long would you like your password to be? (8-128 characters)", "Enter a number");
    while (pwdLength < 8 || pwdLength > 128) {
      if (!pwdLength) {
        finalPwd = "Acitvity cancelled";
        return finalPwd;
      }
      window.alert("Enter a number between 8 - 128");
      pwdLength = window.prompt("How long would you like your password to be? (8-128 characters)");
    }

    do {
      if (pwdLength) {
        let YupperCase = window.confirm("Would you like uppercase letters?");
        if (YupperCase) {
          chosenChar = upperCase.concat(chosenChar);
        }

        let YlowerCase = window.confirm("Would you like lowercase letters?");
        if (YlowerCase) {
          chosenChar = lowerCase.concat(chosenChar);
        }

        let YspecialChar = window.confirm("Would you like special characters?");
        if (YspecialChar) {
          chosenChar = specialChar.concat(chosenChar);
        }

        let YnumChar = window.confirm("Would you like to add numbers?");
        if (YnumChar) {
          chosenChar = numChar.concat(chosenChar);
        }
      }
    } 
  

  while (finalPwd.length < pwdLength) {
    let randomNum = Math.floor(Math.random() * chosenChar.length);
    let randomChar = chosenChar.charAt(randomNum);
    finalPwd = finalPwd + randomChar;
  }
  return finalPwd;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

