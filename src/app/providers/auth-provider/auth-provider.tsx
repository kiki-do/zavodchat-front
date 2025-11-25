import type { FC, PropsWithChildren } from 'react';
import { createContext, useContext, useMemo } from 'react';

import { useCookie } from '@/shared/hooks';

const AUTH_COOKIE_NAME = 'zavodchat_token';
export interface AuthContextValue {
  isAuthenticated: boolean;
  token: string | unknown;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { value: token, remove: removeToken } = useCookie(AUTH_COOKIE_NAME);

  const isAuthenticated = !!token;

  const logout = () => {
    removeToken({
      path: '/',
      secure: true,
      sameSite: 'None',
    });
    window.location.href = '/login';
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      token,
      logout,
    }),
    [isAuthenticated, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
