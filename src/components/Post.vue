<template>
  <section class="post mx-sm px-sm">
    <div class="post-header column my-xs">
      <div class="user-info column justify-between">
       <div class="user-text my-xs"> {{ post.user }} </div>
       <div class="created-text my-xs"> {{ post.createdAt }}</div>
      </div>
    </div>
    <div class="post-body">
      <div class="post-text my-xs">{{ post.text }}</div>
      <div class="post-image my-sm" v-if="post.image">
        <img :src="post.image" alt="Post image" />
      </div>
    </div>
    <div class="post-footer row ">
      <div class="likes mx-sm">
        <span>{{ post.likes.length }} Likes</span>
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
.post {
  background-color: #cecfd34f;
  border-radius: 20px;
  padding-inline: 30px;
  padding-top: 20px;
}
.user-info{
  color: #555;
}
.post-footer{
margin-bottom: 20px;
}
.post-image {
  img {
    width: 300px;
    max-height: 600px;
    object-fit: cover;
    border-radius: 5px;
  
  }
  border-radius: 10px;
}
.likes,
.comments {
 
  color: #007bff;
}
.likes:hover,
.comments:hover {
  text-decoration: underline;
 cursor: pointer;
}
</style>
