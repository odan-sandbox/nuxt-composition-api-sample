import { useFetch, ref, useContext, computed } from '@nuxtjs/composition-api';
import { Todo } from '../types';

export function useTodo() {
  const todos = ref<Todo[]>([]);
  const search = ref('');
  const searchedTodos = computed(() =>
    todos.value.filter((todo) => todo.description.includes(search.value))
  );
  const { $axios } = useContext();

  useFetch(async () => {
    todos.value = await $axios.$get('/todo');
  });

  return {
    todos,
    search,
    searchedTodos,
  };
}
