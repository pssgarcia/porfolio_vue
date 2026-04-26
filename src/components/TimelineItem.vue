<script setup>
defineProps({
  date: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, default: '' },
  type: { type: String, default: 'work' },
})
</script>

<template>
  <div class="timeline-item">
    <div class="timeline-item__dot">
      <span class="timeline-item__dot-inner" :class="`timeline-item__dot-inner--${type}`"></span>
    </div>
    <div class="timeline-item__card glass-card">
      <span class="timeline-item__date">{{ date }}</span>
      <h3 class="timeline-item__title">{{ title }}</h3>
      <p class="timeline-item__subtitle">{{ subtitle }}</p>
      <p v-if="description" class="timeline-item__description">{{ description }}</p>
      <span class="timeline-item__type-badge" :class="`timeline-item__type-badge--${type}`">
        {{ type === 'work' ? '💼 Work' : '🎓 Education' }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  display: flex;
  gap: var(--space-xl);
  position: relative;
  padding-bottom: var(--space-2xl);
}

.timeline-item__dot {
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: var(--space-xl);
  position: relative;
  z-index: 2;
}

.timeline-item__dot-inner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 3px solid var(--color-accent);
  background: var(--color-bg);
  transition: all var(--transition-base);
}

.timeline-item__dot-inner--education {
  border-color: var(--color-accent-light);
}

.timeline-item:hover .timeline-item__dot-inner {
  background: var(--color-accent);
  box-shadow: 0 0 12px var(--color-accent-glow);
}

.timeline-item__card {
  flex: 1;
  padding: var(--space-xl);
  transition: all var(--transition-base);
}

.timeline-item__card:hover {
  border-color: rgba(168, 85, 247, 0.25);
  transform: translateX(4px);
}

.timeline-item__date {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-accent-light);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.timeline-item__title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-top: var(--space-sm);
  color: var(--color-text-heading);
}

.timeline-item__subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-top: var(--space-xs);
}

.timeline-item__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-top: var(--space-md);
}

.timeline-item__type-badge {
  display: inline-block;
  margin-top: var(--space-md);
  font-size: var(--font-size-xs);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  background: var(--color-accent-muted);
  color: var(--color-accent-light);
  font-weight: 500;
}

.timeline-item__type-badge--education {
  background: rgba(124, 58, 237, 0.1);
  color: #c4b5fd;
}
</style>
