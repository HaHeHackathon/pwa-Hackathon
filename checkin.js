document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 1; // Fade in when the page loads
});

// Function to send response to an example endpoint
function sendResponse(answer) {
    const endpoint = 'https://example.com/api/checkin'; // Replace with your actual endpoint

    // Send a POST request
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer: answer, station: localStorage.getItem('selectedStation') }), // Send the answer in JSON format
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data); // Handle success
            // Optionally redirect or show a message after success
            alert(`Response received: ${data.message || 'Success'}`);
        })
        .catch((error) => {
            console.error('Error:', error); // Handle error
            alert('There was an error. Please try again later.');
        });
}