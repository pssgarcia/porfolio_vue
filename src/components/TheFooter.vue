<script setup>
const currentYear = new Date().getFullYear()

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/pssgarcia' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedro-soares-b996a5263/' },
  { label: 'Email', href: 'mailto:pedrossgarcia88@gmail.com' },
]
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__links">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__link"
        >
          {{ link.label }}
        </a>
      </div>
      <p class="footer__copyright">
        © {{ currentYear }} Pedro Soares. Built with
        <span class="accent">Vue.js</span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--space-2xl) 0;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

.footer__links {
  display: flex;
  gap: var(--space-xl);
}

.footer__link {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-accent-light);
}

.footer__copyright {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}
</style>
