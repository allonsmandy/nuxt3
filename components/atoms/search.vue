<script setup>
import { useGames } from '../../store/games'
const games = useGames()

const filter = (event) => {
  const value = event.target.value

  const filterType = {
    'plus-score': (a, b) => b.score - a.score,
    'minus-score': (a, b) => a.score - b.score,
    'cheap': (a, b) => a.price - b.price,
    'expensives': (a, b) => b.price - a.price,
    'ascending': (a, b) => a.name.localeCompare(b.name),
    'descending': (a, b) => b.name.localeCompare(a.name),
  }

  games.$patch({ list: games.list.sort(filterType[value]) })
}
</script>

<template>
  <select @change="filter">
    <option value="plus-score">
      Mais populares
    </option>
    <option value="minus-score">
      Menos populares
    </option>
    <option value="cheap">
      Mais baratos
    </option>
    <option value="expensives">
      Mais caros
    </option>
    <option value="ascending">
      Ordem ascendente
    </option>
    <option value="descending">
      Ordem decrescente
    </option>
  </select>
</template>

<style lang="scss">
select {
  background-color: var(--cotton);
  padding: 8px;
  border: 0;
  outline: 1px solid var(--nevada--1);
  border-radius: 4px;
  color: var(--default);
}
</style>
