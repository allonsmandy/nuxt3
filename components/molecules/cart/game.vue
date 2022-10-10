<template>
  <article class="cart-game">
    <span class="cart-game__quantity">{{ cart.quantity[game.id] }}</span>
    <atoms-card class="cart-game__card">
      <img :src="`/${game.image}`" />
    </atoms-card>
    <div class="cart-game__item">
      <div class="cart-game__item__info">
        <atoms-name>{{ game.name }}</atoms-name>
        <atoms-price>{{ game.price }}</atoms-price>
      </div>
      <atoms-button @click="cart.remove(game)">x</atoms-button>
    </div>
  </article>
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
.cart-game {
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 8px;

  &:hover {
    button {
      display: flex;
    }
  }

  &__quantity {
    background-color: var(--aqua);
    border-radius: 50%;
    color: var(--cotton);
    width: 8px;
    height: 8px;
    padding: 8px;
    font-size: $size-12;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: absolute;
    top: -5px;
    left: -5px;
  }

  &__card {
    background-color: var(--nevada--1);
    border-radius: 3px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;

    img {
      width: 40px;
      height: 40px;
    }
  }

  &__item {
    button {
      position: absolute;
      right: 0;
      background-color: var(--aqua);
      color: var(--cotton);
      cursor: pointer;
      border: none;
      padding: 2px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      top: 20px;
      align-items: center;
      justify-content: center;
      display: none;
      font-weight: bold;
      font-size: 10px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      font-size: $size-14;

      span:last-child {
        color: var(--default);
      }
    }
  }
}
</style>
