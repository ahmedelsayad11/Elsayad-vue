<template>
  <div class="container">
    <div>
      <a-typography-text
        style="cursor: pointer;"
        v-if="!editing"
        :delete="todo.completed"
        @click="updateTodoStatus1(todo)"
      >
        {{ todo.title }}
      </a-typography-text>
      <input block v-else v-bind:value="todoInputEdit" @change="editTodoTextHandler" type="text" />
    </div>

    <div>
      <Button danger @click="deleteTodo(todo.id)">delete</Button>
      <Button v-if="!editing" @click="toggleEditing(todo)">{{ 'Edit' }}</Button>
      <Button v-else @click="updateTodoText1(todo)">{{ 'Update' }}</Button>
    </div>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue';

export default {
  props: {
    todo: {},
  },
  components: { Button },
  data() {
    return {
      editing: false,
      todoInputEdit: '',
    };
  },
  methods: {

    toggleEditing(todo) {
      this.editing = !this.editing;
      this.todoInputEdit = todo.title;

      console.log(this.editing);
    },

    editTodoTextHandler(e) {
      this.todoInputEdit = e.target.value;
      console.log(this.todoInputEdit);
    },

  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
