Main.js

// Import fetchRentals function for API calls and UI functions
import { fetchRentals } from "./api.js";
import { displayResults, displayError } from "./ui.js";

// Attach an event listener to the search button to handle user input
document.getElementById('searchButton').addEventListener('click', async () => {
    // Values of city and state
    const city = document.getElementById('cityInput').value.trim();
    const state = document.getElementById('stateInput').value.trim().toUpperCase();

    // Check s if sity or state is missing
    if (!city || !state) {
        console.log("City or state not entered!");
        displayError("Please enter both city and state.");
        return; // Stops further action
    }

    try {
        // Calls the fetchRental function to get info for specified city and state
        const rentals = await fetchRentals(city, state);

        // Checks if the API returns results
        if (rentals.length === 0) {

            // Displays error message in the event of no rentals found
            displayError("No rentals found for the given location.");
        } else {
            // If rentals found they are displayed in the UI
            displayResults(rentals);
            console.log(rentals);
        }
    } catch (error) {
        // Handle errors that occur during API call
        displayError("Could not fetch rentals. Please try again.");
    }
});

