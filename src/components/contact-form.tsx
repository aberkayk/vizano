"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { sendMail } from "@/lib/mail";
import { Label } from "./ui/label";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const y = useTranslations("AlertMessages");

  const contactFormSchema = z.object({
    name: z.string().min(2, { message: y("nameRequired") }),
    surname: z.string().min(2, { message: y("surnameRequired") }),
    email: z.string().email({ message: y("emailInvalid") }),
    number: z.string().optional(),
    message: z.string().min(10, {
      message: y("messageMinLength"),
    }),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      number: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `İsim: ${values.name}\nSoyisim: ${values.surname}\nEmail: ${values.email}\nİletişim Numarası: ${values.number}\nMesaj: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "İletişim Formu",
      text: mailText,
    });
    if (response?.messageId) {
      toast.success(t("messageSuccess"));
      form.reset(); // Formu başarıyla gönderildiğinde sıfırla
    } else {
      toast.error(t("messageFail"));
    }
  };

  return (
    <Form {...form}>
      <form
        className="items-center w-full max-w-3xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4 md:grid rounded-lg max-w-3xl w-full mx-auto px-12 my-12">
          <div className="flex flex-col gap-y-1 col-span-1">
            <Label className="font-semibold text-base">{t("name")}</Label>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="lg:col-span-2">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-1 col-span-1">
            <Label className="font-semibold text-base">
              {t("surname")}
            </Label>
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem className="lg:col-span-2">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-1 col-span-1">
            <Label className="font-semibold text-base">{t("email")}</Label>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="lg:col-span-2">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-1 col-span-1">
            <Label className="font-semibold text-base">
              {t("number")}
            </Label>
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem className="lg:col-span-2">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-y-1 col-span-2">
            <Label className="font-semibold text-base">
              {t("message")}
            </Label>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="lg:col-span-2">
                  <FormControl>
                    <Textarea
                      {...field}
                      className="sm:col-span-2 overflow-y-auto max-h-48 min-h-32 placeholder:text-gray-40"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2 flex justify-center ">
            <Button
              variant="green"
              className="w-full min-w-32 max-w-64"
              disabled={isLoading}
            >
              {isLoading ? t("sending") : t("send")}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
