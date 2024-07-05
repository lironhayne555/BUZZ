<template>
  <section class="post mx-sm px-sm">
    <div class="post-header column my-xs">
      <div class="user-info row justify-between align-center">
        {{ post.user }}
        {{ post.date }}
      </div>
    </div>
    <div class="post-body">
      <div class="post-text">{{ post.text }}</div>
      <div class="post-image" v-if="post.image">
        <img :src="post.image" alt="Post image" />
      </div>
    </div>
    <div class="post-footer colume">
      <div class="likes mx-sm">
        <span >{{ post.likes.length }} Likes</span>
      </div>
      <div class="comments mx-sm">
        <span>{{ post.comments.length }} Comments</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Post } from "../models/post";

interface PostProps {
  post: Post;
}

const props = defineProps<PostProps>();
</script>

<style lang="scss" scoped>
.post{
background-color: #ccddff;
border-radius: 10px;
}
.post-text {
color: #555;
}
.post-image{
max-width: 100%;
border-radius: 10px;
}
.likes, .comments {
  cursor: pointer;
  color: #007bff;
}
</style>
