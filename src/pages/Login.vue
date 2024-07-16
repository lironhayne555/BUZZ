<template>
  <section class="login-page">
    <AppLogo />
    <Form
      @secondary-button-click="router.push('/signup')"
      @submit="onSubmit"
      secondary-button-label="Didn't sign up? click here"
      class="login-form"
      :items="loginFormItems"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AppLogo from "../components/AppLogo.vue";
import Form from "../components/Form.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const onSubmit = (values: { [key: string]: string }) => {
  console.log(values);
};

const loginFormItems = ref([
  { placeholder: "username", type: "text", name: "username" },
  { placeholder: "password", type: "text", name: "password" },
]);
</script>

<style lang="scss" scoped>
.login-form {
  width: 300px;
}
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 70px);
  align-items: center;
}
</style>
