<script setup>
defineProps({
  name: { type: String, required: true },
  icon: { type: String, required: true },
})
</script>

<template>
  <span class="skill-badge animate-on-scroll">
    <span class="skill-badge__icon">{{ icon }}</span>
    <span class="skill-badge__name">{{ name }}</span>
  </span>
</template>

<style scoped>
.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.5rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text);
  transition: all var(--transition-base);
  cursor: default;
}

.skill-badge:hover {
  border-color: var(--color-accent);
  background: var(--color-accent-muted);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow-sm);
}

.skill-badge__icon {
  font-size: 1.1em;
  line-height: 1;
}

.skill-badge__name {
  white-space: nowrap;
}
</style>
