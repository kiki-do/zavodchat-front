import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle } from 'lucide-react';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import z from 'zod';

import { createServerSchema } from './schema';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  ItemMedia,
  Modal,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/shared/ui';

export const CreateServerModal: FC = () => {
  const { t } = useTranslation('translations', {
    keyPrefix: 'createServerModal',
  });

  const schema = createServerSchema(t);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    console.log(values);
  };

  return (
    <Modal>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <ModalTrigger asChild>
            <ItemMedia variant="icon" tooltip={t('title')} className="mt-auto">
              <Button variant="ghost">
                <PlusCircle />
              </Button>
            </ItemMedia>
          </ModalTrigger>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>{t('title')}</ModalTitle>
            </ModalHeader>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('nameLabel')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('namePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ModalFooter>
              <ModalClose asChild>
                <Button variant="outline">{t('cancel')}</Button>
              </ModalClose>
              <Button type="submit">{t('create')}</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Form>
    </Modal>
  );
};

CreateServerModal.displayName = 'CreateServerModal';
