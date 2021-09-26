<template>
  <a-button type="primary" @click="handleGetTodosOfSpecifcUser"
    >get todos of specific user</a-button
  >
  <input type="number" v-bind="userIdInput" @change="handleInputChange" />
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      userIdInput: 0,
    };
  },
  methods: {
    ...mapActions(['getPosts']),

    handleGetTodosOfSpecifcUser() {
      this.getPosts(+this.userIdInput);
    },
    handleInputChange(e) {
      this.userIdInput = e.target.value;
    },
  },
};
</script>

<style></style>
