<script setup>
function scrollTo(id) {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero">
    <!-- Animated background orbs -->
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>
      <div class="hero__orb hero__orb--3"></div>
      <div class="hero__orb hero__orb--4"></div>
      <div class="hero__grid"></div>
    </div>

    <div class="hero__content container">
      <p class="hero__greeting">Hi, my name is</p>
      <h1 class="hero__name">Pedro Soares<span class="accent">.</span></h1>
      <h2 class="hero__role">Full-Stack Developer</h2>
      <p class="hero__tagline">
        I build scalable web applications end-to-end, specializing in
        <span class="accent">Vue.js</span>, <span class="accent">Laravel</span>, and
        <span class="accent">modern APIs</span>.
      </p>
      <div class="hero__cta">
        <button class="btn btn-primary" @click="scrollTo('#projects')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          View Projects
        </button>
        <button class="btn btn-secondary" @click="scrollTo('#contact')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Contact Me
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll" aria-hidden="true">
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: var(--nav-height);
}

/* Animated background */
.hero__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
}

.hero__orb--1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
  top: 10%;
  right: 15%;
  animation: float 20s ease-in-out infinite;
}

.hero__orb--2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--color-accent-deep) 0%, transparent 70%);
  bottom: 20%;
  left: 10%;
  animation: float-reverse 25s ease-in-out infinite;
}

.hero__orb--3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, transparent 70%);
  top: 50%;
  left: 40%;
  animation: float 30s ease-in-out infinite;
}

.hero__orb--4 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(196, 181, 253, 0.3) 0%, transparent 70%);
  bottom: 30%;
  right: 30%;
  animation: float-reverse 18s ease-in-out infinite;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}

/* Content */
.hero__content {
  position: relative;
  z-index: 1;
  max-width: 720px;
  animation: fadeIn 1s ease;
}

.hero__greeting {
  font-size: var(--font-size-base);
  color: var(--color-accent-light);
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-md);
  animation: fadeInUp 0.6s ease both;
}

.hero__name {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--space-md);
  animation: fadeInUp 0.6s ease 0.1s both;
}

.hero__role {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
  animation: fadeInUp 0.6s ease 0.2s both;
}

.hero__tagline {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  max-width: 520px;
  margin-bottom: var(--space-2xl);
  animation: fadeInUp 0.6s ease 0.3s both;
}

.hero__cta {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  animation: fadeInUp 0.6s ease 0.4s both;
}

/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--color-accent), transparent);
  animation: pulse 2s ease-in-out infinite;
}

@media (max-width: 480px) {
  .hero__cta {
    flex-direction: column;
  }

  .hero__cta .btn {
    width: 100%;
  }
}
</style>
