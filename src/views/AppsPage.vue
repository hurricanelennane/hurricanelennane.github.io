<template>
  <section class="apps-section">
    <div class="container">
      <h1 class="apps-title">Apps</h1>
      <div class="apps-content">
        <ToDoList />
        <Calculator />
        <Counter />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToDoList from '../components/apps/ToDoList.vue'
import Calculator from '../components/apps/Calculator.vue'
import Counter from '../components/apps/Counter.vue'

export default defineComponent({
  name: 'AppsPage',
  components: {
    ToDoList,
    Calculator,
    Counter
  }
})
</script>

<style scoped>
.apps-section {
  padding: 40px 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

.apps-title {
  font-size: 2.5rem;
  color: var(--carolina-blue);
  margin-bottom: 40px;
  text-align: center;
}

.apps-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .apps-content {
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .apps-section {
    padding: 20px 10px;
  }

  .apps-title {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .apps-content {
    gap: 20px;
  }
}
</style>
