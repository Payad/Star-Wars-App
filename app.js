//character fetch call

const fetchCharData = () => {
    const characters = [];
    for (let i = 1; i < 5; i++) {
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
for (let i = 1; i < 10; i++) {
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
    const planetDiv = document.querySelector('.Planets');
    const starshipDiv = document.querySelector('.Starships');

    charBtn.addEventListener('click', () => {
    filmsDiv.innerHTML = '';
    planetDiv.innerHTML = '';
    starshipDiv.innerHTML = '';
    
    const characterSection = characters.map((character) => 
        `<div class="characterDiv">
            <div class="name info">${character.name}</div>
            <div class="height character info">Height <span id="character">${character.height}</span></div>
            <div class="hair_color character info">Hair Color <span id="character">${character.hair_color}<span></div>
            <div class="weight character info">Weight <span id="character">${character.weight}</span></div>
            <div class="birth_year character info">Birth Year <span id="character">${character.birth_year}</span></div>
        </div>`
    ).join('');

    characterDiv.innerHTML = characterSection;
    })
}

const createFilms = (films) => {
    const filmsDiv = document.querySelector('.Films');
    const filmsBtn = document.querySelector('.filmsBtn');
    const characterDiv = document.querySelector('.Characters');
    const planetDiv = document.querySelector('.Planets');
    const starshipDiv = document.querySelector('.Starships');

    filmsBtn.addEventListener('click', () => {
    planetDiv.innerHTML = '';
    starshipDiv.innerHTML = '';
    characterDiv.innerHTML = '';
    const Films = films.map((film) => 
        `<div class="film">
            <div class="title">${film.title}</div>
            <div class="episode">Episode: <span id="film">${film.episode}</span></div>
            <div class="description">${film.opening_crawl}</div>
            
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
    const starshipDiv = document.querySelector('.Starships');

    planetsBtn.addEventListener('click', () => {
        characterDiv.innerHTML = '';
        filmsDiv.innerHTML = '';
        starshipDiv.innerHTML = '';
    const Planets = planets.map((planet) => 
        `<div class="planetDiv">
        <div class="planetName">Name <span>${planet.name}</span></div>
        <div class="rotation">Rotation period <span class="info">${planet.rotation_period}</span></div>
        <div class="orbital_period">Orbital period <span class="info">${planet.orbital_period}</span></div>
        <div class="diameter">Diameter <span class="info">${planet.diameter}</span></div>
        <div class="climate">Climate <span class="info">${planet.climate}</span></div>
        <div class="gravity">Gravity <span class="info">${planet.gravity}</span></div>
        <div class="terrain">Terrain <span class="info">${planet.terrain}</span></div>
        <div class="surface_water">Surface Water <span class="info">${planet.surface_water}<span></div>
        <div class="population">Population <span class="info">${planet.population}</span></div>
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
        `<div class="starship">
        <div class="starship_name">${starship.name}</div>
        <div class="model">Model: <span id="ship_info">${starship.model}</span></div>
        <div class="manufacturer">Manufacturer: <span id="ship_info">${starship.manufacturer}</span></div>
        <div class="atmosphering_speed">Atmosphering speed: <span id="ship_info">${starship.max_atmosphering_speed}</span></div>
        <div class="crew">Crew: <span id="ship_info">${starship.crew}</span></div>
        <div class="passengers">Passengers: <span id="ship_info">${starship.passengers}</span></div>
        <div class="cargo">Cargo_capacity: <span id="ship_info">${starship.cargo_capacity}</span></div>
        <div class="consumables">Consumables: <span id="ship_info">${starship.consumables}</span></div>
        <div class="hyperdrive">Hyperdrive rating: <span id="ship_info">${starship.hyperdrive_rating}</span></div>
        <div class="MGLT">MGLT <span id="ship_info">${starship.MGLT}</span></div>
        <div class="starship_class">Starship class: <span id="ship_info">${starship.starship_class}</span></div>
        </div>`
    ).join('');
    starshipDiv.innerHTML = Starships;
    });
}


fetchCharData();
// fetchFilms();