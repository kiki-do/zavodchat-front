import { createFileRoute, redirect } from '@tanstack/react-router';

import { UnrotectedLayout } from '../layouts';

export const Route = createFileRoute('/_unprotected')({
  beforeLoad: ({ context, location }) => {
    if (context.auth.internalRefState.current) {
      throw redirect({
        to: '/',
        search: {
          redirect: location.href,
        },
      });
    }
  },

  component: UnrotectedLayout,
});
