// // Firebase configuration (Replace with your own)
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "your-app.firebaseapp.com",
//   projectId: "your-project-id",
//   appId: "YOUR_APP_ID"
// };

// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

// let isLogin = true;

// function toggleMode() {
//   isLogin = !isLogin;
//   document.getElementById("formTitle").innerText = isLogin ? "Login" : "Sign Up";
//   document.getElementById("mainBtn").innerText = isLogin ? "Login" : "Sign Up";
//   document.getElementById("toggle").innerHTML = isLogin
//     ? `Don't have an account? <a href="#" onclick="toggleMode()">Sign up</a>`
//     : `Already have an account? <a href="#" onclick="toggleMode()">Login</a>`;
//   document.getElementById("message").innerText = '';
// }

// function handleAuth() {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const msg = document.getElementById("message");

//   if (isLogin) {
//     auth.signInWithEmailAndPassword(email, password)
//       .then(userCredential => {
//         if (userCredential.user.emailVerified) {
//           msg.style.color = 'green';
//           msg.innerText = "Login successful!";
//         } else {
//           msg.innerText = "Please verify your email first.";
//         }
//       })
//       .catch(error => msg.innerText = error.message);
//   } else {
//     auth.createUserWithEmailAndPassword(email, password)
//       .then(userCredential => {
//         userCredential.user.sendEmailVerification();
//         msg.style.color = 'green';
//         msg.innerText = "Verification email sent. Please check your inbox.";
//       })
//       .catch(error => msg.innerText = error.message);
//   }
// }

// function googleLogin() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   auth.signInWithPopup(provider)
//     .then(() => {
//       document.getElementById("message").style.color = "green";
//       document.getElementById("message").innerText = "Logged in with Google";
//     })
//     .catch(error => document.getElementById("message").innerText = error.message);
// }

// function facebookLogin() {
//   const provider = new firebase.auth.FacebookAuthProvider();
//   auth.signInWithPopup(provider)
//     .then(() => {
//       document.getElementById("message").style.color = "green";
//       document.getElementById("message").innerText = "Logged in with Facebook";
//     })
//     .catch(error => document.getElementById("message").innerText = error.message);
// }

// function appleLogin() {
//   const provider = new firebase.auth.OAuthProvider('apple.com');
//   provider.addScope('email');
//   provider.addScope('name');
  
//   auth.signInWithPopup(provider)
//     .then(() => {
//       document.getElementById("message").style.color = "green";
//       document.getElementById("message").innerText = "Logged in with Apple";
//     })
//     .catch(error => {
//       document.getElementById("message").innerText = error.message;
//     });
// }


const firebaseConfig = {
  apiKey: "AIzaSyCDbPte-mt55fH-l99EIDkZHXHWv6pLXi8",
  authDomain: "furniture-site-authentication.firebaseapp.com",
  projectId: "furniture-site-authentication",
  storageBucket: "furniture-site-authentication.firebasestorage.app",
  messagingSenderId: "594723399300",
  appId: "1:594723399300:web:018f82e57641b0a4edc4d1",
  measurementId: "G-43MHG8KBFJ"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

  // Wait for DOM first
  document.addEventListener("DOMContentLoaded", () => {
    const logoutBtns = document.querySelectorAll("#logoutBtn");
    const loginBtns = document.querySelectorAll("#loginBtn");

    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(`Welcome back, ${user.email}`);
        // Show logout, hide login
        logoutBtns.forEach(btn => btn.style.display = "inline");
        loginBtns.forEach(btn => btn.style.display = "none");
      } else {
        console.log("No user is logged in");
        // Show login, hide logout
        logoutBtns.forEach(btn => btn.style.display = "none");
        loginBtns.forEach(btn => btn.style.display = "inline");
      }
    });

    // Attach logout handler
    logoutBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const confirmLogout = confirm("Are you sure you want to logout?");
        if (confirmLogout) {
          auth.signOut()
            .then(() => {
              localStorage.removeItem("cart");
              alert("Logged out successfully.");
              window.location.href = "login.html";
            })
            .catch(error => {
              console.error("Logout failed:", error);
            });
        }
      });
    });
  });

let isLogin = true;

function handleAuth() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (isLogin) {
    // Login flow
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        showMessage("Login successful!");
        window.location.href = "index.html"; // redirect after login
      })
      .catch((error) => {
        showMessage(error.message);
      });
  } else {
    // Signup flow
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        showMessage("Signup successful!");
      })
      .catch((error) => {
        showMessage(error.message);
      });
  }
}
function toggleMode() {
  isLogin = !isLogin;
  document.getElementById("formTitle").innerText = isLogin ? "Login" : "Sign Up";
  document.getElementById("mainBtn").innerText = isLogin ? "Login" : "Sign Up";
  document.getElementById("toggle").innerHTML = isLogin
    ? `Don't have an account? <a href="#" onclick="toggleMode()">Sign up</a>`
    : `Already have an account? <a href="#" onclick="toggleMode()">Login</a>`;
}

function showMessage(message) {
  document.getElementById("message").innerText = message;
}
