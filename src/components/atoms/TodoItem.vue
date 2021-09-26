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
      <a-button danger @click="deleteTodo(todo.id)">delete</a-button>
      <a-button v-if="!editing" @click="toggleEditing(todo)">{{ 'Edit' }}</a-button>
      <a-button v-else @click="updateTodoText1(todo)">{{ 'Update' }}</a-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    todo: {},
  },
  data() {
    return {
      editing: false,
      todoInputEdit: '',
    };
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateTodoText', 'updateTodoStatus']),

    toggleEditing(todo) {
      this.editing = !this.editing;
      this.todoInputEdit = todo.title;

      console.log(this.editing);
    },

    editTodoTextHandler(e) {
      this.todoInputEdit = e.target.value;
      console.log(this.todoInputEdit);
    },

    updateTodoText1(todo) {
      this.updateTodoText({ ...todo, title: this.todoInputEdit });
      this.editing = !this.editing;
    },
    updateTodoStatus1(todo) {
      this.updateTodoStatus({ ...todo, completed: !todo.completed });
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
