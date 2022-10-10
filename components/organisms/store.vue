<template>
  <ul class="store">
    <li class="store__game" v-for="(item, index) in games.list" :key="index">
      <molecules-store-game :game="item" />
    </li>
  </ul>
</template>

<script setup>
import { useGames } from "../../store/games";
const games = useGames();
</script>

<style lang="scss">
.store {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }

  &__game {
    margin: 15px;
    width: 230px;
    position: relative;

    @media (max-width: 900px) {
      width: 280px;
    }

    @media (max-width: 750px) {
      width: 300px;
    }

    button {
      display: none;
    }

    &:hover,
    &.info-cart:hover {
      button {
        display: block;
      }

      .name,
      .price {
        display: none;
      }
    }
  }
}
</style>
