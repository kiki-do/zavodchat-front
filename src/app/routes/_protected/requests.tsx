import { createFileRoute } from '@tanstack/react-router';

import { Requests } from '@/pages';

export const Route = createFileRoute('/_protected/requests')({
  component: Requests,
});
