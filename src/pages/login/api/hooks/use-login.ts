import { useRouter } from '@tanstack/react-router';

import { $api } from '@/shared/api/client';

export const useLogin = () => {
  const router = useRouter();

  return $api.useMutation('post', '/auth', {
    onSuccess: () => {
      router.invalidate();
      router.history.push('/');
    },
  });
};
