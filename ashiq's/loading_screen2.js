// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none"; // Hide preloader
        document.getElementById("content").style.display = "block"; // Show content
    }, 3000); // Adjust time as needed
});