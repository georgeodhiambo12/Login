document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');
  
    // Show signup form and hide login form
    showSignupLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      showSignupLink.style.display = 'none';
      showLoginLink.style.display = 'block';
    });
  
    // Show login form and hide signup form
    showLoginLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      showSignupLink.style.display = 'block';
      showLoginLink.style.display = 'none';
    });
  });
  