import type { FC } from 'react';

import { CreateServerModal } from './create-server-modal';

import { ItemGroup, ItemMedia } from '@/shared/ui';

export const Channels: FC = () => {
  return (
    <div className="bg-accent flex h-full w-14 flex-col items-center gap-2 overflow-y-auto rounded-md py-2">
      <ItemGroup>
        <ItemMedia variant="icon" tooltip={'dsasdasdasddsadasdsada'}>
          ds
        </ItemMedia>
      </ItemGroup>

      <CreateServerModal />
    </div>
  );
};

Channels.displayName = 'Channels';
