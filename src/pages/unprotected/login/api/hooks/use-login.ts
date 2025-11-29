import { useRouter } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

import { $api } from '@/shared/api/client';
import { saveToken } from '@/shared/lib';

export const useLogin = () => {
  const router = useRouter();
  const { t } = useTranslation('translations', { keyPrefix: 'loginPage' });

  return $api.useMutation('post', '/auth', {
    onSuccess: async data => {
      toast.success(t('loginSuccess'));
      await saveToken(data.text as string);
      // await router.invalidate();
      // router.history.push('/');
    },
    onError: error => {
      toast.error(t('loginError'));
      console.error('Registration failed:', error);
    },
  });
};
