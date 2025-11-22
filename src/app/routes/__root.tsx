import { createRootRouteWithContext } from '@tanstack/react-router';

import { RootLayout } from '../layouts';
import { AuthContextValue } from '../providers';

export const Route = createRootRouteWithContext<{
  auth: AuthContextValue;
}>()({
  component: RootLayout,
});
