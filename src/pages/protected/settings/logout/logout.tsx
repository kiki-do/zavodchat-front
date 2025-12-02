import { useRouter } from '@tanstack/react-router';
import type { FC } from 'react';

import { useAuth } from '@/app/providers';
import { Button } from '@/shared/ui';

export const Logout: FC = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout(); // Твоя функция логаута (clearToken)
    router.invalidate(); // ← Ключевой шаг: инвалидируй роутер!
  };

  return (
    <Button variant="destructive" onClick={handleLogout}>
      Выйти из аккаунта
    </Button>
  );
};

Logout.displayName = 'Logout';
