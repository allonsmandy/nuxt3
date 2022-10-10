<template>
  <button :class="getStyle">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  typeButton: {
    type: String,
    default: "button",
    validator: (type) => ["link", "button"].includes(type),
  },
});

const getStyle = computed(() => {
  return String(props.typeButton);
});
</script>

<style lang="scss">
button {
  background-color: transparent;
  border-radius: 3px;
  font-size: $size-14;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  border: none;
  padding: 15px 40px;
}

.button {
  background-color: var(--aqua);
  color: var(--cotton);
}

.link {
  color: var(--aqua);
}
</style>
