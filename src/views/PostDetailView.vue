<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the content of post ID: {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHome">Go Home in 3 secs</button>
    </div>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const showPostId = () => {
  alert(`The ID of this post is: ${route.params.id}`);
};

const goHome = () => {
  setTimeout(() => {
    router.push("/");
  }, 3000);
};
</script>
