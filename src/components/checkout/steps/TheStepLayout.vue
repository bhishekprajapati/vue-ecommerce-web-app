<template>
  <div class="l-row l-gap-3 l-gap-5:lg l-col-gap-count-1:lg">
    <div class="l-col l-col-6:lg">
        <slot name="checkout-step">
            
        </slot>
    </div>
    <div class="l-col l-col-6:lg">
        <slot name="checkout-bill">

        </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>