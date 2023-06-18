import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const loginEmail = loginForm.email.value;
  const loginPassword = loginForm.password.value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert("Error: " + errorMessage);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    const userInfoDiv = document.getElementById("user-info");
    userInfoDiv.innerText = `Bienvenido, ${user.displayName}`;
  }
});

