if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceworker.js')
        .then(function() {
            console.log('Service Worker Registered');
        });
}

function redirectToCheckin() {
    document.body.style.opacity = 0; // Start fading out
    setTimeout(function() {
        window.location.href = 'checkin.html'; // Redirect after the fade out
    }, 500); // Time matches the CSS transition duration

    // Ensure fade-in effect when the page loads
    document.addEventListener("DOMContentLoaded", function() {
        document.body.style.opacity = 1;
    });
}