import { Outlet } from '@tanstack/react-router';
import type { FC } from 'react';

import { Sidebar } from '@/widgets';

export const ProtectedLayout: FC = () => (
  <div className="grid h-screen grid-cols-[var(--sidebar-width)_1fr_var(--sidebar-width)]">
    <Sidebar />
    <Outlet />
  </div>
);

ProtectedLayout.displayName = 'ProtectedLayout';
