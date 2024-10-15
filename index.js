if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceworker.js')
        .then(function() {
            console.log('Service Worker Registered');
        });
}

function redirectToStations() {
    document.body.style.opacity = 0; // Start fading out
    setTimeout(function() {
        window.location.href = 'choose-station.html'; // Redirect after the fade out
    }, 500); // Time matches the CSS transition duration

    document.body.style.opacity = 1;

}

// Sicherstellen, dass der Fade-In-Effekt beim Laden der Seite funktioniert
document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 1; // Fade-In beim ersten Laden
});