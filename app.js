import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "./config.js";

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
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

// 🔹 Signup Event
document.getElementById("signup").addEventListener("click", () => {
  if (!uemail.value || !upassword.value) {
    // alert("Please enter all fields");
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please enter all fields!",
    }); 
    return;
  }

  createUserWithEmailAndPassword(auth, uemail.value, upassword.value)
    .then((userCredential) => {
      console.log("User signed up:", userCredential.user);
      // alert("Signup successful! Now you can login.");
      Swal.fire({
        icon: "success",
        title: "Signup Successful!",
        text: "Now you can login.",
      });
    })
    .catch((error) => {
      console.error("Signup Error:", error.message);
      // alert(error.message);
      Swal.fire({
        icon: "error",
        title: "Signup Failed!",
        text: error.message,
      });
    });
});

//  SignIn Event (Fixed)
document.getElementById("login").addEventListener("click", (e) => {
  e.preventDefault()
  if (!loginEmail.value || !loginPassword.value) {
    // alert("Please enter email and password");
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please enter email and password!",
    });
    return;
  }

  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      console.log("User signed in:", userCredential.user);
      // alert("Login successful!");
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Redirecting to dashboard...",
        timer: 2000,
        showConfirmButton: false,
      });

      // Redirect to dashboard
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("Login Error:", error.message);
      alert(error.message);
    });
});

//  Check Authentication State (Redirect if logged in)
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user);
    window.location.href = "dashboard.html"; // Redirect logged-in user
  }
});
