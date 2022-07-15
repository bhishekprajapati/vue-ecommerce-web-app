<template>

  <TheHero />
  <TheCategories />
  <TheNewsletter />

</template>

<script>
import TheHero from '../components/sections/TheHero.vue';
import TheCategories from '../components/sections/TheCategories.vue';
import TheNewsletter from '../components/sections/TheNewsletter.vue';

export default {
  components: {
    TheHero,
    TheCategories,
    TheNewsletter
  }
}
</script>