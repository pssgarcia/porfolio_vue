<template>
	<div>
		<HeaderNavComp />
	</div>
</template>

<script>
import HeaderNavComp from './components/HeaderNavComp.vue';

export default {
  name: 'App',
  components: {
    HeaderNavComp
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
@import url('./assets/scss/style.scss');
</style>
