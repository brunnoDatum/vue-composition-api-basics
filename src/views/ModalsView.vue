<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal">Show Modals</button>
    <Teleport to=".modals-container">
      <div class="modal" v-if="visible">
        <h1>This is a modal</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <button @click="hideModal">Hide Modal</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);

const showModal = () => {
  visible.value = true;
};
const hideModal = () => {
  visible.value = false;
};
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
