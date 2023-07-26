//character fetch call

const fetchCharData = () => {
    const characters = [];
    for (let i = 1; i < 10; i++) {
    // const characters = [];
    const url = (`https://swapi.dev/api/people/${i}`);
    characters.push(fetch(url).then((data) => data.json()))
        
}
Promise.all(characters).then((results) => {
   const characters = results.map((result) => ({
        name: result.name,
        height: result.height,
        hair_color: result.hair_color,
        weight: result.mass,
        birth_year: result.birth_year,
    }))
    createCharacter(characters)
});

}

// const fetchFilms = () => {
    const films = [];
    for (let i = 1; i < 6; i++) {
        const url = (`https://swapi.dev/api/films/${i}`);
        films.push(fetch(url).then((data) => data.json()));
    }

    Promise.all(films).then((results) => { 
        const films = results.map((result) => ({
            title: result.title,
            episode: result.episode_id,
            opening_crawl: result.opening_crawl
        }));
        createFilms(films)
})
// }

const planets = [];
for (let i = 1; i < 3; i++) {
    const url = `https://swapi.dev/api/planets/${i}`;
    planets.push(fetch(url).then((data) => data.json()));
}

Promise.all(planets).then((results) => {
    const planets = results.map((result) => ({
        name: result.name,
        rotation_period: result.rotation_period,
        orbital_period: result.obital_period,
        diameter: result.diameter,
        climate: result.climate,
        gravity: result.gravity,
        terrain: result.terrain,
        surface_water: result.surface_water,
        population: result.population,
        
    }))
    createPlanets(planets);
})

const starships = [];
// for (let i = 1; i < 3; i++) {
    // const url = `https://swapi.dev/api/starships/${i}`;
    const st2 = fetch('https://swapi.py4e.com/api/starships/2/').then((data) => data.json());
    const st3 = fetch('https://swapi.py4e.com/api/starships/3/').then((data) => data.json());
    const st5 = fetch('https://swapi.py4e.com/api/starships/5/').then((data) => data.json());
    const st9 = fetch('https://swapi.py4e.com/api/starships/9/').then((data) => data.json());
    // starships.push(fetch(url).then((data) => console.log(data)));
    starships.push(st2,st3,st5,st9);
// }

Promise.all(starships).then((results) => {
    const starships = results.map((result) => ({
        name: result.name,
        model: result.model,
        manufacturer: result.manufacturer,
        max_atmosphering_speed: result.max_atmosphering_speed,
        crew: result.crew,
        passengers: result.passengers,
        cargo_capacity: result.cargo_capacity,
        consumables: result.consumables,
        hyperdrive_rating: result.hyperdrive_rating,
        MGLT: result.MGLT,
        starship_class: result.starship_class
    }))
        createStarships(starships);
});

const createCharacter = (characters) => {
    const characterDiv = document.querySelector('.Characters');
    console.log(characterDiv)
    const charBtn = document.querySelector('.peopleBtn');
    const filmsDiv = document.querySelector('.Films');

    charBtn.addEventListener('click', () => {
    filmsDiv.innerHTML = '';
    const characterSection = characters.map((character) => 
        `<div>
            <div>${character.name}</div>
            <div>${character.height}</div>
            <div>${character.hair_color}</div>
            <div>${character.weight}</div>
            <div>${character.birth_year}</div>
        </div>`
    ).join('');

    characterDiv.innerHTML = characterSection;
    })
}

const createFilms = (films) => {
    const filmsDiv = document.querySelector('.Films');
    const filmsBtn = document.querySelector('.filmsBtn');
    const characterDiv = document.querySelector('.Characters');

    filmsBtn.addEventListener('click', () => {
    characterDiv.innerHTML = '';
    const Films = films.map((film) => 
        `<div>
            <div>${film.title}</div>
            <div>${film.episode}</div>
            <div>${film.opening_crawl}</div>
            
        </div>`
    )
        filmsDiv.innerHTML = Films;
    });
}
// createCharacter()

const createPlanets = (planets) => {
    const PlanetDiv = document.querySelector('.Planets');
    const characterDiv = document.querySelector('.Characters');
    const filmsDiv = document.querySelector('.Films');
    const planetsBtn = document.querySelector('.planetsBtn');

    planetsBtn.addEventListener('click', () => {
        characterDiv.innerHTML = '';
        filmsDiv.innerHTML = '';
    const Planets = planets.map((planet) => 
        `<div>
        <div>${planet.name}</div>
        <div>${planet.rotation_period}</div>
        <div>${planet.orbital_period}</div>
        <div>${planet.diameter}</div>
        <div>${planet.climate}</div>
        <div>${planet.gravity}</div>
        <div>${planet.terrain}</div>
        <div>${planet.surface_water}</div>
        <div>${planet.population}</div>
        </div>`
    ).join('');

    PlanetDiv.innerHTML = Planets;
    });
}

const createStarships = (starships) => {
    const starshipDiv = document.querySelector('.Starships');
    const starshipsBtn = document.querySelector('.starshipsbtn');
    const PlanetDiv = document.querySelector('.Planets');
    const characterDiv = document.querySelector('.Characters');
    const filmsDiv = document.querySelector('.Films');

    starshipsBtn.addEventListener('click', () => {
        PlanetDiv.innerHTML = '';
        characterDiv.innerHTML = '';
        filmsDiv.innerHTML = '';
    const Starships = starships.map((starship) => 
        `<div>
        <div>${starship.name}</div>
        <div>${starship.model}</div>
        <div>${starship.manufacturer}</div>
        <div>${starship.max_atmosphering_speed}</div>
        <div>${starship.crew}</div>
        <div>${starship.passengers}</div>
        <div>${starship.cargo_capacity}</div>
        <div>${starship.consumables}</div>
        <div>${starship.hyperdrive_rating}</div>
        <div>${starship.MGLT}</div>
        <div>${starship.starship_class}</div>
        </div>`
    ).join('');
    starshipDiv.innerHTML = Starships;
    });
}


fetchCharData();
// fetchFilms();