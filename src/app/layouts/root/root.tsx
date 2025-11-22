import { Outlet } from '@tanstack/react-router';
import { FC } from 'react';

export const RootLayout: FC = () => (
  <div className="m-auto flex h-full w-full max-w-7xl items-center">
    <Outlet />
  </div>
);

RootLayout.displayName = 'RootLayout';
