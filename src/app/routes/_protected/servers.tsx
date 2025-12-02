import { createFileRoute } from '@tanstack/react-router';

import { Empty, Servers } from '@/pages/protected/servers';

export const Route = createFileRoute('/_protected/servers')({
  component: Servers,
  notFoundComponent: Empty,
});
