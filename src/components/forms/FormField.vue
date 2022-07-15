<template>
  <li class="l-form__field">
    <div class="l-form__field-label">
      <label class="p5-r p4-r:sm" :for="fieldId">
          <slot>

          </slot>
      </label>
    </div>
    <div class="l-form__field-input">
      <input
        class="form-field form-field-fluid"
        :type="fieldType"
        :placeholder="fieldPlaceholder"
        :id="fieldId"
      />
    </div>
  </li>
</template>

<script>
export default {
    props: [ 
        'field-type',
        'field-placeholder',
        'field-id',
    ]
};
</script>