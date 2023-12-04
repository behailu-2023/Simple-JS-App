let pokemonRepository = (function () { 
let pokemonList = [
    {name: 'Pikachu (height: 0.4)',
     height: 0.4, 
     type: ['field','fairy']}, 
    {name: 'Krabby (height: 1)', 
    height: 1,
    type: 'water'}, 
    {name: 'Combee (height: 0.3)', 
    height: 0.3, 
    type: 'bug'}
];
function add(pokemon) {
    pokemonList.push(pokemon);
}
function getAll() {
    return pokemonList;
}
return {
    add: add,
    getAll: getAll
};

})();
console.log(pokemonRepository.getAll ());
pokemonRepository.add({ name: 'Abra'});
console.log(pokemonRepository.getAll());


/*for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 0.5 && pokemonList[i].height > 0.3){
    document.write(pokemonList[i].name);
} 
else if(pokemonList[i].height >= 1) 
{
    document.write(pokemonList[i].name + ' -Wow,that is big!');
}else {
document.write(pokemonList[i].name)
}
}*/

/*pokemonList.forEach(function(pokemon) {
    console.log(pokemon.name + ' height ' + ' type ');
    
});*/
function myFavoritePokemon(pokemon) {
    console.log(pokemon.name + ' height ' + ' type ');
}
pokemonList.forEach(myFavoritePokemon);