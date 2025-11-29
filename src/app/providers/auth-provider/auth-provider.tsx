import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

import { StateRef, useRefState } from '@/shared/hooks';
import { clearToken } from '@/shared/lib';

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
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const internalRefState = useRefState<boolean>(false);

  const logout = async () => {
    await clearToken();
    window.location.href = '/login';
  };

  const value = useMemo(() => ({ internalRefState, logout }), []);

  console.debug('DEBUG (AuthProvider)', value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
