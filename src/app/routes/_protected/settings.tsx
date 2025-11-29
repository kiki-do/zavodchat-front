import { createFileRoute } from '@tanstack/react-router';

import { Settings } from '@/pages';

export const Route = createFileRoute('/_protected/settings')({
  component: Settings,
});
