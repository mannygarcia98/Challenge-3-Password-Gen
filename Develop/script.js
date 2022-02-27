//Global variables
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "["];

function generatePassword() {
  var password = [];
  var selectedChar = [];
  var passwordLength = parseInt(prompt("How long would you like your password to be? Enter a number 8-128."));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Hmm. That number doesn't seem to be between 8 and 128. Let's try that again.");
    return generatePassword();
  }
  if (isNaN(passwordLength)) {
    alert("Oops. You may have entered something other than a number. Let's try that again.");
    return generatePassword();
  }

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    window.alert("You must select 'OK' to at least one character type to generate your secure password. Let's try that again.");
    return generatePassword();
  }

  if (includeLowercase) selectedChar = selectedChar.concat(lowerCaseChar);

  if (includeUppercase) selectedChar = selectedChar.concat(upperCaseChar);

  if (includeNumbers) selectedChar = selectedChar.concat(numberChar);

  if (includeSpecial) selectedChar = selectedChar.concat(specialChar);

  //will choose a random character in the array of possible characters and adds one character in each iteration to a password array until it meets the users desired password length.
  for (var i = 0; i < passwordLength; i++) {
    var randomArrayPosition = Math.floor(Math.random() * selectedChar.length);
    var eachCharacter = selectedChar[randomArrayPosition];
    password.push(eachCharacter);
  }
  //converts the password array of random characters into a string with no spaces of commas
  return password.join("");
}

//First begins the generatePassword function then:
//  Dynamically adds the password to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Waits for a click to begin the prompts
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
