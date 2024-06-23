<template>
  <section class="app-header">
    <div class="logo-section pointer no-select">
      <img :src="getIconPath('app', 'logo')" />
      <h1 class="mx-sm">Buzz</h1>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { getIconPath } from "../services/utils.service";
</script>

<style lang="scss" scoped>
.app-header {
  padding-inline: 15px;
  justify-content: space-between;
  display: flex;
  height: 70px;
  background-color: #f9d689;

  .nav-bar {
    display: flex;
    gap: 5px;
  }

  .logo-section {
    display: flex;
    align-items: center;
    img {
      width: 50px;
    }
  }
}
</style>
