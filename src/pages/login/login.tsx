import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Login: FC = () => {
  const { t } = useTranslation('translations');

  return <div>{t('greeting')}</div>;
};

Login.displayName = 'Login';
