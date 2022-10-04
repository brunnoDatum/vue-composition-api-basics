<template>
  <Teleport to=".modals-container">
    <div class="modal">
      <h1><slot name="title"></slot></h1>
      <h2>{{ subTitle }}</h2>
      <slot></slot>
      <button @click="$emit('close')">Hide Modal</button>
    </div>
  </Teleport>
</template>

<script setup>
import { useSlots } from "vue";

// This is how to access slots data in composition api
const slots = useSlots();

const props = defineProps({
  subTitle: {
    type: String,
  },
});

const emit = defineEmits(["close"]);
</script>

<style scoped>
.modal {
  background: beige;
  padding: 10px;
  color: black;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
