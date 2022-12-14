import axiosClient from "./axiosClient";

const pokedexApi = {
   getPokedex: (offset, limit) => {
      const url = `/pokemon/?offset=${offset}&limit=${limit}`;
      return axiosClient.get(url);
   },
   getDetailPokemon: (id) => {
      const url = `/pokemon/${id}`;
      return axiosClient.get(url);
   },
   getEntriesPokemon: (id) => {
      const url = `/pokemon-species/${id}`;
      return axiosClient.get(url);
   },
   getPokeByName: (name) => {
      const url = `/pokemon/${name}`;
      return axiosClient.get(url);
   },
   getAll: () => {
      const url = `/pokemon/?offset=0&limit=1118`;
      return axiosClient.get(url);
   },
};

export default pokedexApi;
