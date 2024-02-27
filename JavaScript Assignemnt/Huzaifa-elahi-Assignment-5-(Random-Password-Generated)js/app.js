var passwordrandom = document.getElementById("passwordrandom");
function generatePassword(length) {
  const charset = "BCDEFGHIADEELJKLMNbcdefghijkmnopqrSt0123456789*@+$&#-/?><=";
  var password = "";
  for (var i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  console.log(password);
  passwordrandom.value = password;
  return password;
}

// update password in display
function updatePasswordDisplay() {
  const passwordLength = 10;
  const password = generatePassword(passwordLength);
  // document.getElementById("password").textContent = password;
}

// click on button
document
  .getElementById("password-btn")
  .addEventListener("click", updatePasswordDisplay);
