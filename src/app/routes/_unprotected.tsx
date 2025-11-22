import { createFileRoute } from '@tanstack/react-router';

import { UnrotectedLayout } from '../layouts';

export const Route = createFileRoute('/_unprotected')({
  component: UnrotectedLayout,
});
