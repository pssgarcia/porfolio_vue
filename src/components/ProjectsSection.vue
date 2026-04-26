<script setup>
import SectionHeading from './SectionHeading.vue'
import ProjectCard from './ProjectCard.vue'
import { projects } from '@/data/projects'
import { useIntersectionObserver } from '@/composables/useIntersectionObserver'

const { targetRef, isVisible } = useIntersectionObserver()
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div ref="targetRef" :class="['projects__wrapper', { 'is-visible': isVisible }]">
        <SectionHeading title="Projects" subtitle="Some things I've built" />

        <div class="projects__grid">
          <ProjectCard
            v-for="(project, index) in projects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :techs="project.techs"
            :github="project.github"
            :demo="project.demo"
            :style="{ transitionDelay: `${index * 100}ms` }"
            class="projects__card"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__wrapper {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.projects__wrapper.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 640px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.projects__card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.projects__wrapper.is-visible .projects__card {
  opacity: 1;
  transform: translateY(0);
}
</style>
