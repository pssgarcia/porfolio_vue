<template>
   <header>
      <section class="pedro-group">
         <router-link to="/projects">
            <i class="fa-sharp fa-regular fa-p"></i>
         </router-link>
         <h2>Pedro</h2>
      </section>
      <nav>
         <details class="hamburger-menu">
            <summary class="fa-solid fa-bars"></summary>
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
   </main>
</template>

<script>

export default {
   name: 'HeaderComp',
}
</script>