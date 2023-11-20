const pokemonList = [
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
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 0.5 && pokemonList[i].height > 0.3){
    document.write(pokemonList[i].name);
} 
else if(pokemonList[i].height >= 1) 
{
    document.write(pokemonList[i].name + ' -Wow,that is big!');
}else {
document.write(pokemonList[i].name)
}
}