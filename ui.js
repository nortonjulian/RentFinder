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

        const agentName = rental.listingAgent?.name || "Not provided";
        const agentPhone = rental.listingAgent?.phone || "Not provided";
        const agentEmail = rental.listingAgent?.email ? `<a href="mailto:${rental.listingAgent.email}">${rental.listingAgent.email}</a>` : "Not provided"
        const agentWebsite = rental.listingAgent?.website ? `<a href="${rental.listingAgent.website}" target="_blank">Website</a>` : "Not provided";

        const officeName = rental.listingOffice?.name || "Not provided";
        const officePhone = rental.listingOffice?.phone || "Not provided";

        const price = rental.price ? `$${rental.price.toLocaleString()}` : "Price not available"
        const propertyType = rental.propertyType || "Unknown";
        const squareFootage = rental.squareFootage ? `${rental.squareFootage.toLocaleString()} sq ft` : "Not listed";
        const yearBuilt = rental.yearBuilt || "Unknown";
        const county = rental.county || "Unknown";
        const bedrooms = rental.bedrooms || "N/A";
        const bathrooms = rental.bathrooms || "N/A";

        // Set the inner HTML of the rental item to display the address with a link
        rentalItem.innerHTML = `
            <p>Address: <a href="${addressUrl}" target="_blank">${rentalAddress}</a></p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Type:</strong> ${propertyType}</p>
            <p><strong>Square Footage:</strong> ${squareFootage}</p>
            <p><strong>Year Built:</strong> ${yearBuilt}</p>
            <p><strong>County:</strong> ${county}</p>
            <p><strong>Bedrooms:</strong> ${bedrooms}</p>
            <p><strong>Bathrooms:</strong> ${bathrooms}</p>
            <hr>
            <h4>Listing Agent</h4>
            <p><strong>Name:</strong> ${agentName}</p>
            <p><strong>Phone:</strong> ${agentPhone}</p>
            <p><strong>Email:</strong> ${agentEmail}</p>
            <p><strong>Website:</strong> ${agentWebsite}</p>
            <hr>
            <h4>Listing Office</h4>
            <p><strong>Name:</strong> ${officeName}</p>
            <p><strong>Phone:</strong> ${officePhone}</p>
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
