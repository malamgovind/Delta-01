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

// Live Chat Alert
function openChat() {
    alert("🔹 Live Chat is coming soon!");
}

// Prime Member Contact Unlock
document.getElementById("contactBtn").addEventListener("click", function() {
    let isPrimeMember = confirm("Are you a Prime Member?");
    if (isPrimeMember) {
        document.getElementById("prime-contact").classList.add("unlocked");
        window.location.href = "tel:7874080686"; // Call Link
    } else {
        alert("📢 This feature is available for Prime Members only!");
    }
});

// Function to show alert and open link in a new tab
function openSocialMedia(url, platform) {
    let userConfirm = confirm(`You are about to visit ${platform}. Do you want to continue?`);
    if (userConfirm) {
        window.open(url, "_blank"); // Opens in a new tab
    }
}

// Add hover effect on social buttons
document.querySelectorAll('.social-btn').forEach(button => {
    button.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });
});

// Feature Box Click Effect
document.querySelectorAll('.feature-box').forEach(box => {
    box.addEventListener('click', () => {
        box.style.background = "#d1ecf1";  // Light blue highlight
        setTimeout(() => {
            box.style.background = "#e3f2fd";
        }, 500);
    });
});

// Smooth Scroll Animation
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mouse Hover Animation
document.getElementById("mission-box").addEventListener("mouseover", function() {
    this.style.transform = "rotateY(10deg)";
    setTimeout(() => { this.style.transform = "rotateY(0deg)"; }, 300);
});

document.getElementById("choose-box").addEventListener("mouseover", function() {
    this.style.transform = "rotateY(-10deg)";
    setTimeout(() => { this.style.transform = "rotateY(0deg)"; }, 300);
});

document.getElementById("terms-box").addEventListener("mouseover", function() {
    this.style.transform = "rotateX(10deg)";
    setTimeout(() => { this.style.transform = "rotateX(0deg)"; }, 300);
});

// Feature Box Hover Effect
document.querySelectorAll('.feature-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.background = "#e3f2fd";  // Light blue hover effect
    });
    box.addEventListener('mouseleave', () => {
        box.style.background = "#ffffff";  // Back to white
    });
});
