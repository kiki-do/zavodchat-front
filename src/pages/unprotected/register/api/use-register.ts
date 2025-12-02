import { useRouter } from '@tanstack/react-router';

import { $api } from '@/shared/api/client';
import { saveToken } from '@/shared/lib';

export const useRegister = () => {
  const router = useRouter();

  return $api.useMutation('post', '/register', {
    onSuccess: async data => {
      router.invalidate();
      if (data) await saveToken(data as string);
      router.history.replace('/');
    },
  });
};
