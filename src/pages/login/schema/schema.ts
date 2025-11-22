import { TFunction } from 'i18next';
import z from 'zod';

export const loginSchema = (t: TFunction<'translations', 'loginPage'>) =>
  z.object({
    username: z.string().min(2, {
      message: t('usernameMinError'),
    }),

    password: z
      .string()
      .min(8, { message: t('passwordMinError') })
      .max(32, {
        message: t('passwordMaxError'),
      }),
  });
