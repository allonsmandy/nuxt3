<script setup>
defineProps({
  game: {
    type: [Object],
  },
})
</script>

<template>
  <atoms-card>
    <img :src="`/${game.image}`">
  </atoms-card>
  <molecules-store-info :game="game" />
</template>
