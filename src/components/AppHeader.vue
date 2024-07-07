<template>
  <section class="app-header flex">
    <AppLogo class="pointer" @click="router.push('/')" />
    <p class="pointer" @click="router.push('/login')">Login</p>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import AppLogo from "./AppLogo.vue";
const router = useRouter();
</script>

<style lang="scss" scoped>
.app-header {
  padding-inline: 15px;

  justify-content: space-between;
  height: 70px;
  background-color: #f9d689;

  .nav-bar {
    display: flex;
    gap: 5px;
  }
}
</style>
