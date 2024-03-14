
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/IO.7.2/firebase-auth.js"


const firebaseConfig = {
    apiKey: "AIzaSyDvqZ4Tf8761MMzZRhqYFmXChv1cXQ43Qw",
    authDomain: "face-recognition-attenda-c350a.firebaseapp.com",
    projectId: "face-recognition-attenda-c350a",
    storageBucket: "face-recognition-attenda-c350a.appspot.com",
    messagingSenderId: "136690237326",
    appId: "1:136690237326:web:c84c07436d46b743f36edf",
    measurementId: "G-ZSKZL79SNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const email = document.getElementById('emailid').value;
const password = document.getElementById('password').value;

const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
    event.preventDefault()

    const email = document.getElementById('emailid').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("creating Account..")
            window.location.href= "/templates/home1.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
})