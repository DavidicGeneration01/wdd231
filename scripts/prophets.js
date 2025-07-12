const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data)
    displayProphets(data.prophets)
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement('section')
        let pob =  document.createElement('p');
        let dob = document.createElement('p');
        let fullname = document.createElement('h2');
        let portrait = document.createElement('img');

        fullname.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`
        pob.textContent = `Place of Birth: ${prophet.birthplace}`
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Imaage of ${fullname}`)
        portrait.setAttribute('loading', 'lazy')
        portrait.setAttribute('width', '340')
        portrait.setAttribute('height', '440');

        card.appendChild(fullname);
        card.appendChild(dob)
        card.appendChild(pob)
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

getProphetData(url);