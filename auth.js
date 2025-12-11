// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAzzG0s0ohSwvavQP8ZYT6nnYGkke4WtzA",
    authDomain: "inganzomind.firebaseapp.com",
    projectId: "inganzomind",
    storageBucket: "inganzomind.firebasestorage.app",
    messagingSenderId: "881049543466",
    appId: "1:881049543466:web:8c5932a06871fdc7967453"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ================= SIGNUP =================
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Signup successful!");
        window.location.href = "home.html"; // redirect after signup
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// ================= LOGIN =================
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login successful!");
        window.location.href = "home.html";  // redirect after login
      })
      .catch((error) => {
        alert(error.message);
      });
  });
}

// ================= LOGOUT =================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      alert("Logged out successfully");
      window.location.href = "index.html";
    });
  });
}

