import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Friends: FC = () => {
  const { t } = useTranslation('translations');

  return <div>{t('greeting')}</div>;
};

Friends.displayName = 'Friends';
