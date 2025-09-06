// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDw4Y0SCnXJqcmXuJws1lihQ2qDmX5Rsq4",
    authDomain: "autopredict-39aae.firebaseapp.com",
    projectId: "autopredict-39aae",
    storageBucket: "autopredict-39aae.firebasestorage.app",
    messagingSenderId: "611543007708",
    appId: "1:611543007708:web:ad80d5b18735868c5d4f19"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);