<template>
  <TheHeader />
  
  <main>

  </main>
  
  <TheFooter />
</template>

<script>
import TheHeader from './components/Navigation/TheHeader.vue';
import TheFooter from './components/Navigation/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
