<template>
  <span class="price"> R$ <slot /> </span>
</template>

<style lang="scss">
.price {
  color: var(--aqua);
  font-size: $size-16;
  font-weight: bold;
}
</style>
