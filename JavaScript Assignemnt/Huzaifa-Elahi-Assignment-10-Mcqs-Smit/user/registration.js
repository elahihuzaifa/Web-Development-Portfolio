const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signInButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);

function saveData() {
  let fullName = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  var fullnameValue = fullName.value;
  var emailValue = email.value;
  var passwordValue = password.value;

  // Check if any of the fields are empty
  if (!fullnameValue || !emailValue || !passwordValue) {
    alert("Please fill in all fields");
    return; // Don't proceed with submission
  }

  let user_records = JSON.parse(localStorage.getItem("users")) || [];
  if (
    user_records.some((v) => {
      return v.email === emailValue;
    })
  ) {
    alert("Duplicate Data");
  } else {
    user_records.push({
      name: fullnameValue,
      email: emailValue,
      password: passwordValue,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
    alert("Register");
  }
}

function signinlog() {
  let emailSignin = document.getElementById("emailsingin").value;
  let passwordSignin = document.getElementById("passwordsignin").value;

  console.log(emailSignin.value);
  if (!emailSignin || !passwordSignin) {
    alert("Please fill in all fields");
    return; // Don't proceed with submission
  }

  let user_records = JSON.parse(localStorage.getItem("users")) || [];
  let flag = user_records.some(
    (v) => v.email === emailSignin && v.password === passwordSignin
  );

  if (flag) {
    console.log("Login successful");
    alert("login Succes");
    console.log("Redirecting...");
    setTimeout(() => {
      window.location.href = "../dashboard/index.html";
    }, 2000);
  } else {
    console.log("Login unsuccessful");
    alert("Login unsuccessful");
  }
}

function Redirection() {
  window.location.href = "../user/loginform.html";
}

function logout() {
  setTimeout(Redirection, 2000);
}
