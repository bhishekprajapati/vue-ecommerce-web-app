<template>

  <TheHero />
  <TheCategories />
  <BrowseProducts />
  <ExploreBlogs />
  <TheNewsletter />

</template>

<script>
import TheHero from '../components/sections/TheHero.vue';
import TheCategories from '../components/sections/TheCategories.vue';
import TheNewsletter from '../components/sections/TheNewsletter.vue';
import BrowseProducts from '../components/sections/BrowseProducts.vue';
import ExploreBlogs from '../components/sections/ExploreBlogs.vue';

export default {
  components: {
    TheHero,
    TheCategories,
    TheNewsletter,
    BrowseProducts,
    ExploreBlogs
  }
}
</script>