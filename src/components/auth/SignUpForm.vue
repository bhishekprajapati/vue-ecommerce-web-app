<template>
  <AuthFormLayout @form-submit="signUp">
    <template v-slot:form-fields>
      <FormField
        :required="true"
        :field-type="'email'"
        :field-placeholder="'Enter Your Email...'"
        :field-id="'user-email'"
        v-model="userEmail"
      >
        Email Address
      </FormField>

      <FormField
        :required="true"
        :field-type="'password'"
        :field-placeholder="'Create a strong password...'"
        :field-id="'user-password'"
        v-model="userPass"
      >
        Create Password
      </FormField>

      <li class="l-form__field">
        <input
          checked
          class="btn-radio"
          type="radio"
          id="terms-and-conditions"
        />
        <label class="btn-radio__text p2-r fw-400" for="terms-and-conditions"
          >I have read and agree to
          <a href="#" class="text-link fw-600">terms & conditions</a></label
        >
      </li>
    </template>

    <template v-slot:form-btns>
      <div class="btn-group btn-group-horizontal:sm">
        <div class="btn-group__btn">
          <button type="submit" class="btn btn-primary btn-fluid">
            Create Account
          </button>
        </div>
        <div class="btn-group__btn">
          <button
            @click="switchToLogin"
            type="button"
            class="btn btn-secondary btn-fluid"
          >
            Login
          </button>
        </div>
      </div>
    </template>
  </AuthFormLayout>
</template>

<script>
import AuthFormLayout from "../../layouts/forms/AuthFormLayout.vue";
import FormField from "../forms/FormField.vue";

export default {
  data() {
    return {
      userEmail: "",
      userPass: "",
    };
  },
  emits: ["switch-auth-mode"],
  components: {
    AuthFormLayout,
    FormField,
  },
  methods: {
    switchToLogin(e) {
      this.$emit("switch-auth-mode", "login");
    },
    async signUp() {
      try {
        await this.$store.dispatch("createAccount", {
          email: this.userEmail,
          password: this.userPass,
        });
      } catch (err) {
        console.log('SignUpError: ', err.message);
      }
    },
  },
};
</script>