<template>
  <div class=" justify-center min-h-screen">
    <div class="px-20">
      <label for="UserEmail" class="sr-only"> Email </label>

      <input
        type="email"
        id="UserEmail"
        placeholder="chad@rhcp.com"
        class="w-full rounded-md border-gray-200 py-2.5 pr-10 shadow-sm sm:text-sm"
      />

      <span class="absolute inset-y-0 right-0 grid w-10 place-content-center">
        <button
          type="button"
          class="rounded-full bg-rose-600 p-0.5 text-white hover:bg-rose-700"
        >
          <span class="sr-only">Submit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-4 w-4"
          >
            <path
              d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
            />
          </svg>
        </button>
      </span>
      
    </div>
    <div class="grid grid-cols-4 gap-0.5 mt-2 md:p-0 p-5">
        <div class="" v-for="(pokemon, i) in pokemons" :key="i">
          <div class="w-full">
            <img class="my-2 w-full h-full" alt="photo" />
            <p
              class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
            ></p>
            <img class="my-2 w-full h-full" alt="photo" />
            <p
              class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"
            >
              {{ pokemon.name }}
            </p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { getPokemonList } from "../../services/pokemonService";

export default {
  setup() {
    let pokemons = ref([]);
    onMounted(() => {
      getPokemon();
    });

    async function getPokemon() {
      getPokemonList()
        .then((res) => {
          pokemons.value = res.data.results;
        })
        .catch((error) => console.log(error));
    }
    return { getPokemon, pokemons };
  },
};
</script>
