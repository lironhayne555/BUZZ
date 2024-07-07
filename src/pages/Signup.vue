<template>
  <section class="signup-page">
    <AppLogo />
    <Form
      @secondary-button-click="router.push('/login')"
      secondary-button-label="Already have an account? sign in"
      class="signup-form"
      :items="signupFormItems"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AppLogo from "../components/AppLogo.vue";
import Form from "../components/Form.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const signupFormItems = ref([
  { placeholder: "username", name: "username" },
  { placeholder: "password", name: "password" },
  { placeholder: "confirm password", name: "confirm" },
  { placeholder: "avatar", name: "avatar" },
]);
</script>

<style lang="scss" scoped>
.signup-form {
  width: 300px;
}
.signup-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 70px);
  align-items: center;
}
</style>
