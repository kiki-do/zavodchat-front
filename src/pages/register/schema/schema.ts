import { TFunction } from 'i18next';
import z from 'zod';

export const registerSchema = (t: TFunction<'translations', 'registerPage'>) =>
  z.object({
    username: z.string().min(2, {
      message: t('usernameMinError'),
    }),

    displayName: z.string().min(2, {
      message: t('displayNameMinError'),
    }),

    password: z
      .string()
      .min(8, { message: t('passwordMinError') })
      .max(32, {
        message: t('passwordMaxError'),
      }),
  });
