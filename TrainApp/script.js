document.getElementById('search-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
    const apiUrl = `http://indianrailapi.com/api/v2/AutoCompleteStation/apikey/${apiKey}/StationCodeOrName/${departure}/`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const resultsSection = document.getElementById('results');
        resultsSection.innerHTML = `
            <h2>Search Results</h2>
            <p>Departure Station: ${departure}</p>
            <p>Destination Station: ${destination}</p>
            <p>Date: ${date}</p>
            <h3>Available Stations</h3>
            <ul>
                ${data.Stations.map(station => `<li>${station.Name} (${station.Code})</li>`).join('')}
            </ul>
        `;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
