<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal">Show Modals</button>
    <Modal v-if="visible"></Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

const visible = ref(false);

const showModal = () => {
  visible.value = true;
};
const hideModal = () => {
  visible.value = false;
};
</script>
