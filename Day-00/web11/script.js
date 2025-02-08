// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Prime Content Section
const primeContent = document.getElementById("prime-content");
const loginSection = document.getElementById("login-section");
const logoutButton = document.getElementById("logout");

// Check if the user is a Prime Member
let isPrimeMember = false; // Change this value to simulate prime membership

// Check if the user is logged in
function checkLoginState(user) {
    if (user) {
        showPrimeContent(user);
    } else {
        hidePrimeContent();
    }
}

// Show Prime Content
function showPrimeContent(user) {
    loginSection.style.display = "none";
    primeContent.style.display = "block";
    logoutButton.style.display = "inline-block";
    // Display user info
    document.getElementById('user-info').style.display = 'block';
    document.getElementById('user-name').textContent = `Hello, ${user.displayName}`;
    document.getElementById('user-email').textContent = `Email: ${user.email}`;
    document.getElementById('user-photo').src = user.photoURL;
}

// Hide Prime Content
function hidePrimeContent() {
    loginSection.style.display = "block";
    primeContent.style.display = "none";
    logoutButton.style.display = "none";
    document.getElementById('user-info').style.display = 'none';
}

// Google Login Button Click
document.getElementById("google-login").addEventListener("click", function() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            console.log("User Signed In:", result.user);
            checkLoginState(result.user);
        })
        .catch((error) => console.error("Error:", error));
});

// Logout Button Click
logoutButton.addEventListener("click", function() {
    auth.signOut().then(() => {
        console.log("User Signed Out");
        hidePrimeContent();
    });
});

// Auth State Change Listener
auth.onAuthStateChanged((user) => {
    checkLoginState(user);
});


