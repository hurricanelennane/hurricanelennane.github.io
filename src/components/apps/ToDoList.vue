<template>
  <section class="todo-section">
    <div class="container">
      <h2 class="todo-title">To-Do List</h2>
      <div class="todo-input">
        <input v-model="newTask" @keyup.enter="addTask" type="text" placeholder="Add a new task" />
        <button @click="addTask">Add</button>
      </div>
      <ul class="todo-list">
        <li v-for="(task, index) in tasks" :key="index">
          <input type="checkbox" v-model="task.completed" />
          <span :class="{ completed: task.completed }">{{ task.text }}</span>
          <button @click="removeTask(index)">Remove</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Task {
  text: string
  completed: boolean
}

export default defineComponent({
  name: 'ToDoList',
  setup() {
    const newTask = ref('')
    const tasks = ref<Task[]>([])

    const addTask = () => {
      if (newTask.value.trim()) {
        tasks.value.push({ text: newTask.value.trim(), completed: false })
        newTask.value = ''
      }
    }

    const removeTask = (index: number) => {
      tasks.value.splice(index, 1)
    }

    return {
      newTask,
      tasks,
      addTask,
      removeTask
    }
  }
})
</script>

<style scoped>
.todo-section {
  padding: 40px 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

.todo-title {
  font-size: 2rem;
  color: var(--carolina-blue);
  margin-bottom: 20px;
  text-align: center;
}

.todo-input {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.todo-input input {
  padding: 10px;
  font-size: 1rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.todo-input button {
  padding: 10px 15px;
  margin-left: 10px;
  font-size: 1rem;
  background-color: var(--carolina-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-input button:hover {
  background-color: #6c8ebf;
}

.todo-list {
  list-style: none;
  padding: 0;
  max-width: 400px;
  margin: 0 auto;
}

.todo-list li {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.todo-list li:last-child {
  border-bottom: none;
}

.todo-list span {
  flex-grow: 1;
  margin-left: 10px;
}

.todo-list span.completed {
  text-decoration: line-through;
  color: #888;
}

.todo-list button {
  background-color: #ff4d4f;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.todo-list button:hover {
  background-color: #d9363e;
}

/* Responsive Design */
@media (max-width: 768px) {
  .todo-input input {
    width: 200px;
  }
}

@media (max-width: 480px) {
  .todo-section {
    padding: 20px 10px;
  }

  .todo-input {
    flex-direction: column;
    align-items: center;
  }

  .todo-input button {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
  }

  .todo-list li {
    flex-direction: column;
    align-items: flex-start;
  }

  .todo-list button {
    margin-top: 5px;
  }
}
</style>
