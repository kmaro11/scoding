<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref } from "vue";
import Modal from "@/components/base/Modal.vue";
import TaskCard from "@/components/TaskCard.vue";
import type { Task } from "@/types";
import {useCounterStore} from "@/stores"

let defaultTask = {
  id: null,
  title: '',
  description: '',
  status: 'opened'
}
const openTaskModal = ref(false)
const task = ref<Task>({...defaultTask})
const store = useCounterStore()
const tasksList = computed(() => {
  return store.tasks
})


const addTask = () => {
  store.addTask(task.value)
  openTaskModal.value = false
  task.value = { ...defaultTask }
}

onBeforeMount(() => {
  store.getTasks()
})

</script>

<template>
  <main>
    <h1 class="mb-5 text-center">Create tasks</h1>
    <div class="w-100 d-flex justify-content-center mb-5">
      <button type="button" class="btn btn-primary" @click="openTaskModal = true">Create task</button>
    </div>
    <div class="col-5 d-flex flex-column align-items-center mx-auto" v-if="tasksList.length">
      <TaskCard v-for="task in tasksList" :task="task"/>
    </div>
    <h2 v-else class="text-center">No tasks assigned</h2>

    <Modal v-if="openTaskModal"
           @save="addTask"
           @close-modal="openTaskModal = false"
    >
      <template #body>
        <form>
          <div class="mb-3">
            <label for="taskName" class="form-label">Task name</label>
            <input v-model="task.title" class="form-control" type="text" id="taskName">
          </div>
          <div class="mb-3">
            <label for="taskDescription" class="form-label">Task description</label>
            <textarea v-model="task.description" class="form-control" id="taskDescription" rows="3"></textarea>
          </div>
        </form>
      </template>
    </Modal>
  </main>
</template>
