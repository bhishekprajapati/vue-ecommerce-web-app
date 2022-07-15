<template>
  <form class="l-form th-card-border">
    <header class="l-form__title">
      <h3 class="h4-sb h2-sb:sm">Details</h3>
    </header>
    <ul>
      <li class="l-form__field">
        <div class="l-form__field-label">
          <label class="p5-r p4-r:sm" for="user-email">Email Address</label>
        </div>
        <div class="l-form__field-input">
          <input
            class="form-field form-field-fluid"
            type="email"
            placeholder="Enter Your Email..."
            id="user-email"
          />
        </div>
      </li>

      <li class="l-form__field">
        <div class="l-form__field-label">
          <label class="p5-r p4-r:sm" for="user-pass">Password</label>
        </div>
        <div class="l-form__field-input">
          <input
            class="form-field form-field-fluid"
            type="password"
            placeholder="Enter Your Password..."
            id="user-pass"
          />
        </div>
      </li>
    </ul>

    <div class="l-form__btns">
      <div class="btn-group">
        <div class="btn-group__btn">
          <button type="button" class="btn btn-primary btn-fluid">
            Continue
          </button>
        </div>
        <div class="btn-group__btn">
          <button type="button" class="btn btn-secondary btn-fluid">
            Guest Checkout
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>