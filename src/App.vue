<template>
  <section class="app">
    <AppHeader />
    <div class="route-view-container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { RouterView, useRouter } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
</script>

<style lang="scss" scoped>
.route-view-container {
}
</style>
