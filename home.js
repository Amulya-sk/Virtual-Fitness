

document.addEventListener("DOMContentLoaded", function() {
    var signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();
            if (!name || !email) {
                alert("Please fill out all fields.");
                return;
            }
            // Optionally, save to localStorage or send to backend here
            alert("Thank you for signing up, " + name + "! You'll receive updates at " + email + ".");
            signupForm.reset();
        });
    }
    // Smooth scroll for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});