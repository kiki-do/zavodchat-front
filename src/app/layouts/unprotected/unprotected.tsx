import { Outlet } from '@tanstack/react-router';
import type { FC } from 'react';

export const UnrotectedLayout: FC = () => (
  <div className="m-auto flex h-full w-full max-w-7xl items-center">
    <Outlet />
  </div>
);

UnrotectedLayout.displayName = 'UnrotectedLayout';
