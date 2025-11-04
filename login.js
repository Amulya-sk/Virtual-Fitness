document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');

        if (!nameInput.value || !emailInput.value) {
            alert('Please fill out all fields.');
            event.preventDefault();
        } else {
          
            alert('Thank you for signing up, ' + nameInput.value + '! Check your email for confirmation.');
            nameInput.value = ''; 
            emailInput.value = ''; 
            event.preventDefault(); 
        }
    });
});