import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { $api } from '@/shared/api/client';

export const useCreateServer = () => {
  const queryClient = useQueryClient();

  return $api.useMutation('post', '/servers', {
    onSuccess: () => {
      toast.success('Сервер успешно создан');
      queryClient.invalidateQueries({ queryKey: ['get', '/servers'] });
    },
  });
};
