const countries = []
const countriesAbbreviations = {
    "AFG": "Afghanistan",
    "ALB": "Albania",
    "DZA": "Algeria",
    "AND": "Andorra",
    "AGO": "Angola",
    "ATG": "Antigua and Barbuda",
    "ARG": "Argentina",
    "ARM": "Armenia",
    "AUS": "Australia",
    "AUT": "Austria",
    "AZE": "Azerbaijan",
    "BHS": "Bahamas",
    "BHR": "Bahrain",
    "BGD": "Bangladesh",
    "BRB": "Barbados",
    "BLR": "Belarus",
    "BEL": "Belgium",
    "BLZ": "Belize",
    "BEN": "Benin",
    "BTN": "Bhutan",
    "BOL": "Bolivia",
    "BIH": "Bosnia and Herzegovina",
    "BWA": "Botswana",
    "BRA": "Brazil",
    "BRN": "Brunei",
    "BGR": "Bulgaria",
    "BFA": "Burkina Faso",
    "BDI": "Burundi",
    "CPV": "Cabo Verde",
    "KHM": "Cambodia",
    "CMR": "Cameroon",
    "CAN": "Canada",
    "CAF": "Central African Republic",
    "TCD": "Chad",
    "CHL": "Chile",
    "CHN": "China",
    "COL": "Colombia",
    "COM": "Comoros",
    "COG": "Congo",
    "COD": "Congo (Democratic Republic of the)",
    "CRI": "Costa Rica",
    "CIV": "Côte d'Ivoire",
    "HRV": "Croatia",
    "CUB": "Cuba",
    "CYP": "Cyprus",
    "CZE": "Czechia",
    "DNK": "Denmark",
    "DJI": "Djibouti",
    "DMA": "Dominica",
    "DOM": "Dominican Republic",
    "ECU": "Ecuador",
    "EGY": "Egypt",
    "SLV": "El Salvador",
    "GNQ": "Equatorial Guinea",
    "ERI": "Eritrea",
    "EST": "Estonia",
    "SWZ": "Eswatini",
    "ETH": "Ethiopia",
    "FJI": "Fiji",
    "FIN": "Finland",
    "FRA": "France",
    "GAB": "Gabon",
    "GMB": "Gambia",
    "GEO": "Georgia",
    "DEU": "Germany",
    "GHA": "Ghana",
    "GRC": "Greece",
    "GRD": "Grenada",
    "GTM": "Guatemala",
    "GIN": "Guinea",
    "GNB": "Guinea-Bissau",
    "GUY": "Guyana",
    "HTI": "Haiti",
    "HND": "Honduras",
    "HUN": "Hungary",
    "ISL": "Iceland",
    "IND": "India",
    "IDN": "Indonesia",
    "IRN": "Iran",
    "IRQ": "Iraq",
    "IRL": "Ireland",
    "ISR": "Israel",
    "ITA": "Italy",
    "JAM": "Jamaica",
    "JPN": "Japan",
    "JOR": "Jordan",
    "KAZ": "Kazakhstan",
    "KEN": "Kenya",
    "KIR": "Kiribati",
    "PRK": "Korea (Democratic People's Republic of)",
    "KOR": "Korea (Republic of)",
    "KWT": "Kuwait",
    "KGZ": "Kyrgyzstan",
    "LAO": "Lao People's Democratic Republic",
    "LVA": "Latvia",
    "LBN": "Lebanon",
    "LSO": "Lesotho",
    "LBR": "Liberia",
    "LBY": "Libya",
    "LIE": "Liechtenstein",
    "LTU": "Lithuania",
    "LUX": "Luxembourg",
    "MDG": "Madagascar",
    "MWI": "Malawi",
    "MYS": "Malaysia",
    "MDV": "Maldives",
    "MLI": "Mali",
    "MLT": "Malta",
    "MHL": "Marshall Islands",
    "MRT": "Mauritania",
    "MUS": "Mauritius",
    "MEX": "Mexico",
    "FSM": "Micronesia (Federated States of)",
    "MDA": "Moldova (Republic of)",
    "MCO": "Monaco",
    "MNG": "Mongolia",
    "MNE": "Montenegro",
    "MAR": "Morocco",
    "MOZ": "Mozambique",
    "MMR": "Myanmar",
    "NAM": "Namibia",
    "NRU": "Nauru",
    "NPL": "Nepal",
    "NLD": "Netherlands",
    "NZL": "New Zealand",
    "NIC": "Nicaragua",
    "NER": "Niger",
    "NGA": "Nigeria",
    "MKD": "North Macedonia",
    "NOR": "Norway",
    "OMN": "Oman",
    "PAK": "Pakistan",
    "PLW": "Palau",
    "PSE": "Palestine, State of",
    "PAN": "Panama",
    "PNG": "Papua New Guinea",
    "PRY": "Paraguay",
    "PER": "Peru",
    "PHL": "Philippines",
    "POL": "Poland",
    "PRT": "Portugal",
    "QAT": "Qatar",
    "ROU": "Romania",
    "RUS": "Russian Federation",
    "RWA": "Rwanda",
    "KNA": "Saint Kitts and Nevis",
    "LCA": "Saint Lucia",
    "VCT": "Saint Vincent and the Grenadines",
    "WSM": "Samoa",
    "SMR": "San Marino",
    "STP": "Sao Tome and Principe",
    "SAU": "Saudi Arabia",
    "SEN": "Senegal",
    "SRB": "Serbia",
    "SYC": "Seychelles",
    "SLE": "Sierra Leone",
    "SGP": "Singapore",
    "SVK": "Slovakia",
    "SVN": "Slovenia",
    "SLB": "Solomon Islands",
    "SOM": "Somalia",
    "ZAF": "South Africa",
    "SSD": "South Sudan",
    "ESP": "Spain",
    "LKA": "Sri Lanka",
    "SDN": "Sudan",
    "SUR": "Suriname",
    "SWE": "Sweden",
    "CHE": "Switzerland",
    "SYR": "Syrian Arab Republic",
    "TWN": "Taiwan",
    "TJK": "Tajikistan",
    "TZA": "Tanzania (United Republic of)",
    "THA": "Thailand",
    "TLS": "Timor-Leste",
    "TGO": "Togo",
    "TON": "Tonga",
    "TTO": "Trinidad and Tobago",
    "TUN": "Tunisia",
    "TUR": "Turkey",
    "TKM": "Turkmenistan",
    "TUV": "Tuvalu",
    "UGA": "Uganda",
    "UKR": "Ukraine",
    "ARE": "United Arab Emirates",
    "GBR": "United Kingdom of Great Britain and Northern Ireland",
    "USA": "United States of America",
    "URY": "Uruguay",
    "UZB": "Uzbekistan",
    "VUT": "Vanuatu",
    "VEN": "Venezuela (Bolivarian Republic of)",
    "VNM": "Viet Nam",
    "ESH": "Western Sahara",
    "YEM": "Yemen",
    "ZMB": "Zambia",
    "ZWE": "Zimbabwe",
    // Additional lesser-known countries and territories
    "ABW": "Aruba",
    "AIA": "Anguilla",
    "ASM": "American Samoa",
    "ATA": "Antarctica",
    "ATF": "French Southern Territories",
    "BES": "Bonaire, Sint Eustatius and Saba",
    "BVT": "Bouvet Island",
    "CCK": "Cocos (Keeling) Islands",
    "COK": "Cook Islands",
    "CXR": "Christmas Island",
    "FLK": "Falkland Islands (Malvinas)",
    "GIB": "Gibraltar",
    "GLP": "Guadeloupe",
    "GRL": "Greenland",
    "GUF": "French Guiana",
    "HMD": "Heard Island and McDonald Islands",
    "IOT": "British Indian Ocean Territory",
    "MTQ": "Martinique",
    "MYT": "Mayotte",
    "NCL": "New Caledonia",
    "NFK": "Norfolk Island",
    "PCN": "Pitcairn",
    "PYF": "French Polynesia",
    "REU": "Réunion",
    "SGS": "South Georgia and the South Sandwich Islands",
    "SJM": "Svalbard and Jan Mayen",
    "SPM": "Saint Pierre and Miquelon",
    "TCA": "Turks and Caicos Islands",
    "TKL": "Tokelau",
    "UMI": "United States Minor Outlying Islands",
    "VAT": "Holy See (Vatican City State)",
    "WLF": "Wallis and Futuna",
    "BES": "Bonaire, Sint Eustatius and Saba",
    "CUW": "Curaçao",
    "MAF": "Saint Martin (French part)",
    "SXM": "Sint Maarten (Dutch part)"
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Fetch data and initialize the application
fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        countries.push(...data);
        addCountry(data);
    })
    .catch(err => console.error(err));

