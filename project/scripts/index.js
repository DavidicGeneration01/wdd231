const eventContainer = document.querySelector('.event-container');
const moreInfoWrapper = document.querySelector('.moreInfoWrapper');

// 🔁 Mock E-Rider API data (18 total events)
const mockEriderEvents = Array.from({ length: 18 }, (_, i) => ({
    id: `${i + 1}`,
    name: `E-Rider Event ${i + 1}`,
    dateTime: new Date(Date.now() + i * 86400000).toISOString(), // 1-day offset
    venueName: `E-Venue ${i + 1}`,
    city: 'Toronto',
    state: 'ON',
    imageUrl: `https://picsum.photos/seed/${i + 1}/300/200`,
    notes: i % 2 === 0 ? 'Helmet required.' : 'No special requirements.',
    rules: i % 3 === 0 ? 'Must sign waiver.' : 'Standard safety rules apply.',
}));

// Simulate async API call
async function fetchCanadaEventData() {
    try {
        // Simulate async delay
        await new Promise(resolve => setTimeout(resolve, 300));
        buildEvent(mockEriderEvents);
    } catch (error) {
        console.error(error);
    }
}

fetchCanadaEventData();

// Build event grid (4 only)
function buildEvent(data) {
    eventContainer.innerHTML = '';

    const topFourEvent = data.slice(0, 4);

    topFourEvent.forEach(event => {
        const eachCont = document.createElement('div');
        eachCont.classList.add('each-event');

        eachCont.innerHTML = `
            <div> 
                <img src="${event.imageUrl}" alt="${event.name}" width="300" height="200" loading="lazy"> 
            </div>
    
            <ul>
                <li><strong>${event.name}</strong></li>
                
                <li>${new Date(event.dateTime).toLocaleString('en-US', {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                })}</li>
    
                <li>${event.venueName}, ${event.city}, ${event.state}</li>
            </ul>
        `;

        // Click dialog
        eachCont.addEventListener('click', () => {
            moreInfoWrapper.innerHTML = `
                <span class="closeBtn" autofocus>❌</span>

                <h2>${event.name}</h2>
                <p><strong>Important Event Info</strong><br> ${event.notes || 'No additional information available.'}</p>
                                
                <div class="timeVenue">
                    <p><strong>Date & Time:</strong> ${new Date(event.dateTime).toLocaleString('en-US', {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true
                    })}</p>

                    <p><strong>Venue:</strong> ${event.venueName}, ${event.city}, ${event.state}</p>
                </div>

                <p><strong>Additional Info</strong><br> ${event.rules}</p>
            `;

            const closeBtn = moreInfoWrapper.querySelector('.closeBtn');
            closeBtn.addEventListener('click', () => {
                moreInfoWrapper.close();
            });

            moreInfoWrapper.showModal();
        });

        eventContainer.appendChild(eachCont);
    });
}
