<template>
  <TheGeneralSection>
    <template v-slot:sub-title> - Your Cart </template>

    <template v-slot:title> Shopping Cart </template>

    <template v-slot:header-buttons>
      <button type="button" class="btn btn-secondary">Clear All</button>
    </template>

    <template v-slot:section-content>
      <div class="l-shopping-cart">
        <div class="l-shopping-cart__row">
          <div class="l-shopping-cart__product">
            <!-- <article class="l-cart-item l-cart-item--shopping th-card-border">
              <div class="l-cart-item__row">
                <figure class="l-cart-item__media th-card-bg">
                  <img
                    class="product-media"
                    src="../assets/product-images/Product-1.png"
                    alt="product-image"
                  />
                </figure>
              </div>
              <div class="l-cart-item__row">
                <header class="l-cart-item__header">
                  <h3 class="h4-sb"><strong>Product Name Here</strong></h3>
                </header>
                <strong class="price--old h6-sb">INR 300</strong>
                <strong class="h5-sb">INR 100</strong>
                <div class="l-cart-item__btns">
                  <button type="button" class="btn btn-counter">
                    <svg class="icon icon-filled icon-sw-0">
                      <use href="#angle-arrow-left "></use>
                    </svg>
                    <span class="btn-counter__text">1</span>
                    <svg class="icon icon-filled icon-sw-0">
                      <use href="#angle-arrow-right"></use>
                    </svg>
                  </button>

                  <button
                    type="button"
                    class="
                      l-cart-item__action-btn
                      btn btn-tertiary btn-tertiary--danger
                    "
                  >
                    <svg class="icon icon-filled icon-sw-0">
                      <use href="#cross"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </article> -->
            <TheCartItem />
          </div>
        </div>
        <div class="l-shopping-cart__row">
          <div class="l-shopping-cart__bill">
              <TheShoppingBill />
          </div>
        </div>
      </div>
    </template>
  </TheGeneralSection>
</template>

<script>
import TheGeneralSection from "../layouts/GeneralSectionLayout.vue";
import TheCartItem from '../components/cart/TheCartItem.vue';
import TheShoppingBill from '../components/cart/TheShoppingBill.vue';

export default {
  components: {
    TheGeneralSection,
    TheCartItem,
    TheShoppingBill
  },
};
</script>