import { useFetch, ref, useContext, computed } from '@nuxtjs/composition-api';
import { User } from '../types';

export function useProfile() {
  const profile = ref<User | undefined>(undefined);
  const isLogin = computed(() => !!profile);
  const { $axios } = useContext();

  useFetch(async () => {
    profile.value = await $axios.$get('/profile');
  });

  return { profile, isLogin };
}
