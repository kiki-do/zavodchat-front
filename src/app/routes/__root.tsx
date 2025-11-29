import { createRootRouteWithContext } from '@tanstack/react-router';

import { RootLayout } from '../layouts';
import { AuthContextValue } from '../providers';

import { getAccessToken } from '@/shared/lib';

export const Route = createRootRouteWithContext<{
  auth: AuthContextValue;
}>()({
  beforeLoad: async ({ context }) => {
    const token = await getAccessToken();
    if (token) {
      context.auth.internalRefState.current = true;
    }
  },

  component: RootLayout,
});
