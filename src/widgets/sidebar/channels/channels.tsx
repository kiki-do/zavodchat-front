import type { FC } from 'react';

import { ItemGroup, ItemMedia } from '@/shared/ui';

export const Channels: FC = () => {
  return (
    <div className="bg-accent flex w-14 flex-col gap-2 overflow-y-auto rounded-md py-4">
      <ItemGroup>
        <ItemMedia tooltip={'dsasdasdasddsadasdsada'}>ds</ItemMedia>
      </ItemGroup>
    </div>
  );
};

Channels.displayName = 'Channels';