function addCountry(countries) {
    const cardsDiv = document.querySelector(".cards");
    const fragment = document.createDocumentFragment();

    countries.forEach(country => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${country.flag}" alt="flag">
            <p class="name">${country.name}</p>
            <div class="stats">
                <span><strong>Population:</strong><span>${numberWithCommas(country.population)}</span></span>
                <span><strong>Region:</strong><span>${country.region}</span></span>
                <span><strong>Capital:</strong><span>${country.capital}</span></span>
            </div>
        `;
        fragment.appendChild(card);
    });

    cardsDiv.appendChild(fragment);

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const countryName = card.querySelector(".name").innerHTML;
            const country = countries.find(country => country.name === countryName);
            redirectToDetailsPage(country);
        });
    });
}

function abbreviationToFull(abbreviation) {
    if (countriesAbbreviations[abbreviation] !== undefined) {
        return { name: countriesAbbreviations[abbreviation], abbreviation: abbreviation };
    } else {
        return abbreviation;
    }
}

function redirectToDetailsPage(country) {
    const detailsHtml = `
        <div class="container">
            <img src="${country.flag}" alt="flag">
            <div class="details">
                <h1>${country.name}</h1>
                <div class="stats">
                    <div class="left-stats">
                        <p><strong>Native Name:</strong> ${country.nativeName}</p>
                        <p><strong>Population:</strong> ${numberWithCommas(country.population)}</p>
                        <p><strong>Region:</strong> ${country.region}</p>
                        <p><strong>Sub Region:</strong> ${country.subregion}</p>
                        <p><strong>Capital:</strong> ${country.capital}</p>
                    </div>
                    <div class="right-stats">
                        <p><strong>Top Level Domain:</strong> ${country.topLevelDomain.join(", ")}</p>
                        <p><strong>Currencies:</strong> ${country.currencies.map(currency => currency.name).join(", ")}</p>
                        <p><strong>Languages:</strong> ${country.languages.map(language => language.name).join(", ")}</p>
                    </div>
                </div>
                <span class="border">
                    <strong>Border Countries:</strong>
                    <div class="border-countries">
                        ${country.borders ? country.borders.map(border => {
                            const countryInfo = abbreviationToFull(border);
                            return `<button class="border-button" data-country-abbreviation="${countryInfo.abbreviation}">${countryInfo.name}</button>`;
                        }).join("") : ""}
                    </div>
                </span>
            </div>
        </div>
    `;

    const page = window.open("./details.html");

    page.addEventListener('load', () => {
        page.document.querySelector("#big-container").innerHTML = detailsHtml;
        page.document.querySelector("title").innerHTML = country.name;
    });
}

const searchInput = document.getElementById("search");

const debouncedDisplayMatches = debounce(displayMatches, 300);
searchInput.addEventListener("keyup", debouncedDisplayMatches);
searchInput.addEventListener("change", debouncedDisplayMatches);

function displayMatches() {
    const matchArray = findMatches(this.value, countries);
    const cardsDiv = document.querySelector(".cards");
    cardsDiv.innerHTML = "";

    const fragment = document.createDocumentFragment();

    matchArray.forEach(country => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${country.flag}" alt="flag">
            <p class="name">${country.name}</p>
            <div class="stats">
                <span><strong>Population:</strong><span>${numberWithCommas(country.population)}</span></span>
                <span><strong>Region:</strong><span>${country.region}</span></span>
                <span><strong>Capital:</strong><span>${country.capital}</span></span>
            </div>
        `;
        fragment.appendChild(card);
    });

    cardsDiv.appendChild(fragment);

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const countryName = card.querySelector(".name").innerHTML;
            const country = countries.find(country => country.name === countryName);
            redirectToDetailsPage(country);
        });
    });
}

function findMatches(wordToMatch, countries) {
    const regex = new RegExp(wordToMatch, "gi");
    return countries.filter(country => country.name.match(regex));
}

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

const darkMode = document.querySelector(".dark-mode");

darkMode.addEventListener("click", () => {
    const isLightMode = document.querySelector(".dark-mode p").innerHTML === "Light Mode";
    document.querySelector(".dark-mode p").innerHTML = isLightMode ? "Dark Mode" : "Light Mode";
    document.documentElement.style.setProperty('--dark-bg', isLightMode ? '#212c36' : '#fafafa');
    document.documentElement.style.setProperty('--light-dark', isLightMode ? '#2c3743' : '#ffffff');
    document.documentElement.style.setProperty('--white-color', isLightMode ? '#f9f8fa' : '#121417');
});

const regionSelect = document.getElementById("region");

regionSelect.addEventListener("change", filterByRegion);

function filterByRegion() {
    const selectedRegion = regionSelect.value;
    const cardsDiv = document.querySelector(".cards");
    cardsDiv.innerHTML = "";

    const filteredCountries = selectedRegion === "All" ? countries : countries.filter(country => country.region === selectedRegion);

    addCountry(filteredCountries);
}
