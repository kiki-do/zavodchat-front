import { Outlet } from '@tanstack/react-router';
import type { FC } from 'react';

import { Sidebar } from '@/widgets';

export const ProtectedLayout: FC = () => (
  <div className="grid h-full grid-cols-[var(--sidebar-width)_1fr_var(--sidebar-width)]">
    <Sidebar />
    <div className="p-4">
      <Outlet />
    </div>
  </div>
);

ProtectedLayout.displayName = 'ProtectedLayout';
