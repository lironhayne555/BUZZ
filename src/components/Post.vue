<template>
  <section class="post"></section>
</template>

<script lang="ts" setup>
import { Post } from "../models/post";

interface PostProps {
  post: Post;
}

const props = defineProps<PostProps>();
</script>

<style lang="scss" scoped></style>
