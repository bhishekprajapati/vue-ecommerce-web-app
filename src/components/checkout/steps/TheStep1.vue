<template>
  <FormLayout>
    <template v-slot:form-title> Details </template>

    <template v-slot:form-fields>
      <FormField
        :field-type="'email'"
        :field-placeholder="'Enter your email...'"
        :field-id="'user-email'"
      >
        Email Address
      </FormField>

      <FormField
        :field-type="'password'"
        :field-placeholder="'Enter your password...'"
        :field-id="'user-password'"
      >
        Password
      </FormField>
    </template>

    <template v-slot:form-btns>
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
    </template>
  </FormLayout>
</template>

<script>
import FormLayout from "../../../layouts/forms/FormLayout.vue";
import FormField from "../../forms/FormField.vue";

export default {
  components: {
    FormLayout,
    FormField,
  },
};
</script>