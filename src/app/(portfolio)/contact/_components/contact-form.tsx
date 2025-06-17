'use client';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { H2, H3, H4 } from '~/components/typography';
import { MailIcon, SendIcon } from 'lucide-react';
import { useToast } from '~/components/ui/use-toast';
import { MailSentSuccess } from '~/components/animated-icon';
import { SendEmail } from '~/lib/send-mail';
import { ContactEmailTemplate } from '~/components/email-templates/contact-email';
import { useI18n } from '~/hooks/useI18n';

export function ContactForm() {
  const { t } = useI18n();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z
      .string({
        required_error: t('contact.validation.nameRequired'),
      })
      .min(2, {
        message: t('contact.validation.nameMin'),
      }),
    email: z
      .string({
        required_error: t('contact.validation.emailRequired'),
      })
      .email({
        message: t('contact.validation.emailInvalid'),
      }),
    company: z.string(),
    category: z.string({
      required_error: t('contact.validation.reasonRequired'),
    }),
    message: z.string().min(1, {
      message: t('contact.validation.messageRequired'),
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      category: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await SendEmail({
      email: values.email,
      subject: values.category,
      template: ContactEmailTemplate({
        name: values.name,
        email: values.email, // Agregar esta línea
        company: values.company,
        message: values.message,
        reason: values.category,
      }),
    });

    if (res.error) {
      alert(res.errorMessage);
      toast({
        title: t('contact.form.error'),
        description: t('contact.form.errorMessage'),
        icon: <SendIcon />,
        variant: 'destructive',
      });
      return;
    } else {
      toast({
        title: t('contact.form.success'),
        description: t('contact.form.successMessage'),
        icon: <MailSentSuccess />,
      });
    }
  }

  return (
    <>
      <H2>{t('contact.title')}</H2>
      <p className="mb-4 mt-2 text-sm text-muted-foreground">
        {t('contact.description')}{' '}
        <span className="text-orange-200">{t('contact.opportunities')}</span>,{' '}
        <span className="text-orange-200">{t('contact.queries')}</span> {t('common.or')} {t('common.if')} {' '}
        <span className="text-orange-200">{t('contact.help')}</span> {t('contact.helpText')}
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex w-full flex-col gap-4 md:flex-row md:items-center">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-muted-foreground">
                    <H4 className="text-base">{t('contact.form.name')}</H4>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t('contact.form.namePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-muted-foreground">
                    <H4 className="text-base">{t('contact.form.company')}</H4>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t('contact.form.companyPlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-muted-foreground">
                  <H4 className="text-base">{t('contact.form.email')}</H4>
                </FormLabel>
                <FormControl>
                  <Input placeholder={t('contact.form.emailPlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground">
                  <H4 className="text-base">{t('contact.form.reason')}</H4>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('contact.form.reasonPlaceholder')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={t('contact.reasons.opportunity')}>
                      {t('contact.reasons.opportunity')}
                    </SelectItem>
                    <SelectItem value={t('contact.reasons.query')}>
                      {t('contact.reasons.query')}
                    </SelectItem>
                    <SelectItem value={t('contact.reasons.help')}>
                      {t('contact.reasons.help')}
                    </SelectItem>
                    <SelectItem value={t('contact.reasons.others')}>
                      {t('contact.reasons.others')}
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-muted-foreground">
                  <H4 className="text-base">{t('contact.form.message')}</H4>
                </FormLabel>
                <FormControl>
                  <Textarea placeholder={t('contact.form.messagePlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-end">
            <Button type="submit" className="w-full md:w-fit">
              <H3 className="flex items-center text-base">
                {t('contact.form.send')}
                <MailIcon className="ml-2 size-4 md:size-5" />
              </H3>
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
