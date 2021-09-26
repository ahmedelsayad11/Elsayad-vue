<template>
  <div v-if="!filtered">
    <div v-for="todo in allTodos" :key="todo.id">
      <TodoItem :todo="todo" />
      <a-divider />
    </div>
  </div>

  <div v-else>
    <div v-for="todo in allUncompletedTodos" :key="todo.id">
      <TodoItem :todo="todo" />
      <a-divider />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: { TodoItem },
};
</script>

<style></style>
