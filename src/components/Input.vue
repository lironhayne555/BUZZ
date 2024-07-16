<template>
  <input
    @input="onInput"
    :name="name"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script lang="ts" setup>
interface InputProps {
  placeholder?: string;
  type: string;
  name: string;
}

const props = defineProps<InputProps>();

const onInput = (ev: any) => {
  emit("input", ev.target.value);
};

const emit = defineEmits<{
  (e: "input", value: string): void;
}>();
</script>

<style lang="scss" scoped>
input {
  padding: 5px;
  border-radius: 4px;
  height: 30px;
  font-size: 15px;
  border: 1px solid rgb(145, 145, 145);
}
</style>
