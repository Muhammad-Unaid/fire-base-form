import { auth, createUserWithEmailAndPassword } from "./config.js";

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Toggle Panels
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Form Fields
let uname = document.getElementById("name");
let uemail = document.getElementById("email");
let upassword = document.getElementById("password");

// Signup Event
document.getElementById("signup").addEventListener("click", () => {
  console.log("User details:", uname.value, uemail.value, upassword.value);

  createUserWithEmailAndPassword(auth, uemail.value, upassword.value)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log("User signed up:", user);
      
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});
