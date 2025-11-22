import type { FC, PropsWithChildren, SetStateAction } from 'react';
import { createContext, Dispatch, useContext, useMemo, useState } from 'react';

export interface AuthContextValue {
  /**
   * @description
   */
  isAuthenticated: boolean;

  /**
   * @description
   */
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

/**
 * @description
 */
export const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * @description
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};

/**
 * @description
 */
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const value = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated }),
    [isAuthenticated]
  );

  console.debug('DEBUG (AuthProvider)', value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
