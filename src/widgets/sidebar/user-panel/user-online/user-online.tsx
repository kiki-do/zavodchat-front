import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/shared/lib';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui';

export interface UserOnlineProps {
  isOnline: boolean;
}

export const UserOnline: FC<UserOnlineProps> = ({ isOnline }) => {
  const { t } = useTranslation('translations', { keyPrefix: 'userPanel' });

  return (
    <div className="flex items-center gap-1.5">
      <Avatar className="relative overflow-visible">
        <AvatarImage
          src="https://github.com/shadcn.png"
          className="rounded-full"
          alt="@shadcn"
        />
        <AvatarFallback className="rounded-full">SA</AvatarFallback>
        <span
          className={cn(
            'bg-primary border-background absolute right-0 bottom-0 z-10000 size-4 rounded-full border-3',
            {
              'bg-chart-2': isOnline,
            }
          )}
        />
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm">name</span>
        <span className="text-[12px] opacity-50">
          {isOnline ? t('online') : t('offline')}
        </span>
      </div>
    </div>
  );
};

UserOnline.displayName = 'UserOnline';
