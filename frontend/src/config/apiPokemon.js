const urlPokemon = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";
// const urlImagenPokemon =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
import axios from "axios";

export const apiPokemon = axios.create({
  baseURL: urlPokemon,
});

// export const apiImagePokemon = axios.create({
//   baseURL: urlImagenPokemon,
// });
