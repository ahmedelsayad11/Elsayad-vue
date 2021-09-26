<template>
  <div>
    <a-input v-bind:value="todoInputText" @change="onTodoInputChange" type="text" />
    <a-button type="primary" block @click="addTodo1">add todo</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoInputText: '',
    };
  },
  methods: {
    onTodoInputChange(e) {
      this.todoInputText = e.target.value;
    },
  },
};
</script>

<style></style>
