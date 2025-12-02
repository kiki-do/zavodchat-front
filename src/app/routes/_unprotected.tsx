import { createFileRoute, redirect } from '@tanstack/react-router';

import { UnrotectedLayout } from '../layouts';

export const Route = createFileRoute('/_unprotected')({
  beforeLoad: ({ context }) => {
    console.log(
      'Unprotected Route: isAuthenticated=',
      context.auth.internalRefState.current
    );
    if (context.auth.internalRefState.current) {
      console.log('Redirecting to /');
      throw redirect({ to: '/', replace: true });
    }
  },
  component: UnrotectedLayout,
});
