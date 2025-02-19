// Assignment Code
const generateBtn = document.querySelector("#generate");

// Generate the password

function generatePassword() {
  let passwordLength = prompt(
    "Enter the length of your password (between 8 and 128 characters):"
  );
  passwordLength = parseInt(passwordLength); // Ensure it's an integer

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

  let includeLowercase = confirm("Do you want to include lowercase letters?");
  let includeUppercase = confirm("Do you want to include uppercase letters?");
  let includeNumbers = confirm("Do you want to include numbers?");
  let includeSpecialChars = confirm(
    "Do you want to include special characters?"
  );

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumbers &&
    !includeSpecialChars
  ) {
    alert("You must select at least one character type.");
    return "";
  }

  let characters = "";
  if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) characters += "0123456789";
  if (includeSpecialChars) characters += "!@#$%^&*()_+-=[]{}|;:,.<>?/";

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
