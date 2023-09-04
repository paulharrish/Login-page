const enteredname = document.getElementById("login-username");
const enteredPassword = document.getElementById("login-password");
const create_account_button = document.getElementById("create_account_button");
const login_button = document.getElementById("login_button");
const loginback_text = document.getElementById("a");
let enteredname_val = "";
let enteredPassword_val = "";

document
  .getElementById("login-username")
  .addEventListener("change", (event) => {
    enteredname_val = event.target.value;
  });

document
  .getElementById("login-password")
  .addEventListener("change", (event) => {
    enteredPassword_val = event.target.value;
  });

create_account_button.addEventListener("click", (a) => {
  a.preventDefault();
  createaccount_func();
  txt4.innerText = "Already have an account?";
  txt5.innerText = "Login";
  txt4.appendChild(txt5);
});

function createaccount_func() {
  document.getElementById("loginpage_rightdiv").className =
    "loginsection_hidden";
  document.getElementById("signuppage_rightdiv").className =
    "signuppage_visible";
  setneutral(enteredname);
  setneutral(enteredPassword);
}

loginback_text.addEventListener("click", () => {
  document.getElementById("loginpage_rightdiv").className = "loginpage_visible";
  document.getElementById("signuppage_rightdiv").className =
    "signuppage_hidden";
  document.getElementById("invalid-msg").style.visibility = "hidden";
});

function createUserAccount(Username, Email, Password) {
  if (isUsernametaken(Username)) {
    seterror(username, "Username already taken.Try a diffrent one.");
  } else {
    var existingUsersJSON = localStorage.getItem("users");
    var existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];
    let user = {
      username: Username,
      password: Password,
      email: Email,
    };

    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    Username = "";
    Email = "";
    Password = "";
    username.value = "";
    password.value = "";
    email.value = "";

    txt4.innerText = "Account created sucessfully!";
    txt5.innerText = "Login";
    txt4.appendChild(txt5);
  }
}

login_button.addEventListener("click", (e) => {
  e.preventDefault();
  attemptlogin();
});

function attemptlogin() {
  if (enteredname_val === "" && enteredPassword_val === "") {
    seterror(enteredname, "Please enter the username");
    seterror(enteredPassword, "please enter the password");
    return;
  } else if (enteredPassword_val === "" || enteredname_val === "") {
    if (enteredname_val === "") {
      seterror(enteredname, "please enter te username");
    } else {
      seterror(enteredPassword, "please enter the password");
    }
  } else if (checkcredentials(enteredname_val, enteredPassword_val)) {
    window.location.assign("../API/api.html");
  } else {
    document.getElementById("invalid-msg").style.visibility = "visible";
    enteredname.value = "";
    enteredPassword.value = "";
    enteredname_val = "";
    enteredPassword_val = "";
    enteredname.addEventListener("input", () => {
      document.getElementById("invalid-msg").style.visibility = "hidden";
    });
  }
}

function checkcredentials(enteredname, enteredPassword) {
  var existingUsersJSON = localStorage.getItem("users");
  if (existingUsersJSON) {
    var existingUsers = JSON.parse(existingUsersJSON);
    console.log(existingUsers);
    for (var i = 0; i < existingUsers.length; i++) {
      if (
        enteredname === existingUsers[i].username &&
        enteredPassword === existingUsers[i].password
      ) {
        return true;
      }
    }
    return false;
  }
}

document.getElementById("signup_txt").addEventListener("click", () => {
  createaccount_func();
});

function isUsernametaken(usernameToCheck) {
  var existingUsersJSON = localStorage.getItem("users");
  if (existingUsersJSON) {
    var existingUsers = JSON.parse(existingUsersJSON);
    for (var i of existingUsers) {
      if (usernameToCheck === i.username) {
        console.log("Username is already taken.");
        return true;
      }
    }
  } else {
    return false;
  }
}
