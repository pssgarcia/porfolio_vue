<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <TheNavbar />
  <main>
    <router-view />
  </main>
  <TheFooter />
</template>

<style>
main {
  min-height: 100vh;
}
</style>
