<template>
  <FormLayout>
    <template v-slot:form-title>Shipping Details</template>

    <template v-slot:form-fields>
      <FormField
        :field-type="'text'"
        :field-placeholder="'Enter Your Full Name...'"
        :field-id="'fullname'"
      >
        Full Name
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
          :field-type="'text'"
          :field-placeholder="'404'"
          :field-id="'house-number'"
        >
          House Number
        </FormField>

        <FormField
          :field-type="'text'"
          :field-placeholder="'xyz'"
          :field-id="'city'"
        >
          City
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
      <button type="button" class="btn btn-primary btn-fluid">Continue</button>
    </template>
  </FormLayout>
</template>

<script>
import FormLayout from "../../../layouts/forms/FormLayout.vue";
import FormFieldGroupLayout from "../../../layouts/forms/FormFieldGroupLayout.vue";

import FormField from "../../forms/FormField.vue";

export default {
  components: {
    FormFieldGroupLayout,
    FormLayout,

    FormField,
  },
};
</script>