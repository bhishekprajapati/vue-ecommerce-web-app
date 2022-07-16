<template>

  <TheHero />
  <TheCategories />
  <BrowseProducts />
  <TheNewsletter />

</template>

<script>
import TheHero from '../components/sections/TheHero.vue';
import TheCategories from '../components/sections/TheCategories.vue';
import TheNewsletter from '../components/sections/TheNewsletter.vue';
import BrowseProducts from '../components/sections/BrowseProducts.vue';

export default {
  components: {
    TheHero,
    TheCategories,
    TheNewsletter,
    BrowseProducts
  }
}
</script>