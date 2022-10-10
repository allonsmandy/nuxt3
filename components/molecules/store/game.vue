<template>
  <atoms-card>
    <img :src="`/${game.image}`" />
  </atoms-card>
  <molecules-store-info :game="game" />
</template>

<script setup>
defineProps({
  game: {
    type: [Object],
  },
});
</script>
