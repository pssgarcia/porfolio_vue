<script setup>
import { ref, onMounted } from 'vue'
import SectionHeading from './SectionHeading.vue'
import SkillBadge from './SkillBadge.vue'
import { skills } from '@/data/skills'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { targetRef, isVisible } = useIntersectionObserver()

const skillsContainerRef = ref(null)
const skillsVisible = ref(false)

let skillsObserver = null

onMounted(() => {
  skillsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        skillsVisible.value = true
        skillsObserver.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -50px 0px', threshold: 0.1 }
  )
  if (skillsContainerRef.value) {
    skillsObserver.observe(skillsContainerRef.value)
  }
})
</script>

<template>
  <section id="about" class="section about">
    <div class="container">
      <div ref="targetRef" :class="['about__wrapper', { 'is-visible': isVisible }]">
        <SectionHeading title="About Me" subtitle="A bit about who I am and what I do" />

        <div class="about__content">
          <div class="about__text">
            <p>
              I'm a full-stack developer with a strong focus on backend development, based
              in <span class="accent">Belo Horizonte, Brazil</span>. I develop scalable
              web applications end-to-end, using JavaScript, Vue, and React on the frontend,
              and PHP (Laravel) with MySQL on the backend.
            </p>
            <p>
              My work is centered around designing APIs, managing data flow, and building
              systems that are <span class="accent">reliable, efficient, and built to scale</span>
              — not just interfaces that look good.
            </p>
            <p>
              Currently pursuing a Bachelor's degree in Software Engineering at PUC Minas,
              I focus on performance, scalability, and writing clean, maintainable code
              that solves real problems.
            </p>
            <p>
              Outside of tech, I'm into fitness, music, and fashion. I value consistency,
              challenges, and continuous growth.
            </p>
          </div>
        </div>

        <div class="about__skills" ref="skillsContainerRef">
          <h3 class="about__skills-title">Technologies I work with</h3>
          <div :class="['about__skills-grid stagger-children', { 'skills-visible': skillsVisible }]">
            <SkillBadge
              v-for="skill in skills"
              :key="skill.name"
              :name="skill.name"
              :icon="skill.icon"
              :class="{ 'is-visible': skillsVisible }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__wrapper {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.about__wrapper.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.about__content {
  max-width: 700px;
  margin: 0 auto var(--space-3xl);
}

.about__text p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
  line-height: 1.8;
  margin-bottom: var(--space-lg);
}

.about__text p:last-child {
  margin-bottom: 0;
}

.about__skills {
  text-align: center;
}

.about__skills-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--space-xl);
  color: var(--color-text-heading);
}

.about__skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-sm);
  max-width: 600px;
  margin: 0 auto;
}
</style>
