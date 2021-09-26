<template>
  <div style="margin: 24px">
    <TodoInput style="marginBottom: 15px" />
    <TodoFilter />
    <TodoList />
    <TodoUserId />
    <br />
  </div>
</template>
<script>
import {
  TodoUserId, TodoList, TodoInput, TodoFilter,
} from '../atoms/index';

export default {
  components: {
    TodoUserId, TodoList, TodoInput, TodoFilter,
  },
};
</script>

<style></style>
