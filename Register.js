
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("register-form");
  
    registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const username = document.getElementById("reg-username").value;
      const password = document.getElementById("reg-password").value;
      const confirmPassword = document.getElementById("reg-confirm-password").value;
  
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }
  
     
      alert(`User ${username} registered successfully!`);
      registrationForm.reset();
    });
  });
  