<script setup lang="ts">
import { PropType } from 'vue'
import type { Task } from "@/types";
import { useCounterStore } from "@/stores";

const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
})
const store = useCounterStore()
const allStatus = {
  opened: {
    name: 'Opened',
    changeTo: ['in_progress', 'closed'],
    color: 'info'
  },
  in_progress: {
    name: 'In progress',
    changeTo: ['opened','done', 'closed'],
    color: 'warning'
  },
  done: {
    name: 'Done',
    changeTo: ['closed'],
    color: 'success'
  },
  closed: {
    name: 'Closed',
    changeTo: ['opened'],
    color: 'secondary'
  },
}

const changeStatus = (selectedStatus: string) => {
  store.changeTaskStatus(selectedStatus, props.task?.id || 0)
}

</script>

<template>
  <div class="col-10 shadow p-3 mb-5 bg-body rounded">
    <div class="d-flex align-items-center">
      <div :class="`bg-${allStatus[task.status].color}`"
           class="me-1"
           style="height: 10px; width: 10px"></div>
      <span>{{ allStatus[task.status].name }}</span>
    </div>
    <h3>Change status to:</h3>
    <div class="d-flex flex-row gap-2 mb-3">
      <button v-for="s in allStatus[task.status].changeTo"
            class="btn"
            :class="`btn-outline-${allStatus[s].color}`"
            @click="changeStatus(s)">{{allStatus[s].name}}
      </button>
    </div>
    <h2 class="mb-3">
      {{ task.title }}
    </h2>
    <p>{{ task.description }}</p>
  </div>
</template>