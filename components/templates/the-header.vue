<template>
  <header class="header">
    <h1 class="header__title">Games</h1>
    <atoms-search />
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &__title {
    font-size: $size-28;
  }
}
</style>
