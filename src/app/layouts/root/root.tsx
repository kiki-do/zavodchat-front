import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { FC } from 'react';

export const RootLayout: FC = () => (
  <>
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

RootLayout.displayName = 'RootLayout';
