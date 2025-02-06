const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// import { createUserWithEmailAndPassword, auth } from "./config.js";

let uname = document.getElementById("name");
let uemail = document.getElementById("email");
let upassword = document.getElementById("password");

document.getElementById("signup").addEventListener("click", () => {

	console.log("user",uname.value,
		uemail.value,
		upassword.value)
//   createUserWithEmailAndPassword(
//     auth,
//     uname.value,
//     uemail.value,
//     upassword.value
//   )
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
// 	  console.log(user)
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
// 	  console.log(errorMessage)
//       // ..
//     });
});
