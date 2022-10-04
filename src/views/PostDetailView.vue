<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the content of post ID: {{ $route.params.id }}</p>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>
