// Display Results function
function displayResults(rentals) {
    //Container element for displaying rental results
    const rentalContainer = document.getElementById('results');

    // Clears previous content in the results container
    rentalContainer.innerHTML = '';

    // Check if rentals is not an array or if it's empty
    if (!Array.isArray(rentals) || rentals.length === 0) {
         // If no rentals, display a message the user
        rentalContainer.innerHTML = `<p>No rentals found.</p>`;
        return;
    }

    // Iterate through the rentals array
    rentals.forEach(rental => {
        // Create a new div element to represent a single rental item
        const rentalItem = document.createElement('div');
        // Add CSS class for styling
        rentalItem.classList.add('rental-item');

        // const rentalId = rental.id || 'N/A';
        // Extract the rental's formatted address or use a fallback message
        const rentalAddress = rental.formattedAddress || 'Address not available';

        // Generate a Google Maps URL for the rental address or fallback to '#'
        const addressUrl = rental.formattedAddress
            ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(rental.formattedAddress)}`
            : '#';

        // Set the inner HTML of the rental item to display the address with a link
        rentalItem.innerHTML = `
            <p>Address: <a href="${addressUrl}" target="_blank">${rentalAddress}</a></p>
            <p>Renta</p>
        `;

        rentalContainer.appendChild(rentalItem);
    });
}

function displayError(message) {
    // Container element for displaying results
    const resultsDiv = document.getElementById('results')
    // Clear any previous content and display the error message
    resultsDiv.innerHTML = `<p class="error">${message}</p>`
}

// Export the functions for use in other modules
export { displayResults, displayError }
