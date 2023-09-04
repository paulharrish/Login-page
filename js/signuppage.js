const signup_form = document.getElementById("signupform");
const signup = document.getElementById("createaccount_button");
const login_form = document.getElementById("loginform");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
let user = false;
let email1 = false;
let pd = false;
let username_val = "";
let email_val = "";
let password_val = "";

signup.addEventListener("click", (e) => {
  e.preventDefault();
  validateinputs();
});

login_form.addEventListener("click", (l) => {
  l.preventDefault();
});

document.getElementById("username").addEventListener("change", (event) => {
  username_val = event.target.value.trim();
});

document.getElementById("password").addEventListener("change", (event) => {
  password_val = event.target.value.trim();
});
document.getElementById("email").addEventListener("change", (event) => {
  email_val = event.target.value.trim();
});

function validateinputs() {
  if (username_val === "") {
    seterror(username, "Enter the username");
  } else {
    setsuccess(username, "Enter the username");
    user = true;
  }
  if (email_val === "") {
    seterror(email, "Email is required");
  } else if (!validateEmail(email_val)) {
    seterror(email, "Enter a valid email");
  } else {
    setsuccess(email, "Email is required");
    email1 = true;
  }
  if (password_val === "") {
    seterror(password, "Enter the password");
  } else {
    validatepassword(password_val);
  }
  if (user && email1 && pd === true) {
    createUserAccount(username_val, email_val, password_val);
  }
}

function validatepassword(passwordval) {
  const hasUppercase = /[A-Z]/.test(passwordval);
  const hasLowercase = /[a-z]/.test(passwordval);
  const hasSpecialChars = /[@#\-]/.test(passwordval);
  const hasSpecialChar = /[!$%^&*()_+{}\[\]:;<>,.?~\\/]/.test(passwordval);

  if (password_val.length < 8) {
    seterror(password, "Password should be more than 8 characters");
  } else {
    if (hasUppercase && hasLowercase && (hasSpecialChar || hasSpecialChars)) {
      if (!hasSpecialChar && hasSpecialChars) {
        setsuccess(password, "Enter the password");
        pd = true;
      } else {
        seterror(
          password,
          "special characters other than @,# and - are not allowed."
        );
      }
    } else {
      seterror(
        password,
        "Password must have at least one uppercase letter, one lowercase letter, and include the special characters @, #, and -."
      );
    }
  }
}

function seterror(element, message) {
  let inputgrp = element.parentElement;
  const errorelement = inputgrp.querySelector("p");

  element.style.borderColor = "red";
  errorelement.innerHTML = message;
  errorelement.style.visibility = "visible";
  errorelement.style.color = "red";
  element.addEventListener("input", () => {
    element.style.borderColor = "rgb(236, 234, 234)";
    errorelement.style.visibility = "hidden";
    document.getElementById("invalid-msg").style.visibility = "hidden";
  });
}

function setneutral(element) {
  let inputgrp = element.parentElement;
  const errorelement = inputgrp.querySelector("p");
  element.style.borderColor = "rgb(236, 234, 234)";
  errorelement.style.visibility = "hidden";
}

function seterror2(element1, message1) {
  let inputgrp1 = element1.parentElement;
  const errorelement1 = inputgrp1.querySelector("p");
  element1.style.borderColor = "red";

  errorelement1.innerHTML = message1;
  errorelement1.style.visibility = "visible";
  errorelement1.style.color = "red";
}

function setsuccess(element, message) {
  let inputgrp = element.parentElement;
  const errorelement = inputgrp.querySelector("p");

  errorelement.style.visibility = "hidden";
  element.style.borderColor = "lightgreen";
  element.addEventListener("input", () => {
    if (element.value.length == 0) {
      seterror2(element, message);
    }
  });
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
};
