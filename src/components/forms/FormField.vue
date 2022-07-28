<template>
  <li class="l-form__field">
    <div class="l-form__field-label">
      <label class="p5-r p4-r:sm" :for="fieldId">
        <slot> </slot>
      </label>
    </div>
    <div class="l-form__field-input">
      <input
        class="form-field form-field-fluid"
        :required="required ? 'required': null"
        :type="fieldType"
        :placeholder="fieldPlaceholder"
        :id="fieldId"
        :model-value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </li>
</template>

<script>
export default {
  props: [
    "model-value",
    "field-type",
    "field-placeholder",
    "field-id",
    "required",
  ],
  emits: ["update:modelValue"],
  mounted() {
    console.log(this.$props.required);
  }
};
</script>