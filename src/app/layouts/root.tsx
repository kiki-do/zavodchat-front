import { Outlet } from '@tanstack/react-router';
import type { FC } from 'react';

export const Root: FC = () => <Outlet />;

Root.displayName = 'Root';
