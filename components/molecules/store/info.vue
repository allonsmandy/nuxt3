<template>
  <div class="game__info">
    <atoms-name>{{ game.name }}</atoms-name>
    <atoms-price>{{ game.price }}</atoms-price>
    <atoms-button typeButton="link" @click="cart.addGame(game)"
      >adicionar ao carrinho</atoms-button
    >
  </div>
</template>

<script setup>
import { useCart } from "../../../store/cart";
const cart = useCart();

defineProps({
  game: {
    type: [Object],
  },
});
</script>

<style lang="scss" scoped>
.game {
  &__info {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
    text-align: center;

    button {
      position: absolute;
    }
  }
}
</style>
