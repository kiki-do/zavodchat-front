import { createFileRoute } from '@tanstack/react-router';

import { Friends } from '@/pages';

export const Route = createFileRoute('/')({
  component: Friends,
});
