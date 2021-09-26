/* eslint-disable no-shadow */
// import Vue from 'vue';
import { createStore } from 'vuex';
import axios from 'axios';

const state = {
  filtered: false,
  todos: [
    {
      id: 1,
      title: 'walk the dogs',
      completed: true,
    },
    {
      id: 2,
      title: 'visit your grandmother',
      completed: true,
    },
    {
      id: 3,
      title: 'pay the bills',
      completed: false,
    },
  ],
};
const getters = {
  allTodos: (state) => state.todos,
  allUncompletedTodos: (state) => state.todos.filter((todo) => todo.completed === false),
  filtered: (state) => state.filtered,
};
const actions = {
  getPosts({ commit }, userId) {
    axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`).then((response) => {
      commit('SET_POSTS', response.data);
    });
  },
  filterTheTodos({ commit }) {
    commit('filter_todos');
    console.log('filter_todos');
  },
  addTodo({ commit }, todo) {
    commit('add_todo', todo);
    console.log('add_todo');
  },
  deleteTodo({ commit }, id) {
    commit('delete_todo', id);
    console.log('delete_todo');
  },
  updateTodoText({ commit }, todo) {
    commit('update_todo_text', todo);
    console.log('update_todo_text');
  },
  updateTodoStatus({ commit }, todo) {
    commit('updateTodoStatus', todo);
    console.log('updateTodoStatus');
  },
};
const mutations = {
  SET_POSTS(state, todos) {
    state.todos = todos;
  },
  filter_todos(state) {
    state.filtered = !state.filtered;
  },
  add_todo(state, todo) {
    state.todos.push(todo);
  },
  delete_todo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  update_todo_text(state, todo) {
    const index = state.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      state.todos[index] = todo;
    }
  },
  updateTodoStatus(state, todo) {
    const index = state.todos.findIndex((t) => t.id === todo.id);
    if (index !== -1) {
      state.todos[index] = todo;
    }
  },
};

export default createStore({
  state,
  actions,
  mutations,
  getters,
});
