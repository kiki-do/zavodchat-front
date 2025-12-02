import { useRouter } from '@tanstack/react-router';
import type { FC, PropsWithChildren } from 'react';
import { createContext, useContext, useMemo } from 'react';

import { StateRef, useRefState } from '@/shared/hooks';
import { clearToken, getAccessToken } from '@/shared/lib';

export interface AuthContextValue {
  internalRefState: StateRef<boolean>;

  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const internalRefState = useRefState<boolean>(false);

  const logout = async () => {
    await clearToken();
    internalRefState.current = false;
  };

  console.log(getAccessToken().then(data => data));

  const value = useMemo(() => ({ internalRefState, logout }), []);

  console.debug('DEBUG (AuthProvider)', value);

  console.log('internalRefState.current', internalRefState.current);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
