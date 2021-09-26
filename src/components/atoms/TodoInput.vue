<template>
  <div>
    <a-input v-bind:value="todoInputText" @change="onTodoInputChange" type="text" />
    <a-button type="primary" block @click="addTodo1">add todo</a-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid';

export default {
  data() {
    return {
      todoInputText: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    onTodoInputChange(e) {
      this.todoInputText = e.target.value;
    },
    addTodo1() {
      this.addTodo({
        id: v1(),
        title: this.todoInputText,
        complete: false,
      });
      this.todoInputText = '';
      console.log(this.$store.state.todos);
    },
  },
};
</script>

<style></style>
