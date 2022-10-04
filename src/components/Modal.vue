<template>
  <Teleport to=".modals-container">
    <div class="modal" v-if="value">
      <h1><slot name="title"></slot></h1>
      <h2>{{ subTitle }}</h2>
      <slot></slot>
      <button @click="$emit('close')">Hide Modal</button>
    </div>
  </Teleport>
</template>

<script setup>
import { useSlots } from "vue";
import { useVModel } from "@vueuse/core";

// This is how to access slots data in composition api
const slots = useSlots();

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  subTitle: {
    type: String,
  },
});

const emit = defineEmits(["close", "update:modelValue"]);

const value = useVModel(props, "modelValue", emit);
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
