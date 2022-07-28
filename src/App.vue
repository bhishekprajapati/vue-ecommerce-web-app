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

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      this.$store.commit('restoreUserSession', user);
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
