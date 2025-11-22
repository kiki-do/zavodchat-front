import { createFileRoute } from '@tanstack/react-router';

import { Login } from '@/pages';

export const Route = createFileRoute('/_unprotected/login')({
  component: Login,
});
