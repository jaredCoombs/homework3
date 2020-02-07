//array of all charachters to be included in password. Upper, lower case. Numbers and special charachters.


//Need prompts for password options after users after button pushed

//Need a way to store user input

//Need a function to use at least one of the charachter types



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

