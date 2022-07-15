<template>
  <GeneralSectionLayout>
    <template v-if="authMode === 'signup'" v-slot:sub-title>-Sign up</template>
    <template v-else-if="authMode === 'login'" v-slot:sub-title
      >-Login</template
    >
    <template v-else-if="authMode === 'passwordReset'" v-slot:sub-title
      >-Reset</template
    >

    <template v-if="authMode === 'signup'" v-slot:title
      >Create Account</template
    >
    <template v-else-if="authMode === 'login'" v-slot:title
      >Login To Your Account</template
    >
    <template v-else-if="authMode === 'passwordReset'" v-slot:title
      >Password Reset</template
    >

    <template v-slot:section-content>
      <SignUpForm v-if="authMode === 'signup'" @switch-auth-mode="switchAuthMode" />
      <LoginForm v-else-if="authMode === 'login'" @switch-auth-mode="switchAuthMode" />
    </template>
    <template></template>
  </GeneralSectionLayout>
</template>

<script>
import GeneralSectionLayout from "../layouts/GeneralSectionLayout.vue";
import SignUpForm from "../components/auth/SignUpForm.vue";
import LoginForm from "../components/auth/LoginForm.vue";

export default {
  data() {
    return {
      authMode: "signup",
    };
  },
  components: {
    GeneralSectionLayout,

    SignUpForm,
    LoginForm
  },
  methods: {
    switchAuthMode(mode) {
        this.authMode = mode;
    },
  },
};
</script>