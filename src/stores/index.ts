import { ref } from "vue";
import { defineStore } from "pinia";
import type { Task } from "@/types";

export const useCounterStore = defineStore("useTaskState", () => {
  const tasks = ref<Task[]>([]);

  function addTask(task: Task) {
    task.id = tasks.value.length
    tasks.value.push(task)
    saveLocally()
  }

  function changeTaskStatus (status: string, id: number) {
    tasks.value.forEach(task => {
      if(task.id === id) task.status = status
    })
    saveLocally()
  }
  
  function saveLocally() {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  }

  function getTasks() {
    let tasksFromStorage = localStorage.getItem("tasks")
    let parsedTasks
    if(tasksFromStorage) {
      parsedTasks = JSON.parse(tasksFromStorage) || []
    }
    if(parsedTasks.length) {
      tasks.value = [...parsedTasks]
    }
  }

  return { tasks, addTask, changeTaskStatus, getTasks };
});