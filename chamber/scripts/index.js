const weatherInfoContainer = document.querySelector(".weatherInfo-container");
import { fisherYatesShuffle } from "./module.js";

// 9.054071295619162, 7.497245344173042

const key = "f8b61c6a8480f40134110dc75c051335";
const lat = "9.0540";
const long = "7.4972";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`;
const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=Abuja&appid=${key}&units=metric`;

async function fetchAbujaData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const data = await response.json();
    // console.log(data);
    displayResults(data);
  } catch (error) {
    console.log(error);
  }

  function displayResults(data) {
    const weatherIcon = document.querySelector("#weather-icon");
    const iconCode = data.weather[0].icon;
    weatherIcon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    );
    weatherIcon.setAttribute("alt", data.weather[0].description);

    const weatherInfo = document.querySelector(".weather-info");
    weatherInfo.innerHTML = `
            <div>${data.main.temp}&deg;C</div>
            <div>${data.weather[0].description.replace(/\b\w/g, (char) =>
              char.toUpperCase()
            )}</div>
            <div>High: ${data.main.temp_max}&deg;C</div>
            <div>Low: ${data.main.temp_min}&deg;C</div>
            <div>Humidity: ${data.main.humidity}%</div>
            <div>Sunrise: ${new Date(
              data.sys.sunrise * 1000
            ).toLocaleTimeString()}</div>
            <div>Sunset: ${new Date(
              data.sys.sunset * 1000
            ).toLocaleTimeString()}</div>
        `;
  }
}

fetchAbujaData();

// Three day weather forecast
async function getWeatherForecast() {
  try {
    const response = await fetch(url2);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data2 = await response.json();
    // console.log(data2);

    // Call the function to display the forecast
    displayWeatherForecast(data2);
  } catch (error) {
    console.log(error);
  }

  function displayWeatherForecast(data2) {
    // Clear the forecast container
    const forecastInfo = document.querySelector(".forecastInfo");
    forecastInfo.innerHTML = "";

    // Extract the forecast for the next three days
    const forecastDays = [1, 9, 17]; // Indices for 3-hour intervals (approx. 24 hours apart)
    forecastDays.forEach((index, i) => {
      const dayName = new Date(data2.list[index].dt * 1000).toLocaleDateString(
        "en-US",
        { weekday: "long" }
      );
      const temp = data2.list[index].main.temp;

      // Create a list item for each day's forecast
      const dayInfo = document.createElement("p");
      dayInfo.innerHTML = `${dayName}: ${temp.toFixed(1)}°C`;

      forecastInfo.appendChild(dayInfo);
    });
  }
}
// Call the function to fetch and display the forecast
getWeatherForecast();

//Dynamically display members in spotlight section
const url3 = "data/member.json";
const companiesContainer = document.querySelector("#companies-container");

async function getMembers() {
  try {
    const response = await fetch(url3);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data3 = await response.json();
    // console.log(data3);
    let allCompanies = data3.companies;
    displayMembers(allCompanies);
  } catch (error) {
    console.log(error);
  }

  function displayMembers(allCompanies) {
    // filters to return gold or silver members
    let filterMembers = allCompanies.filter((company) => {
      const membership = company.membershipLevels[0];
      return membership.silver || membership.gold;
    });

    // Use the fisherYatesShuffle function to shuffle the members
    let shuffledMembers = fisherYatesShuffle(filterMembers);

    // randomly select three members with either gold or silver membership
    let randomMembers = shuffledMembers.slice(0, 3);

    randomMembers.forEach((company) => {
      // Check if the company is silver or gold
      const membership = company.membershipLevels[0].silver
        ? "Silver 🥈"
        : "Gold 🥇";

      const showCompanies = document.createElement("div");
      showCompanies.classList.add("showCompanies");

      showCompanies.innerHTML = `
                <div class="comp-heading">
                    <h2>${company.name}</h2>
                    <p>${company.tagLine}</p>
                </div>

                <div class="companyInfo">
                    <p><strong>Phone:</strong> ${company.phoneNumbers}</p>
                    <p><strong>Website:</strong> <a href="${company.websitesUrls}" target="_blank">${company.websitesUrls}</a></p>
                    <p><strong>Membership:</strong> ${membership}</p>
                </div>
            `;
      companiesContainer.appendChild(showCompanies);
    });
  }
}

getMembers();


