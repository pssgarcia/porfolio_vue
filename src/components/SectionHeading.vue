<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div class="section-heading">
    <h2 class="section-heading__title">{{ title }}</h2>
    <p v-if="subtitle" class="section-heading__subtitle">{{ subtitle }}</p>
    <div class="section-heading__line"></div>
  </div>
</template>

<style scoped>
.section-heading {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.section-heading__title {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  margin-bottom: var(--space-sm);
}

.section-heading__subtitle {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  max-width: 500px;
  margin: 0 auto;
}

.section-heading__line {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-light));
  border-radius: var(--radius-full);
  margin: var(--space-lg) auto 0;
}
</style>
