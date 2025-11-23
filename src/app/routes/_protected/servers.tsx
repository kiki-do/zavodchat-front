import { createFileRoute } from '@tanstack/react-router';

import { Servers } from '@/pages/servers';

export const Route = createFileRoute('/_protected/servers')({
  component: Servers,
});
