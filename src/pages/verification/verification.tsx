import { useNavigate, useRouter } from '@tanstack/react-router';
import type { FC } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@/app/providers';
import { sleep } from '@/shared/lib/utils/sleep';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/shared/ui';

type FormValues = {
  otp: string;
};

export const Verification: FC = () => {
  const { t } = useTranslation('translations', {
    keyPrefix: 'verificationPage',
  });

  const auth = useAuth();

  const router = useRouter();

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      otp: '',
    },
  });

  const otpValue = form.watch('otp');

  const onSubmit = async (values: FormValues) => {
    console.log(values);
    auth.setIsAuthenticated(true);
    await router.invalidate();
    /**
     * @TODO Remove this. Just for example of response
     */
    await sleep(1000);
    navigate({ to: '/' });
  };

  useEffect(() => {
    if (otpValue?.length === 6) {
      form.handleSubmit(onSubmit)();
    }
  }, [otpValue]);

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
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP
                      disabled={form.formState.isSubmitting}
                      maxLength={6}
                      value={field.value}
                      onChange={value => field.onChange(value)}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

Verification.displayName = 'Verification';
