
let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    let modalContainer = document.querySelector('#modal-container');

    function add(pokemon) {
        if (typeof pokemon === 'object' &&
            'name' in pokemon &&
            'detailsUrl' in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log('pokemon is not correct')
        }
    }

    function getAll() {
        return pokemonList;
    }

    function filterByName(name) {
        return pokemonList.filter(function (pokemon) {
            return pokemon.name === name;
        });
    }
    /*function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }*/

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let li = document.createElement('li');
        pokemonList.appendChild(li);
        li.classList.add('pokemon-name-list');

        let button = document.createElement('button');
        button.innerText = pokemon.name;
        li.appendChild(button);
        button.classList.add('pokemon-name-button');

        addEventListenerToButton(button, pokemon); 
    }

    function addEventListenerToButton(button, pokemon) {
        button.addEventListener('click', function (e) {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imgUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }
    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            modalContainer.innerHTML = '';

            let modal = document.createElement('div')
            modal.classList.add('modal');

            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'x';
            closeButtonElement.addEventListener('click', hideModal);

            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                    hideModal();
                }
            });


            modalContainer.addEventListener('click', (e) => {

                let target = e.target;
                if (target === modalContainer) {
                    hideModal();
                }
            });

            let imgElement = document.createElement('img');
            imgElement.src = item.imgUrl;
            imgElement.alt = item.name;

            let titleElement = document.createElement('h1');
            titleElement.innerText = item.name;

            let contentElement = document.createElement('p');
            contentElement.innerText = 'Height: ' + item.height +  "'";


            modal.appendChild(closeButtonElement);
            modal.appendChild(imgElement);
            modal.appendChild(titleElement);
            modal.appendChild(contentElement);

            let containerTypes = document.createElement('div');
            containerTypes.classList.add('type-container')
            modal.appendChild(containerTypes);
            modalContainer.appendChild(modal);
            modalContainer.classList.add('is-visible');

        });
    }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        filterByName: filterByName,
        loadList: loadList,
        loadDetails: loadDetails
    };

})();
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
















