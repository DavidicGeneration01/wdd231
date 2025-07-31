const displayAllEvents = document.querySelector('.dsAllEvents');
const moreInfoWrapper = document.querySelector('.moreInfoWrapper');

// Mock data for 18 e-rider events
const mockEriderEvents = [
  {
    id: '1',
    name: 'E-Rider Race 2025 - Toronto',
    dateTime: '2025-08-15T18:00:00Z',
    venueName: 'Toronto Speed Park',
    city: 'Toronto',
    state: 'ON',
    imageUrl: 'https://picsum.photos/seed/1/300/200',
    notes: 'Bring your own helmet.',
    rules: 'No outside food or drinks allowed.',
  },
  {
    id: '2',
    name: 'Electric Rider Showdown - Ottawa',
    dateTime: '2025-09-10T16:30:00Z',
    venueName: 'Ottawa E-Park',
    city: 'Ottawa',
    state: 'ON',
    imageUrl: 'https://picsum.photos/seed/2/300/200',
    notes: '',
    rules: 'Must have valid e-rider license.',
  },
  {
    id: '3',
    name: 'E-Rider Championship - Hamilton',
    dateTime: '2025-10-05T15:00:00Z',
    venueName: 'Hamilton Race Arena',
    city: 'Hamilton',
    state: 'ON',
    imageUrl: 'https://picsum.photos/seed/3/300/200',
    notes: 'Open to all skill levels.',
    rules: 'Safety gear mandatory.',
  },
];


// For demonstration, generate total 18 events by duplicating with different ids and dates:
while (mockEriderEvents.length < 18) {
  const base = mockEriderEvents[mockEriderEvents.length % 3];
  const id = (mockEriderEvents.length + 1).toString();
  const newDate = new Date(base.dateTime);
  newDate.setDate(newDate.getDate() + mockEriderEvents.length * 5); // offset dates
  mockEriderEvents.push({
    id,
    name: base.name.replace(/\d+/, id),
    dateTime: newDate.toISOString(),
    venueName: base.venueName,
    city: base.city,
    state: base.state,
    imageUrl: base.imageUrl,
    notes: base.notes,
    rules: base.rules,
  });
}

// Simulate API call
async function fetchEriderEvents() {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockEriderEvents), 300);
  });
}

async function loadEvents() {
  try {
    const events = await fetchEriderEvents();
    displayEvents(events);
  } catch (error) {
    console.error('Error loading events:', error);
    displayAllEvents.innerHTML = `<p>Error loading events.</p>`;
  }
}

loadEvents();

moreInfoWrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('closeBtn')) {
    moreInfoWrapper.close();
  }
});

function displayEvents(events) {
  displayAllEvents.innerHTML = '';

  events.forEach(event => {
    const eventItem = document.createElement('div');
    eventItem.classList.add('eachItem');

    eventItem.innerHTML = `
      <div> 
        <img src="${event.imageUrl}" alt="${event.name}" loading="lazy" width="300" height="200"> 
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

    eventItem.addEventListener('click', () => {
      moreInfoWrapper.innerHTML = `
        <span class="closeBtn" autofocus style="cursor:pointer; font-size:1.5rem;">❌</span>
        <h2>${event.name}</h2>
        <p><strong>Important Event Info</strong> <br> ${event.notes || 'No additional information available.'}</p>
                        
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

        <p><strong>Additional Info</strong><br>${event.rules || 'No additional rules available.'}</p>
      `;

      moreInfoWrapper.showModal();
    });

    displayAllEvents.appendChild(eventItem);
  });
}
