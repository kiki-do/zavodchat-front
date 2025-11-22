import type { FC, PropsWithChildren } from 'react';

import { AuthProvider } from './auth-provider';
import { QueryProvider } from './query-provider';
import { ThemeProvider } from './theme-provider';

import { I18nProvider } from '@/shared/config/i18n';

export interface ProvidersProps extends PropsWithChildren {}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <QueryProvider>
        <ThemeProvider defaultTheme="dark" storageKey="theme">
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </QueryProvider>
    </AuthProvider>
  );
};

Providers.displayName = 'Providers';
