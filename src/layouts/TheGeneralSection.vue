<template>
    <section class="l-section l-section--general">
    <header class="l-section__header l-section__header--general">
      <div class="l-section__title">
        <em class="sub-title">
            <slot name="sub-title">
                
            </slot>
        </em>
        <h2 class="h2-b h1-b:md">
            <slot name="title">

            </slot>
        </h2>
      </div>
      <div class="l-section__header-btn">
          <slot name="header-buttons">

          </slot>
      </div>
    </header>
    <div class="l-section__content">
        <slot name="section-content">
            
        </slot>
    </div>
  </section>
</template>

<script>
export default {
    
}
</script>