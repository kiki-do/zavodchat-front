import { $api } from '@/shared/api/client';

export const useGetServer = () =>
  $api.useQuery('get', '/servers', {
    params: { cookie: { zavodchat_token: '' } },
  });
