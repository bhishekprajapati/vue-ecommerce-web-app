<template>
  <form class="l-form th-card-border">
    <header class="l-form__title">
      <h3 class="h4-sb h2-sb:sm">Payment Details</h3>
    </header>
    <ul>
      <fieldset class="l-form__field-group l-row l-gap-1">
        <div class="l-col-auto">
          <input
            class="btn-radio"
            type="radio"
            name="payment-mode"
            id="credit-card"
            checked
          />
        </div>
        <div class="l-col-4">
          <label class="p4-r p2-r:sm" for="credit-card">Credit Card</label>
        </div>
        <div class="l-col-auto">
          <input
            class="btn-radio"
            type="radio"
            name="payment-mode"
            id="paytm"
          />
        </div>
        <div class="l-col-4">
          <label class="p4-r p2-r:sm" for="paytm">Paytm</label>
        </div>
      </fieldset>
      <li class="l-form__field">
        <div class="l-form__field-label">
          <label class="p5-r p4-r:sm" for="credit-card-number"
            >Card Number</label
          >
        </div>
        <div class="l-form__field-input">
          <input
            class="form-field form-field-fluid"
            type="number"
            placeholder="1234  9876  4321  6789"
            id="credit-card-number"
          />
        </div>
      </li>

      <li class="l-form__field">
        <div class="l-form__field-label">
          <label class="p5-r p4-r:sm" for="street-name">Street Name</label>
        </div>
        <div class="l-form__field-input">
          <input
            class="form-field form-field-fluid"
            type="text"
            placeholder="123 Street Name"
            id="street-name"
          />
        </div>
      </li>

      <div class="l-form__field-group l-form__field-group:sm">
        <li class="l-form__field">
          <div class="l-form__field-label">
            <label class="p5-r p4-r:sm" for="expiry-date">Expiry Date</label>
          </div>
          <div class="l-form__field-input">
            <input
              class="form-field form-field-fluid"
              type="date"
              placeholder="404"
              id="expiry-date"
            />
          </div>
        </li>

        <li class="l-form__field">
          <div class="l-form__field-label">
            <label class="p5-r p4-r:sm" for="card-cvv">CVV</label>
          </div>
          <div class="l-form__field-input">
            <input
              class="form-field form-field-fluid"
              type="text"
              placeholder="cvv"
              id="card-cvv"
            />
          </div>
        </li>
      </div>

      <div class="l-form__field-group l-form__field-group:sm">
        <li class="l-form__field">
          <div class="l-form__field-label">
            <label class="p5-r p4-r:sm" for="country">Country</label>
          </div>
          <div class="l-form__field-input">
            <input
              class="form-field form-field-fluid"
              type="text"
              placeholder="India"
              id="country"
            />
          </div>
        </li>

        <li class="l-form__field">
          <div class="l-form__field-label">
            <label class="p5-r p4-r:sm" for="zip-code">Zip Code</label>
          </div>
          <div class="l-form__field-input">
            <input
              class="form-field form-field-fluid"
              type="text"
              placeholder="40404"
              id="zip-code"
            />
          </div>
        </li>
      </div>
    </ul>

    <div class="l-form__btns">
      <button type="button" class="btn btn-primary btn-fluid">
        Place Order
      </button>
    </div>
  </form>
</template>

<script>
export default {};
</script>