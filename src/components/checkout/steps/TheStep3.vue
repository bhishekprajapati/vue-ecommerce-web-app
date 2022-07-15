<template>
  <FormLayout>
    <template v-slot:form-title>Billing Details</template>
    <template v-slot:form-fields>
      <li class="l-form__field">
        <div class="l-form__field-input">
          <input class="btn-radio" type="radio" id="billing-address" />
          <label class="p4-r p2-r:sm" for="billing-address"
            >Same as shipping address</label
          >
        </div>
      </li>
    </template>
    <template v-slot:form-btns>
      <button type="button" class="btn btn-primary btn-fluid">Continue</button>
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