// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page Loaded");

    fetch('rides.json')
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
    rides.forEach(ride => {
        const card = document.createElement('div');
        card.classList.add('collection-card');

        card.innerHTML = `
            <img src="${ride.image}" alt="${ride.name}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${ride.name}</h3>
                <p class="card-description">${ride.description}</p>
            </div>
        `;

        container.appendChild(card);
    });
}
