<template>
  <section class="l-section l-section--general">
    <header class="l-section__header l-section__header--general">
      <div class="l-section__title">
        <em class="sub-title">- Your Cart</em>
        <h2 class="h2-b h1-b:md">Shopping Cart</h2>
      </div>
      <div class="l-section__header-btn">
        <button type="button" class="btn btn-secondary">Clear All</button>
      </div>
    </header>
    <div class="l-section__content">
      <div class="l-shopping-cart">
        <div class="l-shopping-cart__row">
          <div class="l-shopping-cart__product">
            <article class="l-cart-item l-cart-item--shopping th-card-border">
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
            </article>
          </div>
          <div class="l-shopping-cart__product">
            <article class="l-cart-item l-cart-item--shopping th-card-border">
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
            </article>
          </div>
          <div class="l-shopping-cart__product">
            <article class="l-cart-item l-cart-item--shopping th-card-border">
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
            </article>
          </div>
        </div>
        <div class="l-shopping-cart__row">
          <div class="l-shopping-cart__bill">
            <!-- shopping cart bill -->
            <div class="l-cart th-card-border">
              <div class="l-cart__title h4-sb">Cart Total</div>
              <div class="l-cart__bill">
                <div class="l-cart__bill-row">
                  <span class="p4-r">Subtotal:</span>
                  <span class="p4-r"
                    ><span>INR &thinsp;</span><span>209</span></span
                  >
                </div>
                <div class="l-cart__bill-row">
                  <span class="p4-r">Tax:</span>
                  <span class="p4-r"
                    ><span>INR &thinsp;</span><span>20</span></span
                  >
                </div>
                <div class="l-cart__bill-row">
                  <span class="p4-r">Shipping:</span>
                  <span class="p4-r"
                    ><span>INR &thinsp;</span><span>15</span></span
                  >
                </div>
                <div class="l-cart__bill-row">
                  <span class="h5-sb">Total:</span>
                  <span class="h5-sb"
                    ><span>INR &thinsp;</span><span>224</span></span
                  >
                </div>
              </div>
              <div class="l-cart__btns">
                <button type="button" class="btn btn-fluid btn-primary">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>