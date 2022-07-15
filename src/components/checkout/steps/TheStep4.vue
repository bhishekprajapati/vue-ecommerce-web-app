<template>
  <FormLayout>
    <template v-slot:form-title>Payment Details</template>

    <template v-slot:form-fields>
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

      <FormField
        :field-type="'number'"
        :field-placeholder="'1234  9876  4321  6789'"
        :field-id="'card-number'"
      >
        Card Number
      </FormField>

      <FormField
        :field-type="'text'"
        :field-placeholder="'123 Street Name'"
        :field-id="'street-name'"
      >
        Street Name
      </FormField>

      <FormFieldGroupLayout>
        <FormField
          :field-type="'date'"
          :field-placeholder="'404'"
          :field-id="'expiry-date'"
        >
          Expiry Date
        </FormField>

        <FormField
          :field-type="'text'"
          :field-placeholder="'cvv'"
          :field-id="'card-cvv'"
        >
          CVV
        </FormField>
      </FormFieldGroupLayout>

      <FormFieldGroupLayout>
        <FormField
          :field-type="'text'"
          :field-placeholder="'xyz'"
          :field-id="'country'"
        >
          Country
        </FormField>

        <FormField
          :field-type="'text'"
          :field-placeholder="'40404'"
          :field-id="'zip-code'"
        >
          Zip Code
        </FormField>
      </FormFieldGroupLayout>
    </template>

    <template v-slot:form-btns>
      <button type="button" class="btn btn-primary btn-fluid">
        Place Order
      </button>
    </template>
  </FormLayout>
</template>

<script>
import FormLayout from "../../../layouts/forms/FormLayout.vue";
import FormFieldGroupLayout from "../../../layouts/forms/FormFieldGroupLayout.vue";

import FormField from "../../forms/FormField.vue";

export default {
  components: {
    FormLayout,
    FormFieldGroupLayout,

    FormField,
  },
};
</script>