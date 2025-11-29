import { createFileRoute, redirect } from '@tanstack/react-router';

import { ProtectedLayout } from '../layouts';

export const Route = createFileRoute('/_protected')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.internalRefState.current) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: ProtectedLayout,
});
