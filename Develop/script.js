// Assignment code here

//✅ Step 1. declare variables for characters that can be used in password
// Step 2. write prompts
// Step 3. make prompts change the generated password logic

//pseudocode
//1. when a user clicks the generate password button a prompt appears "How many characters do you want in your password? Please enter a number from 8-128"
//3a. if a user enters a length below 8 characters/or above 128 send an alert which reminds them it must be between 8-128
//3b. if a user enters anything that's NaN, "your selection included at least one character that isn't a number. Please enter only numbers."
//3c. otherwise bind their selection to a variable called passwordLength
//4. the user is asked if they want lowercase, uppercase, numbers, and symbols through a series of prompts
//5a. if a user does not answer 'ok' for any of these options then send an alert "a password can't be generated without any characters"
//-- need to figure out a way to add their selections to variables which call the corresponding array.
// -- if a user says "ok" to lowercase letters, the generatePassword function runs and randomly selects from lowerCaseChar array. passwordCriteria variable?
//if user selects multiple, the corresponding arrays must be concatenated before the characters are randomly selected.
//6. The way the generatePassword function stands now, it will spit out all 82 characters in the concatenated arrays.
//I need a loop that will grab only one character at a time from the array and loop for each character they want in the characterLength

var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "["];
var generatedPass = "";

// generate password function; run when user presses button
function generatePassword() {
  //asks the user for their password length
  var passwordLength = parseInt(prompt("How long would you like your password to be? Enter a number 8-128."));
  //need a conditional statement to keep user from entering
  //✅ a. a number less than 8 or greater than 128
  //✅ b. anything other than a number (words, symbols)
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Hmm. That number doesn't seem to be between 8 and 128. Let's try that again.");
    return generatePassword();
  }

  if (isNaN(passwordLength)) {
    alert("Oops. You may have entered something other than a number. Let's try that again.");
    return generatePassword();
  }
  //need a statement that will take these true or false values and use them as password criteria that will combine the selected arrays.
  //ex. if includeLowercase is true add lowerCaseChar array to selectedChar

  //need an alert if user declines all criteria
  //if includeLowercase,includeUppercase,includeNumbers,includeSpecial are all false alert user "You must enter 'OK' for at least one character type to generate your secure password. Let's try that again."
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  //create variable for generated password
  // generatedPass = lowerCaseChar;
  // return generatedPass.concat(uppercaseChar);
}

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
