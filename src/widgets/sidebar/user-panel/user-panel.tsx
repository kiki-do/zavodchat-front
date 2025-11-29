import { useNavigate } from '@tanstack/react-router';
import { Headphones, Mic, Settings } from 'lucide-react';
import type { FC } from 'react';

import { UserOnline } from './user-online';

import { Item, ItemGroup } from '@/shared/ui';

export const UserPanel: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-0 left-0 w-full p-2">
      <div className="bg-background flex w-full items-center justify-between rounded-xl p-3">
        <UserOnline isOnline={false} />

        <ItemGroup className="flex flex-row items-center gap-1">
          <Item size="sm" className="p-1.5" variant="outline">
            <Mic size={20} />
          </Item>

          <Item size="sm" className="p-1.5" variant="outline">
            <Headphones size={20} />
          </Item>

          <Item
            onClick={() => navigate({ to: '/settings' })}
            size="sm"
            className="p-1.5"
            variant="outline"
          >
            <Settings size={20} />
          </Item>
        </ItemGroup>
      </div>
    </div>
  );
};

UserPanel.displayName = 'UserPanel';
