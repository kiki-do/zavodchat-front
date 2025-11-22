import type { FC } from 'react';

import { Channels } from './channels/channels';

import { Item, ItemGroup } from '@/shared/ui';

export const Sidebar: FC = () => {
  return (
    <aside className="flex w-full gap-2 p-1">
      <Channels />
      <div className="bg-accent flex w-full flex-col overflow-y-auto rounded-md p-4">
        <ItemGroup>
          <Item size="sm" variant="outline">
            asdasd
          </Item>
        </ItemGroup>
      </div>
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';
