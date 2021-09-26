<template>
  <a-button @click="filterTheTodos">{{ filtered ? 'completed todos' : 'all todos' }}</a-button>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['filtered']),
  },
  methods: {
    ...mapActions(['filterTheTodos']),
  },
};
</script>

<style></style>
