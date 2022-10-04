<template>
  <div class="home">
    <div>
      <button class="btn" @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button class="btn" @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props) {
    const counter = ref(0);

    const increaseCounter = () => {
      counter.value++;
    };

    const decreaseCounter = () => {
      counter.value--;
    };

    return { counter, increaseCounter, decreaseCounter };
  },
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
</style>
