<template>
  <form class="l-form th-card-border">
    <header class="l-form__title">
      <h3 class="h4-sb h2-sb:sm">Shipping Details</h3>
    </header>
    <ul>
      <li class="l-form__field">
        <div class="l-form__field-label">
          <label class="p5-r p4-r:sm" for="fullname">Full Name</label>
        </div>
        <div class="l-form__field-input">
          <input
            class="form-field form-field-fluid"
            type="text"
            placeholder="Enter Your Full Name..."
            id="fullname"
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
            <label class="p5-r p4-r:sm" for="house-number">House Number</label>
          </div>
          <div class="l-form__field-input">
            <input
              class="form-field form-field-fluid"
              type="text"
              placeholder="404"
              id="house-number"
            />
          </div>
        </li>

        <li class="l-form__field">
          <div class="l-form__field-label">
            <label class="p5-r p4-r:sm" for="city">City</label>
          </div>
          <div class="l-form__field-input">
            <input
              class="form-field form-field-fluid"
              type="text"
              placeholder="SF"
              id="city"
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
      <button type="button" class="btn btn-primary btn-fluid">Continue</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>