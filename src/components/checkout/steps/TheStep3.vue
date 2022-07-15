<template>
  <form class="l-form th-card-border">
    <header class="l-form__title">
      <h3 class="h4-sb h2-sb:sm">Billing Details</h3>
    </header>
    <ul>
      <li class="l-form__field">
        <div class="l-form__field-input">
          <input class="btn-radio" type="radio" id="billing-address" />
          <label class="p4-r p2-r:sm" for="billing-address"
            >Same as shipping address</label
          >
        </div>
      </li>
    </ul>
    <div class="l-form__btns">
      <button type="button" class="btn btn-primary btn-fluid">Continue</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>