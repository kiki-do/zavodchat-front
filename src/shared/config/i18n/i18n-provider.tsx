import { FC } from 'react';
import { I18nextProvider, I18nextProviderProps } from 'react-i18next';

import i18n from './config';

/**
 * @description Свойства "Провайдера i18n".
 */
export type I18nProviderProps = Omit<I18nextProviderProps, 'i18n'>;

/**
 * @description Провайдер i18n.
 */
export const I18nProvider: FC<I18nProviderProps> = props => (
  <I18nextProvider {...props} i18n={i18n} />
);
