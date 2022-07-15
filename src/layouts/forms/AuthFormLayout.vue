<template>
    <form class="l-form w-50:sm mw-34 mx-auto pt-0 px-0">
    <ul>
      <slot name="form-fields">

      </slot>
    </ul>

    <div class="l-form__btns">
      <slot name="form-btns">

      </slot>
    </div>
  </form>
</template>

<script>
export default {
    
}
</script>