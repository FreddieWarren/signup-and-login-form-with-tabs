let signupBtn = document.getElementById("signup-btn");
let loginBtn = document.getElementById("login-btn");

let signUp = document.getElementById("signupForm");
let logIn= document.getElementById("loginForm");

// function showSignin() {
signupBtn.addEventListener(("click"),() => {
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
  signUp.classList.remove("hidden");
  logIn.classList.add("hidden");
})

loginBtn.addEventListener(("click"),() => {
  signupBtn.classList.remove("active");
  loginBtn.classList.add("active");
  signUp.classList.add("hidden");
  logIn.classList.remove("hidden");
})


// function showSignup() {
//   var signUp = document.getElementById("signupForm");
//   var logIn= document.getElementById("loginForm");

//   if (signUp.style.display === "none") {
//     signUp.style.display = "block";
//     logIn.style.display = "none";
//   } else {
//     signUp.style.display = "none";
//   }
// }

// function showLogin() {
//   var signUp = document.getElementById("signupForm");
//   var logIn= document.getElementById("loginForm");

//   if (logIn.style.display === "none") {
//     logIn.style.display = "block";
//     signUp.style.display = "none";
//   } else {
//     logIn.style.display = "none";
//   }
// }
// need to add onclicks nack to buttons!
// <button onclick="showSignup()">
// <button onclick="showLogin()">


// if (signUp.style.display === "none") {
//     signUp.style.display = "block";
//     logIn.style.display = "none";
//   } else {
//     signUp.style.display = "none";
//   }
