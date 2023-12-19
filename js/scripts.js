let pokemonRepository = (function () {
    let repository = [
        {
            name: 'Pikachu (height: 0.4)',
            height: 0.4,
            types: ['field', 'fairy'],
        },
        {
            name: 'Krabby (height: 1)',
            height: 1,
            types: ['water'],
        },
        {
            name: 'Combee (height: 0.3)',
            height: 0.3,
            types: ['bug'],
        }
    ];
    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'height' in pokemon &&
            'types' in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log('pokemon is not correct');
        }
        function getAll() {
            return repository;
        }
        function addListItem(pokemon) {
            let pokemonList = document.querySelector('.pokemon-list');
            let listpokemon = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('button-class');
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon);
        }
        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem
        };

}
 }) ();

    pokemonRepository.add({ name: 'Abra', height: 0.9, type: ['psychic'] });
    document.write(pokemonRepository.getAll());

    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
});
