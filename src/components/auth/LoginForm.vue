<template>
  <AuthFormLayout @form-submit="login">
    <template v-slot:form-fields>
      <FormField
        required="true"
        :field-type="'email'"
        :field-placeholder="'Enter Your Email...'"
        :field-id="'user-email'"
        v-model="userEmail"
      >
        Email Address
      </FormField>

      <FormField
        required="true"
        :field-type="'password'"
        :field-placeholder="'Enter your password...'"
        :field-id="'user-password'"
        v-model="userPass"
      >
        Password
      </FormField>

      <li class="l-form__field">
        <input
          v-model="rememberMe"
          class="btn-radio"
          type="radio"
          id="terms-and-conditions"
        />
        <label class="btn-radio__text p2-r fw-400" for="terms-and-conditions"
          >Remember me</label
        >
      </li>
    </template>

    <template v-slot:form-btns>
      <div class="btn-group">
        <div class="btn-group__btn">
          <button type="submit" class="btn btn-primary btn-fluid">Login</button>
        </div>
        <div class="btn-group__btn">
          <div class="btn-group btn-group-horizontal:sm">
            <div class="btn-group__btn">
              <button
                @click="switchToSignUp"
                type="button"
                class="btn btn-secondary btn-fluid"
              >
                Create Account
              </button>
            </div>
            <div class="btn-group__btn">
              <button type="button" class="text-link">Forgot Password?</button>
            </div>
          </div>
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
      rememberMe: "",
    };
  },
  emits: ["switch-auth-mode"],
  components: {
    AuthFormLayout,
    FormField,
  },
  methods: {
    switchToSignUp(e) {
      this.$emit("switch-auth-mode", "signup");
    },
    async login() {
      try {
        await this.$store.dispatch("login", {
          email: this.userEmail,
          password: this.userPass,
        });
      } catch (err) {
        console.log('LoginError: ', err.message);
      }
    },
  },
};
</script>