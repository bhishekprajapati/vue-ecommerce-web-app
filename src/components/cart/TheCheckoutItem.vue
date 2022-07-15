<template>
  <article class="l-cart-item">
    <div class="l-cart-item__row">
      <figure class="l-cart-item__media th-card-bg">
        <img
          class="product-media"
          src="../../assets/product-images/Product-1.png"
          alt="product-image"
        />
      </figure>
    </div>
    <div class="l-cart-item__row">
      <header class="l-cart-item__header">
        <h3 class="h3-sb"><strong>Product Name Here</strong></h3>
      </header>
      <strong class="price--old h6-sb">INR 300</strong>
      <strong class="h6-sb">INR 100</strong>
    </div>
    <div class="l-cart-item__row">
      <button
        type="button"
        class="l-cart-item__action-btn btn btn-tertiary btn-tertiary--danger"
      >
        <svg class="icon icon-filled icon-sw-0">
          <use href="#cross"></use>
        </svg>
      </button>
    </div>
  </article>
</template>

<script>
export default {};
</script>