// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters =  ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
'=', '<', '>', '/']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowerCases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompts that come up after you click button
function generatePassword() {
  var passwordLength = prompt("Enter number of characters for passowrd")
  var passwordNum = Number(passwordLength)
  if(passwordLength < 8 ) {
    alert ("Wrong amount of charcters entered, minimum amount 8")
    return
  } else if (passwordLength > 128) {
    alert ("Wrong amount of charcters entered, max 128")
    return
  } else if (isNaN (passwordNum)) {
    alert ("Numbers needed in password")
    return
  }   

  var includeNumbers = confirm("Numbers in password?")
  var includeLowerCases = confirm("Lowercases in password?")
  var includeUpperCases = confirm("Uppercases in password?")
  var includeSpecialCharacters = confirm("Special characters in password?")
  var passwordArray = [includeNumbers, includeLowerCases, includeUpperCases, includeSpecialCharacters]

  if (!passwordArray.includes(true)) {
    alert ("must select one option")
    return
  }

  let generatePassword = ""
  
  for (let i = 0; i < passwordLength; i += 1) {
    if (includeNumbers) {
      generatePassword += getRandom(numbers)
    } 
    if (includeLowerCases) {
      generatePassword += getRandom(lowerCases)
    }
    if (includeSpecialCharacters) {
      generatePassword += getRandom(specialCharacters)
    }
    if (includeUpperCases) {
      generatePassword += getRandom(upperCases)
    }
  }

  var result = generatePassword.slice(0, passwordLength)
  return result
} 

function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}