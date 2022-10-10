import { defineStore } from "pinia";

interface Products {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

export const useCart = defineStore({
  id: "cart-store",
  state: () => {
    return {
      list: [],
      shippingCost: 0,
    };
  },
  actions: {
    increaseShippingCost() {
      this.shippingCost += 10;
    },
    decreaseShippingCost() {
      this.shippingCost -= 10;
    },
    addGame(game) {
      this.list.push(game);
      this.increaseShippingCost();
    },
    remove(game) {
      const index = this.list.findIndex((game) => game.id === game.id);
      this.list.splice(index, 1);

      this.decreaseShippingCost();
    },
  },
  getters: {
    subtotal: (state) => {
      return state.list.reduce((a, b) => a + b.price, 0);
    },
    totalShipping: (state): number => {
      return state.subtotal > 250 ? 0 : state.shippingCost;
    },
    total: (state): number => {
      return state.subtotal + state.totalShipping;
    },
    listGames: (state): Products[] => {
      return state.list.filter(
        (game, index, list) => list.findIndex((g) => g.id == game.id) == index
      );
    },
    quantity: (state) => {
      return state.list.reduce((acc, game) => {
        acc[game.id] = acc[game.id] ? acc[game.id] + 1 : 1;

        return acc;
      }, {});
    },
  },
});
