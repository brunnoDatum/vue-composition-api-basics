<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ title }}</h3>

    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>

    <p>This counter is {{ oddEven }}</p>

    <div class="edit">
      <h4>Edit title:</h4>
      <input type="text" v-model="title" v-focus />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { vFocus } from "@/directives/vFocus";
import { useCounter } from "@/composables/useCounter";

const appTitle = ref("Vue 3 Composition Basics");
const appTitleRef = ref(null);
onMounted(() => {
  console.log(appTitleRef.value.offsetWidth);
});

const title = ref("Counter:");

const { counter, oddEven, increaseCounter, decreaseCounter } = useCounter();
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
