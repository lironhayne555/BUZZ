<template>
  <button @click="emit('buttonClick')">{{ text }}</button>
</template>

<script lang="ts" setup>
interface ButtonProps {
  text: string;
}

const props = defineProps<ButtonProps>();
const emit = defineEmits<{
  (e: "buttonClick"): void;
}>();
</script>

<style lang="scss" scoped>
button {
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  background-color: #febb53b0;
  cursor: pointer;
}
</style>
