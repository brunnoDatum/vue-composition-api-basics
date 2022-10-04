<template>
  <Teleport to=".modals-container">
    <div class="modal" v-if="value">
      <h1><slot name="title"></slot></h1>
      <h2>{{ subTitle }}</h2>
      <slot></slot>
      <button @click="hideModal">Hide Modal</button>

      <div>Username: {{ userData?.username }}</div>
    </div>
  </Teleport>
</template>

<script setup>
import { inject, useSlots } from "vue";
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

const emit = defineEmits(["update:modelValue"]);

const value = useVModel(props, "modelValue", emit);

const hideModal = () => {
  emit("update:modelValue", false);
};

const userData = inject("userData");
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
