import type { FC } from 'react';

import { Logout } from './logout';

export const Settings: FC = () => {
  return (
    <div>
      <Logout />
    </div>
  );
};

Settings.displayName = 'Settings';
