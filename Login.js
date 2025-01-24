
const users = {
    "user1": "password1",
    "user2": "password2",
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Check if the user exists and the password matches
      if (users[username] && users[username] === password) {
        alert(`Welcome, ${username}!`);
        // Redirect to the dashboard or another page
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
  
      loginForm.reset();
    });
  });
  

  
