<template>
  <form class="column align-center gap-8" @submit.prevent="onSubmit">
    <Input
      v-for="(input, index) in items"
      @input="(value:string)=>onInput(value,input.name)"
      :key="index"
      class="full-width"
      :name="input.name"
      :type="input.type || 'text'"
      :placeholder="input.placeholder"
    />
    <Button text="Submit"></Button>
    <p
      v-if="secondaryButtonLabel"
      @click="emit('secondaryButtonClick')"
      class="pointer secondary-btn"
    >
      {{ secondaryButtonLabel }}
    </p>
  </form>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from "vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
const formValues: Ref<{ [key: string]: string }> = ref({});

onMounted(() => {
  props.items.forEach((item) => {
    formValues.value[item.name] = "";
  });
});

const onInput = (value: string, name: string) => {
  formValues.value[name] = value;
};

interface Input {
  placeholder: string;
  type?: string;
  name: string;
}
interface FormProps {
  items: Input[];
  secondaryButtonLabel?: string;
}

function onSubmit() {
  console.log("submit");

  // emit("submit", formValues.value);
}
const props = defineProps<FormProps>();

const emit = defineEmits<{
  (e: "secondaryButtonClick"): void;
  (e: "submit", values: { [key: string]: string }): void;
}>();
</script>

<style lang="scss" scoped>
button {
  width: 100px;
}
.secondary-btn {
  color: #b99445;
  margin: 0;
  align-self: flex-start;
}
</style>
