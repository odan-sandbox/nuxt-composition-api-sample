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
import { defineComponent } from '@nuxtjs/composition-api';

import { useProfile } from '../hooks/use-profile';
import { useTodo } from '../hooks/use-todo';

export default defineComponent({
  setup() {
    const { profile, isLogin } = useProfile();

    const { todos, search, searchedTodos } = useTodo();

    return { profile, isLogin, todos, search, searchedTodos };
  },
});
</script>
