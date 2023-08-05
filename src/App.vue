<template>
	<section>
		<HeaderNavComp />
	</section>
  <span class="border"><h6></h6></span> 
  <main>
      <router-view />
      <a class="back-to-top" href="#header">
         <i class="fa-solid fa-chevron-up"></i>
      </a>
   </main>
   <span class="border"><h6></h6></span>  
   <FooterComp />
</template>

<script>
import HeaderNavComp from './components/HeaderNavComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    HeaderNavComp,
    FooterComp
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
@import url('./assets/scss/style.scss');
</style>
