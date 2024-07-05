<template>
  <section class="post-list column">
    <Post v-for="(post, index) in posts" :key="index" :post="post" />
  </section>
</template>

<script lang="ts" setup>
import Post from "../components/Post.vue";
import { Post as PostType } from "../models/post";

interface PostListProps {
  posts: PostType[];
}

const props = defineProps<PostListProps>();
</script>

<style lang="scss" scoped>
.post-list {
  margin-top: 20px;
  gap: 20px;
}
</style>
