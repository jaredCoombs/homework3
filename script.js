//array of all charachters to be included in password. Upper, lower case. Numbers and special charachters.
var numberCharachters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x,', 'y', 'z'];
var upprCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharachters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+',
  '[', '{', ']', '}',];


//Need prompts for password options after users after button pushed
var length = parseInt(prompt("How many characters do you want for your new password?")
);
if (isNaN(length) === true) {
  alert("Oops! Password length must be stated as a number.")
  writePassword()

}
if (length < 8) {
  alert("Uh oh! Password must have at least 8 charachters.");

}

if (length > 128) {
  alert("Doh! Password must have less than 129 charachters");

}

var hasSpecialCharachters = confirm(
  "Click OK to confirm using special charachters."
);

var hasNumericCharacters = confirm(
  "Click OK to confirm using numeric charachters."   //if cancel selected, error var is undefined.
);

var hasUpperCaseCharachters = confirm(
  "Click OK to confirm using upper case charachters."
);

var hasLowerCaseCharachters = confirm(
  "Click to confirm using lower case charachters."
);

if (
  hasSpecialCharachters === false &&
  hasNumericCharachters === false &&
  hasUpperCaseCharachters === false &&
  hasLowerCAseCharachters === false
) {
  alert("Please select at least one charachter type");

}



//Need a way to store user input

var passwordOptions = {
  length: length,
  hasSpecialCharachters: hasSpecialCharachters,
  hasNumericCharachters: hasNumericCharachters,
  hasLowerCasedCharachters: hasLowerCasedCharachters,
  hasUpperCasedCharachters: hasUpperCasedCharachters
};
passwordOptions;
//Need a function to use at least one of  each of the charachter types
function getRandom(arr) {
  var ranIndex = Math.floor(Math.random() * arr.length);
  var ranElement = arr[ranIndex];
  return ranElement;
}

//generate password
function generatePassword() {
  var charSet = "";
  if (charType.toLowerCase === "lowercase") {
    charSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x,', 'y', 'z'];
  } else if (charType.toLowerCase === "uppercase") {
    charSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  } else if (charType.toLowerCase === "numeric") {
    charSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  } else if (charType.toLowerCase === "special") {
    charSet = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+',
      '[', '{', ']', '}',];
  }

}

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


