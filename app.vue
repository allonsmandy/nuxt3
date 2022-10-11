<script setup>
import { useGames } from './store/games'
const games = useGames()

games.fetchGames()
</script>

<template>
  <main>
    <section class="wrapper">
      <templates-the-header />
      <organisms-store />
    </section>
    <templates-the-cart />
  </main>
</template>

<style>
main {
  display: flex;
  padding: 50px;
  align-items: flex-start;
  max-width: 1200px;
  justify-content: center;
  flex-wrap: wrap;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>
