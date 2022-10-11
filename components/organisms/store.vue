<script setup>
import { useGames } from '../../store/games'
const games = useGames()
</script>

<template>
  <ul class="store">
    <li v-for="(item, index) in games.list" :key="index" class="store__game">
      <molecules-store-game :game="item" />
    </li>
  </ul>
</template>

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
