//Base URL for RentCast API
const API_URL = 'https://api.rentcast.io/v1/listings/rental/long-term';
//API Key
const API_KEY = '3f919b6826c148549ff8b1e1500cb721'

//Function to fetch rentl listings with query parameters for city and state
async function fetchRentals(city, state) {
    const fullURL = `${API_URL}?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&limit=100`;

    //Log the constructed URL for debugging
    console.log(`Fetching URL:`, fullURL);

    try {
        //Send a GET reuqest to the API
        const response = await fetch(fullURL, {
            method: 'GET', //Shows the Http Method
            headers: {
                'X-Api-Key': API_KEY,
            },
        });
        // Check if response is succesful
        if (!response.ok) {
            //If not successfult throws an error
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        //Parse JSON data and returns it
        const data = await response.json();
        return data;
    } catch (error) {
        //Logs any errors that occur during fetch process
        console.error('Error fetching rentals:', error.message);
        //Re-throws error for further handling
        throw error;
    }
}

//Exports fetchRentals for use in other modules
export { fetchRentals }
