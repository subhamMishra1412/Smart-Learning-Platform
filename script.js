// ==========================
// 🔥 FIREBASE CONFIG
// ==========================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByvV7dtN68WksQtK81GscJYUDIrtCNqmQ",
  authDomain: "smart-learning-platform-f3dc3.firebaseapp.com",
  projectId: "smart-learning-platform-f3dc3",
  storageBucket: "smart-learning-platform-f3dc3.firebasestorage.app",
  messagingSenderId: "835128096202",
  appId: "1:835128096202:web:7d0307730b5208176f8b33",
  measurementId: "G-N1WXTS81RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// ==========================
// 🔐 LOGIN FUNCTION
// ==========================

window.login = function () {
  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;

  if (!email || !password) {
    document.getElementById("auth-message").innerText =
      "Please enter email and password.";
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("auth-message").innerText = error.message;
    });
};

// ==========================
// 📝 SIGNUP FUNCTION
// ==========================

window.signup = function () {
  const email = document.getElementById("signupEmail")?.value;
  const password = document.getElementById("signupPassword")?.value;

  if (!email || !password) {
    document.getElementById("auth-message").innerText =
      "Please enter email and password.";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("auth-message").innerText =
        "Signup successful! Please login.";
    })
    .catch((error) => {
      document.getElementById("auth-message").innerText = error.message;
    });
};

// ==========================
// 🚪 LOGOUT FUNCTION
// ==========================

window.logoutUser = function () {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};

// ==========================
// 🔐 AUTO REDIRECT (Protected Pages)
// ==========================

window.checkAuth = function () {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
    }
  });
};