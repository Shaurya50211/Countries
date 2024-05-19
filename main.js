const countries = []

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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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