<template>
   <header :class="{ 'light-theme': !isDark, 'dark-theme': isDark}" id="header">
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
         <ul class="nav-list">
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
      <!-- 
      <span class="theme">Theme</span> 
      <input type="checkbox" @click="toggleDark()"> -->
   </header>
</template>

<script>
import { useDark, useToggle } from '@vueuse/core'


export default {
   name: 'HeaderComp',
   components: {

   },
   setup() {
      // const isDark = useDark();
      const isDark = useDark();
      const toggleDark = useToggle(isDark);

      return {
         isDark,
         toggleDark
      };
   }
}
</script>