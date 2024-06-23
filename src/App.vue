<template>
  <section class="app">
    <AppHeader />
    <router-view></router-view>
  </section>
</template>

<script lang="ts" setup>
import { RouterView, useRouter } from "vue-router";
import AppHeader from "./components/AppHeader.vue";

const router = useRouter();
const goToFeed = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
