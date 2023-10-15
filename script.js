document.addEventListener('DOMContentLoaded', function() {
    const locationForm = document.getElementById('location-form');
    const locationInput = document.getElementById('location-input');

    locationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const location = locationInput.value;

        // You can add logic to process the location and show recycling centers here
        // For now, let's just display an alert with the entered location
        alert(`Searching for recycling centers near ${location}...`);
    });
});
