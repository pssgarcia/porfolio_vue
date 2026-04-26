<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techs: { type: Array, default: () => [] },
  github: { type: String, default: '' },
  demo: { type: String, default: '' },
})
</script>

<template>
  <article class="project-card glass-card">
    <div class="project-card__content">
      <div class="project-card__header">
        <svg class="project-card__folder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        <div class="project-card__links">
          <a
            v-if="github"
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            class="project-card__link"
            aria-label="View source code on GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            v-if="demo"
            :href="demo"
            target="_blank"
            rel="noopener noreferrer"
            class="project-card__link"
            aria-label="View live demo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <h3 class="project-card__title">{{ title }}</h3>
      <p class="project-card__description">{{ description }}</p>

      <div class="project-card__techs">
        <span v-for="tech in techs" :key="tech" class="project-card__tech">
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(168, 85, 247, 0.3);
  box-shadow: 0 8px 30px rgba(168, 85, 247, 0.1);
}

.project-card:hover::before {
  opacity: 1;
}

.project-card__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-xl);
}

.project-card__folder-icon {
  width: 40px;
  height: 40px;
  color: var(--color-accent);
}

.project-card__links {
  display: flex;
  gap: var(--space-md);
}

.project-card__link {
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
  display: flex;
  align-items: center;
}

.project-card__link:hover {
  color: var(--color-accent-light);
}

.project-card__title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  color: var(--color-text-heading);
  transition: color var(--transition-fast);
}

.project-card:hover .project-card__title {
  color: var(--color-accent-light);
}

.project-card__description {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.7;
  flex: 1;
  margin-bottom: var(--space-xl);
}

.project-card__techs {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-top: auto;
}

.project-card__tech {
  font-size: var(--font-size-xs);
  color: var(--color-accent-light);
  font-weight: 500;
  font-family: 'SF Mono', 'Fira Code', monospace;
}

.project-card__tech::before {
  content: '#';
  opacity: 0.6;
}
</style>
