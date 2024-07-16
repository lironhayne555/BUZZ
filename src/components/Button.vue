<template>
   <button @click="clickFunc">{{ text }}</button>
</template>

<script lang="ts" setup>
interface ButtonProps {
  clickFunc?: () => void, 
  text: string
}

const props = defineProps<ButtonProps>();
</script>

<style lang="scss" scoped>
button {
border-radius: 10px;
padding: 10px;
width: 100px;;
background-color: #febb53b0;
cursor: pointer;
}

</style>
