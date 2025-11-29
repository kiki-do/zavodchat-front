import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from '@tanstack/react-router';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import { useRegister } from './api';
import { registerSchema } from './schema';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/shared/ui';

export const Register: FC = () => {
  const { t } = useTranslation('translations', { keyPrefix: 'registerPage' });

  const schema = registerSchema(t);

  const registerMutation = useRegister();

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      displayName: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    await registerMutation.mutateAsync({
      body: {
        username: values.username,
        displayname: values.displayName,
        password: values.password,
      },
    });
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
        <CardDescription>{t('description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('usernameLabel')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('usernamePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('displaNameLabel')}</FormLabel>
                  <FormDescription>
                    {t('displayNameDescription')}
                  </FormDescription>
                  <FormControl>
                    <Input
                      placeholder={t('displayNamePlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('passwordLabel')}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t('passwordPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">{t('submit')}</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <CardDescription>
          {t('footerDescription')}{' '}
          <Link
            to="/login"
            className="transition hover:text-white hover:underline"
          >
            {t('loginRedirect')}
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
};
