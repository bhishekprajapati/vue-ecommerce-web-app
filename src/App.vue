<template>
  <TheHeader />
  
  <main class="l-page-pad-x">
    <RouterView />
  </main>
  
  <TheFooter />
</template>

<script>
import TheHeader from './components/Navigation/TheHeader.vue';
import TheFooter from './components/Navigation/TheFooter.vue';

import TheHome from './views/TheHome.vue';
import TheCart from './views/TheCart.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheHome,
    TheCart
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
