// Assignment code here
// Step 1. declare variables for characters that can be used in password
//lowercase, uppercase, numbers, symbols

//prettier-ignore
var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//prettier-ignore
var upperCaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//prettier-ignore
var specialChar = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","["];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
