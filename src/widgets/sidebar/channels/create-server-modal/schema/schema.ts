import { TFunction } from 'i18next';
import z from 'zod';

export const createServerSchema = (
  t: TFunction<'translations', 'createServerModal'>
) =>
  z.object({
    name: z.string().min(2, {
      message: t('nameMinError'),
    }),
  });
