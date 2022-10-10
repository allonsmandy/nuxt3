import { defineStore } from "pinia";

export const useGames = defineStore({
  id: "games-store",
  state: () => {
    return {
      list: [],
    };
  },
  actions: {
    async fetchGames() {
      const { data } = await useFetch("/api/products");
      this.list = data.value;
    },
  },
});
