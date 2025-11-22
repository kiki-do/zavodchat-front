import { createFileRoute } from '@tanstack/react-router';

import { Verification } from '@/pages';

export const Route = createFileRoute('/_unprotected/verification')({
  component: Verification,
});
