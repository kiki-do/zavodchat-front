import { PlusCircle } from 'lucide-react';
import type { FC } from 'react';

import { Button, ItemGroup, ItemMedia } from '@/shared/ui';

export const Channels: FC = () => {
  return (
    <div className="bg-accent flex h-full w-14 flex-col items-center gap-2 overflow-y-auto rounded-md py-2">
      <ItemGroup>
        <ItemMedia variant="icon" tooltip={'dsasdasdasddsadasdsada'}>
          ds
        </ItemMedia>
      </ItemGroup>

      <ItemMedia variant="icon" tooltip={'asdasda'} className="mt-auto">
        <Button variant="ghost">
          <PlusCircle />
        </Button>
      </ItemMedia>
    </div>
  );
};

Channels.displayName = 'Channels';
