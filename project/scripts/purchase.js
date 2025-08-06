const paymentSelect = document.getElementById('payment');
const creditSection = document.getElementById('credit-section');
const paypalSection = document.getElementById('paypal-section');
const cryptoSection = document.getElementById('crypto-section');

paymentSelect.addEventListener('change', () => {
  const method = paymentSelect.value;

  creditSection.classList.add('hidden');
  paypalSection.classList.add('hidden');
  cryptoSection.classList.add('hidden');

  if (method === 'credit') creditSection.classList.remove('hidden');
  else if (method === 'paypal') paypalSection.classList.remove('hidden');
  else if (method === 'crypto') cryptoSection.classList.remove('hidden');
});


document.addEventListener('DOMContentLoaded', () => {
  const rideSelect = document.getElementById('ride');
  const ridePriceDisplay = document.getElementById('ridePrice');
  const form = document.getElementById('purchaseForm');
  const confirmation = document.getElementById('confirmation');

  const urlParams = new URLSearchParams(window.location.search);
  const selectedRide = urlParams.get('ride');

  fetch('data/rides.json')
    .then(res => res.json())
    .then(data => {
      data.forEach(ride => {
        const option = document.createElement('option');
        option.value = ride.name;
        option.textContent = ride.name;
        option.dataset.price = ride.price;
        rideSelect.appendChild(option);
      });

      // Pre-select ride if passed in URL
      if (selectedRide) {
        rideSelect.value = selectedRide;
        const selectedOption = rideSelect.options[rideSelect.selectedIndex];
        ridePriceDisplay.textContent = selectedOption.dataset.price
          ? `Price: ${selectedOption.dataset.price}`
          : '';
      }

      rideSelect.addEventListener('change', () => {
        const selectedOption = rideSelect.options[rideSelect.selectedIndex];
        const price = selectedOption.dataset.price;
        ridePriceDisplay.textContent = price ? `Price: ${price}` : '';
      });
    });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('hidden');
    confirmation.classList.remove('hidden');
  });
});
