import { createFileRoute } from '@tanstack/react-router';

import { Register } from '@/pages';

export const Route = createFileRoute('/register')({
  component: Register,
});
