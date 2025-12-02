import type { FC } from 'react';

import { useGetServer } from './api/use-get-server';

export const Servers: FC = () => {
  const { data } = useGetServer();
  return (
    <div>
      {data?.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
};

Servers.displayName = 'Servers';
