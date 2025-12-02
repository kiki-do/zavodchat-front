import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircle } from 'lucide-react';
import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import z from 'zod';

import { createServerSchema } from './schema';

import { useCreateServer } from '@/pages/protected/servers/api/use-create-server';
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

  const [isOpen, setIsOpen] = useState(false);

  const hanleIsOpen = () => setIsOpen(prev => !prev);

  const createMutation = useCreateServer();

  const schema = createServerSchema(t);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    await createMutation.mutateAsync({
      params: {
        query: {
          name: values.name,
        },
        cookie: { zavodchat_token: '' },
      },
    });
    form.reset();
    setIsOpen(false);

    console.log(values);
  };

  return (
    <Modal open={isOpen} onOpenChange={hanleIsOpen}>
      <ModalTrigger>
        <ItemMedia variant="icon" tooltip={t('title')} className="mt-auto">
          <Button variant="ghost">
            <PlusCircle />
          </Button>
        </ItemMedia>
      </ModalTrigger>

      <ModalContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              <ModalClose>
                <Button variant="outline">{t('cancel')}</Button>
              </ModalClose>
              <Button disabled={createMutation.isPending} type="submit">
                {t('create')}
              </Button>
            </ModalFooter>
          </form>
        </Form>
      </ModalContent>
    </Modal>
  );
};

CreateServerModal.displayName = 'CreateServerModal';
