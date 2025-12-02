import { createFileRoute, redirect } from '@tanstack/react-router';

import { ProtectedLayout } from '../layouts';

export const Route = createFileRoute('/_protected')({
  beforeLoad: ({ context, location }) => {
    console.log(
      'Protected Route: isAuthenticated=',
      context.auth.internalRefState.current
    );
    if (!context.auth.internalRefState.current) {
      console.log('Redirecting to /login');
      throw redirect({ to: '/login' });
    }
  },
  component: ProtectedLayout,
});
