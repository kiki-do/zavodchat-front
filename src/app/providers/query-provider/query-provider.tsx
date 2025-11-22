import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { FC, PropsWithChildren } from 'react';

export interface QueryProviderProps extends PropsWithChildren {}

const queryClient = new QueryClient();

export const QueryProvider: FC<QueryProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
