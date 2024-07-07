<template>
  <section class="post mx-sm px-sm">
    <div class="post-header column my-xs">
      <div class="user-info row justify-between">
        <div class="img-username pointer flex gap-8">
          <img :src="userAvatar()" class="avatar" />
          <div class="user-text my-xs">{{ post.user.username }}</div>
        </div>
        <div class="created-text my-xs">
          {{ getDate(post.createdAt) }} {{ getTime(post.createdAt) }}
        </div>
      </div>
    </div>
    <div class="post-body">
      <div class="post-text my-md">{{ post.text }}</div>
      <div class="post-image my-sm" v-if="post.image">
        <img :src="post.image" alt="Post image" />
      </div>
    </div>
    <div class="post-footer row">
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
import { AppImgLinks } from "../models/app";
import { Post } from "../models/post";
import { getDate, getTime } from "../services/utils.service";

interface PostProps {
  post: Post;
}

const props = defineProps<PostProps>();

function userAvatar() {
  return props.post.user?.avatar || AppImgLinks.DEFAULT_AVATAR;
}
</script>

<style lang="scss" scoped>
.post {
  background-color: #cecfd34f;
  border-radius: 20px;
  padding-inline: 30px;
  padding-top: 20px;
}
.user-info {
  color: #555;
}
.post-footer {
  margin-bottom: 20px;
}
.post-image {
  img {
    width: 100%;
    // width: 300px;/
    max-height: 400px;
    object-fit: cover;
    border-radius: 5px;
  }
  border-radius: 10px;
}

.avatar {
  width: 35px;
  object-fit: cover;
  height: 35px;
  border-radius: 50%;
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
