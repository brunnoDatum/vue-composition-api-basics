<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label> Use dark modal <input type="checkbox" v-model="showDarkModal" /> </label>
    </div>
    <button @click="showModal">Show Modals</button>
    <component
      :is="showDarkModal ? ModalDark : Modal"
      v-model="visible"
      subTitle="Modal Sub Title"
    >
      <template #title>Modal Title</template>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </component>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";

const visible = ref(false);

const showModal = () => {
  visible.value = true;
};

const showDarkModal = ref(false);
</script>
