function validateForm(event) {
    event.preventDefault();
  
    // Reset error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
  
    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
  
    // Validate username
    if (username.length === 0) {
      document.getElementById('usernameError').textContent = 'Username is required';
      return;
    }
  
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = 'Invalid email address';
      return;
    }
  
    // If validation passes, you can submit the form or perform additional actions
    alert('Form submitted successfully!');
  }
  