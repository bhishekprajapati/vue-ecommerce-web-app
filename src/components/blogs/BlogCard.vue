<template>
  <article class="l-listing-card l-listing-card--blog-card">
    <div class="l-listing-card__row">
      <figure class="l-listing-card__media th-card-bg">
        <img
          class="product-media"
          :src="thumbnailUri"
          alt="product-image"
        />
      </figure>
    </div>
    <div v-if="isRecent" class="l-listing-card__row l-listing-card__row--absolute">
      <em class="h6-b badge badge-bordered badge-primary badge-bg-green-100"
        >recent</em
      >
    </div>
    <div class="l-listing-card__row">
      <header class="l-listing-card__header">
        <h3 class="h3-sb">
          <strong>{{ title }}</strong>
        </h3>
      </header>
      <span class="l-listing-card__category">
        <em class="h6-b badge badge-secondary badge-bg-green-10">{{ keyword }}</em>
      </span>
    </div>
  </article>
</template>

<script>

export default {
  props: ['thumbnail-uri', 'title', 'is-recent', 'keyword' ]
};
</script>