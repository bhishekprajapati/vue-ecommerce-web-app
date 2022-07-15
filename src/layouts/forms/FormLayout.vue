<template>
  <form class="l-form th-card-border">
    <header class="l-form__title">
      <h3 class="h4-sb h2-sb:sm">
        <slot name="form-title"> </slot>
      </h3>
    </header>
    <ul>
      <slot name="form-fields"></slot>
    </ul>

    <div class="l-form__btns">
      <slot name="form-btns">
        <button type="button" class="btn btn-primary btn-fluid">Primary</button>
      </slot>
    </div>
  </form>
</template>

<script>
export default {};
</script>