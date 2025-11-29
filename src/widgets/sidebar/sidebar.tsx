import { Link } from '@tanstack/react-router';
import { Handshake, List, SmilePlus } from 'lucide-react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { UserPanel } from './user-panel/user-panel';
import { Channels } from './channels';

import { Item, ItemGroup } from '@/shared/ui';

export const Sidebar: FC = () => {
  const { t } = useTranslation('translations', { keyPrefix: 'sidebarLink' });

  const items = [
    { name: t('friends'), icon: <Handshake size={16} />, href: '/' },
    { name: t('request'), icon: <SmilePlus size={16} />, href: '/requests' },
    { name: t('serversList'), icon: <List size={16} />, href: '/servers' },
  ];

  return (
    <aside className="relative flex w-full gap-2 p-1">
      <Channels />
      <div className="bg-accent flex w-full flex-col overflow-y-auto rounded-md p-4">
        <ItemGroup className="space-y-2">
          {items.map(({ name, icon, href }, index) => (
            <Link to={href} key={index}>
              <Item size="sm" variant="outline">
                {icon}
                {name}
              </Item>
            </Link>
          ))}
        </ItemGroup>
      </div>
      <UserPanel />
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';
