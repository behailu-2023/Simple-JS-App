
let pokemonRepository = (function () { 
    let pokemonList = [
        { name: 'Pikachu',
        height: 0.4,
        types: ['field', 'fairy'],},
        {
            name: 'Krabby',
            height: 1,
            types: ['water'], 
        },
        {
            name: 'Combee',
            height: 0.3,
            types: ['bug'],
        }
    
    ];
    function add(pokemon) {
        if (typeof pokemon === 'object') { 
        pokemonList.push(pokemon);
      }
    }
    function getAll() {
        return pokemonList;
    }
    function showDetails(pokemon) {
        console.log(pokemon);
    }
    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listitem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listitem.appendChild(button);
        pokemonList.appendChild(listitem);
        button.addEventListener('click', () => {
            showDetails(pokemon);
        });
    }
    return{
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
    
    })();
    
    //console.log(pokemonRepository.getAll());
    pokemonRepository.add({name: 'Abra', height: 0.2, types: ['fire']});
    console.log(pokemonRepository.getAll());
    
    pokemonRepository.getAll().forEach (function (pokemon){
        /*if (pokemon.height > 0.4) {
            document.write('<p>', pokemon.name + ' - ' + pokemon.height + ' Wow, that\'s big!; </p>');
        } else {
            document.write('<p>', pokemon.name + ' - ' + pokemon.height +   '</p>');
        }*/
        pokemonRepository.addListItem(pokemon);
    });
    
    
    
        
    
    
    
    
    





