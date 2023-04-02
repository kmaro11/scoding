<script setup lang="ts">
import { ref } from 'vue'
import Modal from "@/components/base/Modal.vue";

const openTaskModal = ref(false)
</script>

<template>
  <main>
    <div class="container py-4 px-3 mx-auto">
      <button type="button" class="btn btn-primary" @click="openTaskModal = true">Open modal</button>
    </div>

    <Modal v-if="openTaskModal" @close-modal="openTaskModal = false" title="Add task">
      <template #body>
        <div>

        </div>
      </template>
    </Modal>
  </main>
</template>
