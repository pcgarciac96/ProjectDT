import { apiPokemon } from "@/config/apiPokemon";

export const getPokemonList = () => apiPokemon.get();
