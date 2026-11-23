<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAYIjQxpZTyeD9BE4dUGMPEWGGvQ0PTcF4",
    authDomain: "find-a-date-d4886.firebaseapp.com",
    projectId: "find-a-date-d4886",
    storageBucket: "find-a-date-d4886.firebasestorage.app",
    messagingSenderId: "348728055917",
    appId: "1:348728055917:web:74b206e6977c5d4b6a4764",
    measurementId: "G-0YV5C11C2P"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>