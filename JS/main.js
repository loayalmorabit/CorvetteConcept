/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var headerElements = document.getElementById("header");

  if (prevScrollpos > currentScrollPos) {
    headerElements.style.top = "0";
  } else {
    headerElements.style.top = "-16rem";
  }

  prevScrollpos = currentScrollPos;
};

const navMenu = document.getElementById("nav-list"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

/* Menu hidden */
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

/*=============== LOGIN ===============*/
const login = document.getElementById("wrapper"),
  loginButton = document.getElementById("login-btn"),
  loginClose = document.getElementById("login-close");

/* Login show */
loginButton.addEventListener("click", () => {
  login.classList.add("show-login");
});

/* Login hidden */
loginClose.addEventListener("click", () => {
  login.classList.remove("show-login");
});
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.addEventListener("click", () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.addEventListener("click", () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};
