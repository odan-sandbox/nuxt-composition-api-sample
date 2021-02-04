<template>
  <div>
    <div>profile: {{ profile }}</div>
    <div>isLogin: {{ isLogin }}</div>
    <div>todos: {{ todos }}</div>
    <input v-model="search" type="text" />
    <div>searchedTodos: {{ searchedTodos }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Todo, User } from '../types';
export default Vue.extend({
  async asyncData({ $axios }) {
    const profile = await $axios.$get('/profile');
    const todos = await $axios.$get('/todo');

    return { profile, todos };
  },
  data: () => ({ profile: {} as User, todos: [] as Todo[], search: '' }),
  computed: {
    isLogin(): boolean {
      return !!this.profile;
    },
    searchedTodos(): Todo[] {
      return this.todos.filter((todo) =>
        todo.description.includes(this.search)
      );
    },
  },
});
</script>
