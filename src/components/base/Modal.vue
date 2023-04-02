<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Add task",
  },
})
const emit = defineEmits(['closeModal', 'save'])

const closeModal = () => {
  emit('closeModal')
}

const save = () => {
  emit('save', )
}

</script>

<template>
  <div class="modal show bg-dark bg-opacity-75"
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
          <button type="button" class="btn btn-warning" data-bs-dismiss="modal" @click="save">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>