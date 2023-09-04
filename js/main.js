const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

const leftDiv = document.createElement("div");
leftDiv.className = "left";
container.appendChild(leftDiv);

const main_txt = document.createElement("p");
main_txt.className = "main_txt";
main_txt.innerText =
  "We've been using Untitled to kick start every new project and can't imagine working without it.";
leftDiv.appendChild(main_txt);

const loginpage_rightdiv = document.createElement("div");
loginpage_rightdiv.className = "loginpage_visible";
loginpage_rightdiv.id = "loginpage_rightdiv";
container.appendChild(loginpage_rightdiv);

const loginbox = document.createElement("div");
loginbox.className = "loginbox";
loginbox.id = "loginbox";
loginpage_rightdiv.appendChild(loginbox);

const login_heading = document.createElement("h2");
login_heading.className = "login_heading";
login_heading.textContent = "Login";
loginbox.appendChild(login_heading);

const loginform = document.createElement("form");
loginform.action = "#";
loginform.className = "form";
loginform.autocomplete = "off";
loginform.id = "loginform";
loginbox.appendChild(loginform);

const loginfields = [
  { id: "login-username", placeholder: "Enter your name", type: "text" },
  { id: "login-password", placeholder: "Password", type: "password" },
];

loginfields.forEach((loginfield) => {
  const logintxtfieldDiv = document.createElement("div");
  logintxtfieldDiv.className = "txtfield";

  const logininput = document.createElement("input");
  logininput.type = loginfield.type;
  logininput.id = loginfield.id;
  logininput.placeholder = loginfield.placeholder;

  const loginerrorMessage = document.createElement("p");
  loginerrorMessage.textContent = " login Error message";

  loginform.appendChild(logintxtfieldDiv);
  logintxtfieldDiv.appendChild(logininput);
  logintxtfieldDiv.appendChild(loginerrorMessage);
});

const invalidcredentials_message = document.createElement("span");
invalidcredentials_message.className = "invalid-msg";
invalidcredentials_message.id = "invalid-msg";
invalidcredentials_message.textContent =
  "Invalid credentials.Not a registered user?";

const signup_txt = document.createElement("a");
signup_txt.className = "invalid-msg";
signup_txt.id = "signup_txt";
signup_txt.textContent = "sign Up";

loginform.appendChild(invalidcredentials_message);
invalidcredentials_message.appendChild(signup_txt);

const loginbuttons = [
  { text: "Login", id: "login_button" },
  { text: "Create an account", id: "create_account_button" },
];

loginbuttons.forEach((loginbutton) => {
  const loginbuttonsDiv = document.createElement("div");
  loginbuttonsDiv.className = "buttons";

  const loginbuttonElement = document.createElement("button");
  loginbuttonElement.type = "submit";
  loginbuttonElement.textContent = loginbutton.text;

  if (loginbutton.id) {
    loginbuttonElement.id = loginbutton.id;
  }
  loginform.appendChild(loginbuttonsDiv);
  loginbuttonsDiv.appendChild(loginbuttonElement);
});

const signuppage_rightdiv = document.createElement("div");
signuppage_rightdiv.className = "signuppage_hidden";
signuppage_rightdiv.id = "signuppage_rightdiv";
container.appendChild(signuppage_rightdiv);

const formboxDiv = document.createElement("div");
formboxDiv.className = "formbox";
signuppage_rightdiv.appendChild(formboxDiv);

const txt1Form = document.createElement("p");
txt1Form.className = "login_heading";
txt1Form.textContent = "Create an account";
formboxDiv.appendChild(txt1Form);

const txt2Form = document.createElement("h5");
txt2Form.className = "txt2";
txt2Form.textContent = "Let's get started with your 30 day free trial";
formboxDiv.appendChild(txt2Form);

const signupform = document.createElement("form");
signupform.action = "#";
signupform.className = "form";
signupform.autocomplete = "off";
signupform.id = "signupform";
formboxDiv.appendChild(signupform);

const fields = [
  { id: "username", placeholder: "Name", type: "text" },
  { id: "email", placeholder: "Email", type: "email" },
  { id: "password", placeholder: "Password", type: "password" },
];

fields.forEach((field) => {
  const txtfieldDiv = document.createElement("div");
  txtfieldDiv.className = "txtfield";

  const input = document.createElement("input");
  input.type = field.type;
  input.id = field.id;
  input.placeholder = field.placeholder;

  const errorMessage = document.createElement("p");
  errorMessage.textContent = "Error mssage";

  signupform.appendChild(txtfieldDiv);
  txtfieldDiv.appendChild(input);
  txtfieldDiv.appendChild(errorMessage);
});

const buttons = [{ text: "Create account", id: "createaccount_button" }];

buttons.forEach((button) => {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons";

  const buttonElement = document.createElement("button");
  buttonElement.type = "submit";
  buttonElement.textContent = button.text;

  if (button.id) {
    buttonElement.id = button.id;
  }
  signupform.appendChild(buttonsDiv);
  buttonsDiv.appendChild(buttonElement);
});

const txt4 = document.createElement("p");
txt4.className = "fullstack_text";
txt4.innerText = "Already have an account?";
formboxDiv.appendChild(txt4);

const txt5 = document.createElement("a");
txt5.className = "a";
txt5.id = "a";
txt5.textContent = "Login";
txt4.appendChild(txt5);
