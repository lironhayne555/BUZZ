<template>
  <div class="logo-section no-select">
    <img :src="getIconPath('app', 'logo')" />
    <h1 class="mx-sm">Buzz</h1>
  </div>
</template>

<script lang="ts" setup>
import { getIconPath } from "../services/utils.service";
</script>

<style lang="scss" scoped>
.logo-section {
  display: flex;
  align-items: center;
  img {
    width: 50px;
  }
}
</style>
