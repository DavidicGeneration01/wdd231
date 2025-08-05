document.addEventListener('DOMContentLoaded', () => {
    console.log("Page Loaded");

    fetch('https://davidicgeneration01.github.io/wdd231/project/data/rides.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data loaded:", data);
            renderRides(data);
        })
        .catch(error => console.error('Error fetching ride data:', error));
});

function renderRides(rides) {
    const container = document.querySelector('.AllCollections');

    if (!container) {
        console.error("Container '.AllCollections' not found in the DOM.");
        return;
    }

    rides.forEach(ride => {
        // Debug log for each ride's name and price
        console.log(`Name: ${ride.name}, Price: ${ride.price}`);

        const card = document.createElement('div');
        card.classList.add('collection-card');

        card.innerHTML = `
            <img src="${ride.image}" alt="${ride.name}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${ride.name}</h3>
                <p class="card-description">${ride.description}</p>
                <p class="card-price">${ride.price}</p>
            </div>
        `;

        container.appendChild(card);
    });
}
