import axios from 'axios'


export default  function getPokemons (limit, offset, indexPoke, callback) {
     axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
            newPokemonData[index + indexPoke] = {
                id: index + indexPoke,
                name: pokemon.name,
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + indexPoke}.png`,
            }
        })
        callback(newPokemonData)
       

    })
}