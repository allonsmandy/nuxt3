<template>
  <div class="info">
    <span class="info__title" data-cy="result-title">{{ title }}</span>
    <strong
      class="info__description"
      data-cy="result-description"
      :class="{ 'info__description--medium': size === 'medium' }"
      >{{ description }}</strong
    >
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
});
</script>

<style lang="scss">
.info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
  align-items: center;

  &__title {
    color: #7f7575;
    font-size: 14px;
  }

  &__description {
    color: #423b3b;
    font-size: 16px;

    &--medium {
      font-size: 24px;
    }
  }
}
</style>
