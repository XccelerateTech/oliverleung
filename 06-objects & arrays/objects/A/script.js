var asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

//Mumbai's population

console.log(asia.countries.India.Mumbai.population);

//Beijing's population

console.log(asia.countries.China.Beijing.population);

//Hong Kong's population

console.log(asia["countries"]["China"]["Hong Kong"]["population"]);

console.log(asia.countries.China["Hong Kong"].population);
