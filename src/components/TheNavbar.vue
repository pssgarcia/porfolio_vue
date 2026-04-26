<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useActiveSection } from '@/composables/useActiveSection'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const { activeSection } = useActiveSection([
  'hero', 'about', 'projects', 'experience', 'contact'
])

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

function scrollTo(href) {
  closeMobileMenu()
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    id="main-nav"
    class="navbar"
    :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': isMobileMenuOpen }"
  >
    <div class="navbar__inner container">
      <a
        href="#hero"
        class="navbar__logo"
        @click.prevent="scrollTo('#hero')"
      >
        <span class="navbar__logo-icon">P</span>
        <span class="navbar__logo-text">Pedro</span>
      </a>

      <ul class="navbar__links">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="navbar__link"
            :class="{ 'navbar__link--active': activeSection === link.href.slice(1) }"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <button
        id="mobile-menu-toggle"
        class="navbar__hamburger"
        :class="{ 'navbar__hamburger--open': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <Transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="navbar__mobile-overlay" @click.self="closeMobileMenu">
        <ul class="navbar__mobile-links">
          <li v-for="(link, i) in navLinks" :key="link.href" :style="{ transitionDelay: `${i * 60}ms` }">
            <a
              :href="link.href"
              class="navbar__mobile-link"
              :class="{ 'navbar__mobile-link--active': activeSection === link.href.slice(1) }"
              @click.prevent="scrollTo(link.href)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  transition: all var(--transition-base);
  background: transparent;
}

.navbar--scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Logo */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  z-index: 1001;
}

.navbar__logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-deep));
  border-radius: var(--radius-sm);
  font-weight: 800;
  font-size: 1.1rem;
  color: #fff;
}

.navbar__logo-text {
  font-weight: 700;
  font-size: var(--font-size-lg);
  color: var(--color-text-heading);
}

/* Desktop links */
.navbar__links {
  display: none;
  align-items: center;
  gap: var(--space-xl);
}

@media (min-width: 768px) {
  .navbar__links {
    display: flex;
  }
}

.navbar__link {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
  position: relative;
  padding: var(--space-xs) 0;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  border-radius: var(--radius-full);
  transition: width var(--transition-base);
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--color-text-heading);
}

.navbar__link--active::after,
.navbar__link:hover::after {
  width: 100%;
}

.navbar__link--active {
  color: var(--color-accent-light);
}

/* Hamburger */
.navbar__hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0;
}

@media (min-width: 768px) {
  .navbar__hamburger {
    display: none;
  }
}

.navbar__hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
  transform-origin: center;
}

.navbar__hamburger--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.navbar__hamburger--open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.navbar__hamburger--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile overlay */
.navbar__mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 15, 0.95);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.navbar__mobile-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2xl);
}

.navbar__mobile-links li {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.4s ease forwards;
}

.navbar__mobile-link {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
}

.navbar__mobile-link:hover,
.navbar__mobile-link--active {
  color: var(--color-accent-light);
}

/* Mobile menu transition */
.mobile-menu-enter-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-leave-active {
  transition: opacity 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
</style>
