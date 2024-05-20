const countries = []

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        addCountry(data);
        countries.push(...data);
    })
    .catch(err => {
        console.error(err);
    })

function addCountry(countries) {
    countries.forEach(country => {
        const population = country.population;
        const name = country.name;
        const capital = country.capital;
        const nativeName = country.nativeName;
        const region = country.region;
        const subregion = country.subregion;
        const currencies = country.currencies ? country.currencies.map(currency => currency.name).join(", ") : "N/A";
        const languages = country.languages ? country.languages.map(language => language.name).join(", ") : "N/A";
        const topLevelDomain = country.topLevelDomain ? country.topLevelDomain.map(domain => domain).join(", ") : "N/A";
        const flag = country.flag;

        const cardsDiv = document.querySelector(".cards");
        cardsDiv.innerHTML += `
        <div class="card">
        <img src="${flag}"
            alt="flag">
        <p class="name">${name}</p>

        <div class="stats">
            <span>
                <strong>Population:</strong>
                <span>${numberWithCommas(population)}</span>
            </span>

            <span>
                <strong>Region:</strong>
                <span>${region}</span>
            </span>

            <span>
                <strong>Capital:</strong>
                <span>${capital}</span>
            </span>
        </div>
    </div>
        `
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const countryName = card.querySelector(".name").innerHTML;
            const country = countries.find(country => country.name === countryName);

            redirctToDetailsPage(country);
        });
    });
}

function redirctToDetailsPage(country) {
    
}


// Path: search.js

const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", displayMatches);
searchInput.addEventListener("change", displayMatches);

function displayMatches() {
    const matchArray = findMatches(this.value, countries);
    const cardsDiv = document.querySelector(".cards");
    cardsDiv.innerHTML = "";

    matchArray.forEach(country => {
        const population = country.population;
        const name = country.name;
        const capital = country.capital;
        const nativeName = country.nativeName;
        const region = country.region;
        const subregion = country.subregion;
        const currencies = country.currencies ? country.currencies.map(currency => currency.name).join(", ") : "N/A";
        const languages = country.languages ? country.languages.map(language => language.name).join(", ") : "N/A";
        const topLevelDomain = country.topLevelDomain ? country.topLevelDomain.map(domain => domain).join(", ") : "N/A";
        const flag = country.flag;

        cardsDiv.innerHTML += `
        <div class="card">
        <img src="${flag}"
            alt="flag">
        <p class="name">${name}</p>

        <div class="stats">
            <span>
                <strong>Population:</strong>
                <span>${numberWithCommas(population)}</span>
            </span>

            <span>
                <strong>Region:</strong>
                <span>${region}</span>
            </span>

            <span>
                <strong>Capital:</strong>
                <span>${capital}</span>
            </span>
        </div>
    </div>
        `
    });
}

function findMatches(wordToMatch, countries) {
    return countries.filter(country => {
        const regex = new RegExp(wordToMatch, "gi");
        return country.name.match(regex);
    });
}


const darkMode = document.querySelector(".dark-mode");

darkMode.addEventListener("click", () => {
    if (document.querySelector(".dark-mode p").innerHTML === "Light Mode") {
        document.querySelector(".dark-mode p").innerHTML = "Dark Mode";
        document.documentElement.style.setProperty('--dark-bg', '#fafafa');
        document.documentElement.style.setProperty('--light-dark', '#ffffff');
        document.documentElement.style.setProperty('--white-color', '#121417');
    } else {
        document.querySelector(".dark-mode p").innerHTML = "Light Mode";
        document.documentElement.style.setProperty('--dark-bg', '#212c36');
        document.documentElement.style.setProperty('--light-dark', '#2c3743');
        document.documentElement.style.setProperty('--white-color', '#f9f8fa');
    }
})


// Filter by region

const regionSelect = document.getElementById("region");

regionSelect.addEventListener("change", filterByRegion);

function filterByRegion() {
    const selectedRegion = regionSelect.value;
    const cardsDiv = document.querySelector(".cards");
    cardsDiv.innerHTML = "";

    if (selectedRegion === "All") {
        addCountry(countries);
        return;
    } else {
        countries.map(country => {
            if (country.region === selectedRegion) {
                cardsDiv.innerHTML += `
                <div class="card">
                <img src="${country.flag}"
                    alt="flag">
                <p class="name">${country.name}</p>
            
                <div class="stats">
                    <span>
                        <strong>Population:</strong>
                        <span>${numberWithCommas(country.population)}</span>
                    </span>
            
                    <span>
                        <strong>Region:</strong>
                        <span>${country.region}</span>
                    </span>
            
                    <span>
                        <strong>Capital:</strong>
                        <span>${country.capital}</span>
                    </span>
                </div>
            </div>
                `
            }
        });
    }
}

// Card clicked, display details of country in a new page