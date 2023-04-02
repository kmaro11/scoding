<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "<<Title goes here>>",
  },
})
const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal')
}

</script>

<template>
  <div class="modal fade show"
       tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog"
       style="display:block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>