<template>
   <header id="header">
      <section class="pedro-group">
         <router-link to="/">
            <i class="fa-sharp fa-regular fa-p"></i>
         </router-link>
         <h2>Pedro</h2>
      </section>
      <nav>
         <details class="hamburger-menu">
            <summary class="fa-solid fa-bars"></summary>
            <ul class="hamburger-list">
               <li>
                  <router-link to="/">Home</router-link>
               </li>
               <li>
                  <router-link to="/about">About me</router-link>
               </li>
               <li>
                  <router-link to="/contact">Contact</router-link>
               </li>
            </ul>
         </details>
         <ul>
            <li>
               <router-link to="/">Home</router-link>
            </li>
            <li>
               <router-link to="/about">About me</router-link>
            </li>
            <li>
               <router-link to="/contact">Contact</router-link>
            </li>
         </ul>
      </nav>
   </header>
   <main>
      <router-view />
      <a class="back-to-top" href="#header">
         <i class="fa-solid fa-chevron-up"></i>
      </a>
   </main>
   <FooterComp />
</template>

<script>
import FooterComp from '@/components/FooterComp.vue'

export default {
   name: 'HeaderComp',
   components: {
      FooterComp
   }
}
</script>