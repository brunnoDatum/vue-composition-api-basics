<template>
  <div class="home">
    <h3>{{ title }}</h3>

    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <div class="edit">
      <h4>Edit title:</h4>
      <input type="text" v-model="title" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
const title = ref("Counter:");

const increaseCounter = () => {
  counter.value++;
};

const decreaseCounter = () => {
  counter.value--;
};
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
}

.edit {
  margin-top: 60px;
}
</style>
